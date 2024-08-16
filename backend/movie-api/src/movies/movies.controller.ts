import { Controller, Get, Query, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get('search')
  searchMovies(@Query('q') query: string): Observable<any> {
    return this.moviesService.searchMovies(query);
  }

  @Get('recent')
  getRecentMovies(
    @Query('year') year?: string,
  ): Observable<AxiosResponse<any>> {
    const currentYear = new Date().getFullYear().toString();
    return this.moviesService.getRecentMovies(year || currentYear);
  }

  @Get('by-date-range')
  getMoviesByDateRange(
    @Query('start') startDate: string,
    @Query('end') endDate: string,
  ): Observable<AxiosResponse<any>> {
    console.log(`Received request for movies from ${startDate} to ${endDate}`);
    return this.moviesService.getMoviesByDateRange(startDate, endDate);
  }

  @Get(':id')
  getMovieDetails(@Param('id') id: string): Observable<any> {
    return this.moviesService.getMovieDetails(id);
  }

  @Get('people/popular')
  getPopularPeople(): Observable<AxiosResponse<any>> {
    return this.moviesService.getPopularPeople();
  }

  @Get('top_rated')
  getTopRatedMovies(): Observable<AxiosResponse<any>> {
    return this.moviesService.getTopRatedMovies();
  }
}
