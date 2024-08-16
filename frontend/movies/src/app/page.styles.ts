import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  background-color: #1b1b1b;
`;

export const Content = styled.main`
  flex: 1;
  padding: 20px;
  color: #ffffff;
`;

export const Section = styled.div`
  margin-bottom: 50px;
  padding: 20px;
  background-color: #333;
  border-radius: 10px;
`;

export const SectionTitle = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FeaturedSection = styled(Section)`
  display: flex;
  gap: 10px;
  height: 500px;
`;

export const FeaturedMovieCard = styled.div`
  flex: 3;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`;

export const Sidebar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const MoviesCarousel = styled.div`
  display: flex;
  gap: 15px; /* Diminuir o espaço entre os cartazes */
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 0;
`;

export const MovieCard = styled.div`
  flex: 0 0 23%;
  display: flex;
  flex-direction: column;
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  min-width: 0;
  height: 250px; /* Reduzir a altura do cartaz */
`;

export const MovieImage = styled.img`
  width: 100%;
  min-height: 100%; /* Ajuste a altura da imagem para ocupar menos espaço */
  object-fit: cover;
  opacity: 0.7;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;

export const FeaturedMovieImage = styled(MovieImage)`
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);
`;

export const MovieDetails = styled.div`
  padding: 10px; /* Reduzir o padding para economizar espaço */
  position: absolute;
  bottom: 5px; /* Ajustar a posição dos detalhes */
  left: 5px;
  color: #ffffff;
  z-index: 1;
`;

export const MovieTitle = styled.h2`
  font-size: 16px; /* Reduzir o tamanho da fonte do título */
  margin-bottom: 5px;
`;

export const MovieInfo = styled.div`
  display: flex;
  gap: 5px; /* Diminuir o espaço entre as informações */
  margin-bottom: 5px;
  font-size: 12px; /* Reduzir o tamanho da fonte das informações */
`;

export const WatchTrailerButton = styled.button`
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 4px 8px; /* Reduzir o padding do botão */
  border: none;
  border-radius: 20px;
  cursor: pointer;
  align-self: flex-start;
  font-size: 12px; /* Reduzir o tamanho da fonte do botão */
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &::after {
    content: '▶';
    margin-left: 5px; /* Ajustar o espaço após o ícone */
  }
`;

export const ArrowButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 0;
  margin: 0 10px;
  z-index: 2;
`;

export const ReducedHeightSection = styled(Section)`
  height: 350px; /* Ajuste a altura conforme necessário */

  @media (max-width: 730px) {
    height: 370px; /* Ajuste a altura conforme necessário */
  }
`;

export const LinkText = styled.p`
  color: #b1b1b1;
  font-size: 16px;
  margin: 0;
  margin-left: 10px;

  a {
    color: #ffffff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  h2 {
    margin-right: 10px;
    font-size: 24px;
    font-weight: bold;
  }

  p {
    margin-top: 5px;
    margin: 5;
    color: #b1b1b1;
    font-size: 16px;
  }

  a {
    margin-left: 5px;
    color: #ffffff; /* Cor do texto "login" */
    font-weight: normal;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      color: #ffffff; /* Cor do texto ao passar o mouse */
    }
  }
`;

export const FooterSection = styled.div`
  background-color: #1b1b1b; /* Mesmo fundo do resto da página */
  padding: 20px;
  text-align: center;
  color: #ffffff; /* Cor branca para o texto */
  font-size: 14px; /* Tamanho da fonte menor para o rodapé */
  border-top: 1px solid #333; /* Linha de separação no topo para dar destaque */
  border-radius: 0 0 10px 10px; /* Bordas arredondadas apenas na parte inferior */
`;

