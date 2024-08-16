"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import {
  Container,
  Content,
  FeaturedSection,
  SectionTitle,
  MoviesCarousel,
  Sidebar,
  FeaturedMovieCard,
  MovieCard,
  FeaturedMovieImage,
  MovieImage,
  MovieDetails,
  MovieTitle,
  MovieInfo,
  WatchTrailerButton,
  ArrowButton,
  ReducedHeightSection,
  Section,
  LinkText,
  TitleWrapper,
  FooterSection,
} from "./page.styles";
import { useModalStore } from "../store/modalStore";

const Home: React.FC = () => {
  const [featuredMovie, setFeaturedMovie] = useState<any>(null);
  const [highlightedMovies, setHighlightedMovies] = useState<any[]>([]);
  const [recentMovies, setRecentMovies] = useState<any[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<any[]>([]); // Novo estado para filmes recomendados
  const [popularPeople, setPopularPeople] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [topRatedPage, setTopRatedPage] = useState(0); // Novo estado para controlar a página dos filmes recomendados
  const [peoplePage, setPeoplePage] = useState(0);
  const { openLoginModal } = useModalStore();

  // Fetching movies for Section 1 (Popular Movies)
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch("http://localhost:3000/movies/popular");
        const data = await response.json();
        let movies = data.results;

        const sortedByPopularity = [...movies].sort(
          (a: any, b: any) => b.popularity - a.popularity
        );

        setFeaturedMovie(sortedByPopularity[0]);
        setHighlightedMovies(sortedByPopularity.slice(1, 4));
      } catch (error) {
        console.error("Erro ao buscar filmes populares:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  // Fetching movies for Section 2 (Recent Movies)
  useEffect(() => {
    const fetchRecentMovies = async () => {
      try {
        const response = await fetch("http://localhost:3000/movies/recent");
        const data = await response.json();
        let movies = data.results;

        const sortedByReleaseDate = [...movies].sort(
          (a: any, b: any) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        );

        setRecentMovies(sortedByReleaseDate);
      } catch (error) {
        console.error("Erro ao buscar filmes recentes:", error);
      }
    };

    fetchRecentMovies();
  }, []);

  // Fetching movies for Section 3 (Top Rated Movies)
  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch("http://localhost:3000/movies/top_rated");
        const data = await response.json();
        let movies = data.results;

        setTopRatedMovies(movies);
      } catch (error) {
        console.error("Erro ao buscar filmes mais bem avaliados:", error);
      }
    };

    fetchTopRatedMovies();
  }, []);

  // Fetching people for Section 4 (Popular People)
  useEffect(() => {
    const fetchPopularPeople = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/movies/people/popular"
        );
        const data = await response.json();
        let people = data.results;

        setPopularPeople(people);
      } catch (error) {
        console.error("Erro ao buscar pessoas populares:", error);
      }
    };

    fetchPopularPeople();
  }, []);

  const moviesPerPage = 4;
  const startIndex = currentPage * moviesPerPage;
  const displayedMovies = recentMovies.slice(
    startIndex,
    startIndex + moviesPerPage
  );

  const topRatedStartIndex = topRatedPage * moviesPerPage;
  const displayedTopRatedMovies = topRatedMovies.slice(
    topRatedStartIndex,
    topRatedStartIndex + moviesPerPage
  );

  const peoplePerPage = 4;
  const peopleStartIndex = peoplePage * peoplePerPage;
  const displayedPeople = popularPeople.slice(
    peopleStartIndex,
    peopleStartIndex + peoplePerPage
  );

  const handlePrevClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (startIndex + moviesPerPage < recentMovies.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleTopRatedPrevClick = () => {
    if (topRatedPage > 0) {
      setTopRatedPage(topRatedPage - 1);
    }
  };

  const handleTopRatedNextClick = () => {
    if (topRatedStartIndex + moviesPerPage < topRatedMovies.length) {
      setTopRatedPage(topRatedPage + 1);
    }
  };

  const handlePeoplePrevClick = () => {
    if (peoplePage > 0) {
      setPeoplePage(peoplePage - 1);
    }
  };

  const handlePeopleNextClick = () => {
    if (peopleStartIndex + peoplePerPage < popularPeople.length) {
      setPeoplePage(peoplePage + 1);
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <FeaturedSection>
          {featuredMovie && (
            <FeaturedMovieCard>
              <FeaturedMovieImage
                src={`https://image.tmdb.org/t/p/w500${featuredMovie.backdrop_path}`}
                alt={featuredMovie.title}
              />
              <MovieDetails>
                <span>🔥 Em destaque</span>
                <MovieTitle>{featuredMovie.title}</MovieTitle>
                <span>{featuredMovie.overview}</span>
                <MovieInfo>
                  <span>⭐ {featuredMovie.vote_average}</span>
                  <span>{featuredMovie.release_date.slice(0, 4)}</span>
                  <span>Gêneros: {featuredMovie.genre_ids.join(", ")}</span>
                </MovieInfo>
                <WatchTrailerButton>Assistir ao trailer</WatchTrailerButton>
              </MovieDetails>
            </FeaturedMovieCard>
          )}
          <Sidebar>
            {highlightedMovies.map((movie) => (
              <MovieCard key={movie.id}>
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <MovieDetails>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <MovieInfo>
                    <span>⭐ {movie.vote_average}</span>
                    <span>{movie.release_date.slice(0, 4)}</span>
                    <span>Gêneros: {movie.genre_ids.join(", ")}</span>
                  </MovieInfo>
                  <WatchTrailerButton>Assistir ao trailer</WatchTrailerButton>
                </MovieDetails>
              </MovieCard>
            ))}
          </Sidebar>
        </FeaturedSection>

        <ReducedHeightSection>
          <SectionTitle>
            Últimos lançamentos
            <div>
              <ArrowButton onClick={handlePrevClick}>{"<"}</ArrowButton>
              <ArrowButton onClick={handleNextClick}>{">"}</ArrowButton>
            </div>
          </SectionTitle>
          <MoviesCarousel>
            {displayedMovies.map((movie) => (
              <MovieCard key={movie.id}>
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <MovieDetails>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <MovieInfo>
                    <span>⭐ {movie.vote_average}</span>
                    <span>{movie.release_date.slice(0, 4)}</span>
                    <span>Gêneros: {movie.genre_ids.join(", ")}</span>
                  </MovieInfo>
                  <WatchTrailerButton>Assistir ao trailer</WatchTrailerButton>
                </MovieDetails>
              </MovieCard>
            ))}
          </MoviesCarousel>
        </ReducedHeightSection>

        <ReducedHeightSection>
          <SectionTitle>
            <TitleWrapper>
              Recomendados{" "}
              <LinkText>
                Faça <a onClick={openLoginModal}>login</a> para recomendações
                personalizadas
              </LinkText>
            </TitleWrapper>
            <div>
              <ArrowButton onClick={handleTopRatedPrevClick}>{"<"}</ArrowButton>
              <ArrowButton onClick={handleTopRatedNextClick}>{">"}</ArrowButton>
            </div>
          </SectionTitle>
          <MoviesCarousel>
            {displayedTopRatedMovies.map((movie) => (
              <MovieCard key={movie.id}>
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <MovieDetails>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <MovieInfo>
                    <span>⭐ {movie.vote_average}</span>
                    <span>{movie.release_date.slice(0, 4)}</span>
                    <span>Gêneros: {movie.genre_ids.join(", ")}</span>
                  </MovieInfo>
                  <WatchTrailerButton>Assistir ao trailer</WatchTrailerButton>
                </MovieDetails>
              </MovieCard>
            ))}
          </MoviesCarousel>
        </ReducedHeightSection>

        <ReducedHeightSection>
          <SectionTitle>
            <TitleWrapper>Celebridades</TitleWrapper>
            <div>
              <ArrowButton onClick={handlePeoplePrevClick}>{"<"}</ArrowButton>
              <ArrowButton onClick={handlePeopleNextClick}>{">"}</ArrowButton>
            </div>
          </SectionTitle>
          <MoviesCarousel>
            {displayedPeople.map((person) => (
              <MovieCard key={person.id}>
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                  alt={person.name}
                />
                <MovieDetails>
                  <MovieTitle>{person.name}</MovieTitle>
                  <MovieInfo>
                    <span>⭐ Popularidade: {person.popularity}</span>
                  </MovieInfo>
                  <WatchTrailerButton>Ver Detalhes</WatchTrailerButton>
                </MovieDetails>
              </MovieCard>
            ))}
          </MoviesCarousel>
        </ReducedHeightSection>
        <FooterSection>
          <p>© 2024 Rader. All rights reserved</p>
        </FooterSection>
      </Content>
    </Container>
  );
};

export default Home;
