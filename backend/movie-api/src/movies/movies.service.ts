import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable()
export class MoviesService {
  private readonly API_KEY: string;
  private readonly BASE_URL: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.API_KEY = this.configService.get<string>('TMDB_API_KEY');
    this.BASE_URL = 'https://api.themoviedb.org/3';
  }

  getRecentMovies(year: string): Observable<AxiosResponse<any>> {
    const url = `${this.BASE_URL}/discover/movie`; // Corrija a URL aqui
    const params = {
      api_key: this.API_KEY,
      primary_release_year: year,
      sort_by: 'release_date.desc',
    };

    console.log('URL:', url); // Log da URL
    console.log('Params:', params); // Log dos parâmetros

    return this.httpService.get(url, { params }).pipe(
      map((response) => {
        console.log('Response Data:', response.data);
        return response.data;
      }),
      catchError((error) => {
        console.error('Error Response:', error.response?.data || error.message);
        throw error;
      }),
    );
  }

  getMoviesByDateRange(startDate: string, endDate: string): Observable<AxiosResponse<any>> {
    // Converter datas para o formato YYYY-MM-DD exigido pela API TMDB
    const start = moment(startDate, 'DD/MM/YYYY').format('YYYY-MM-DD');
    const end = moment(endDate, 'DD/MM/YYYY').format('YYYY-MM-DD');

    const url = `${this.BASE_URL}/discover/movie`;
    const params = {
      api_key: this.API_KEY,
      'primary_release_date.gte': start,  // Data de lançamento inicial
      'primary_release_date.lte': end,    // Data de lançamento final
      sort_by: 'release_date.desc',
    };

    console.log('URL:', url);
    console.log('Params:', params);

    return this.httpService.get(url, { params }).pipe(
      map((response) => {
        console.log('Response Data:', response.data);
        return response.data;
      }),
      catchError((error) => {
        console.error('Error Response:', error.response?.data || error.message);
        throw error;
      }),
    );
  }

  searchMovies(query: string): Observable<AxiosResponse<any>> {
    const url = `${this.BASE_URL}/search/movie`;
    const params = {
      api_key: this.API_KEY,
      query: query,
    };

    console.log('URL:', url);
    console.log('Params:', params);

    return this.httpService.get(url, { params }).pipe(
      map((response) => {
        console.log('Response Data:', response.data);
        return response.data;
      }),
      catchError((error) => {
        console.error('Error Response:', error.response?.data || error.message);
        throw error;
      }),
    );
  }

  getMovieDetails(id: string): Observable<AxiosResponse<any>> {
    const url = `${this.BASE_URL}/movie/${id}`;
    const params = {
      api_key: this.API_KEY,
    };

    console.log('URL:', url);
    console.log('Params:', params);

    return this.httpService.get(url, { params }).pipe(
      map((response) => {
        console.log('Response Data:', response.data);
        return response.data;
      }),
      catchError((error) => {
        console.error('Error Response:', error.response?.data || error.message);
        throw error;
      }),
    );
  }

  getPopularPeople(): Observable<AxiosResponse<any>> {
    const url = `${this.BASE_URL}/person/popular`;
    const params = {
      api_key: this.API_KEY,
    };

    console.log('URL:', url);
    console.log('Params:', params);

    return this.httpService.get(url, { params }).pipe(
      map((response) => {
        console.log('Response Data:', response.data);
        return response.data;
      }),
      catchError((error) => {
        console.error('Error Response:', error.response?.data || error.message);
        throw error;
      }),
    );
  }

  getTopRatedMovies(): Observable<AxiosResponse<any>> {
    const url = `${this.BASE_URL}/movie/top_rated`; // URL da API para filmes mais bem avaliados
    const params = {
      api_key: this.API_KEY,
    };

    console.log('URL:', url);
    console.log('Params:', params);

    return this.httpService.get(url, { params }).pipe(
      map((response) => {
        console.log('Response Data:', response.data);
        return response.data;
      }),
      catchError((error) => {
        console.error('Error Response:', error.response?.data || error.message);
        throw error;
      }),
    );
  }
}
