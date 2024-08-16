// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    console.log('Validando usuário:', email); // Log para exibir qual email está sendo validado

    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      console.log('Usuário validado:', user.username); // Log para exibir o username validado
      const { password, ...result } = user;
      return result;
    }
    console.log('Credenciais inválidas para o usuário:', email); // Log para exibir tentativa inválida
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    const loginData = {
      access_token: accessToken,
      id: user.id,
      username: user.username,
      email: user.email,
    };
    
    console.log('Dados de login gerados:', loginData); // Log para exibir os dados que serão retornados no login

    return loginData;
  }

  async register(userData: any) {
    console.log('Registrando usuário com dados:', userData); // Log para exibir dados ao registrar
    return this.usersService.create(userData);
  }
}
