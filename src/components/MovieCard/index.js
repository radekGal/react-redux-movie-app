import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const sharedStyles = css`
  color: ${props => props.theme.colors.white};
`;

const MovieCardContainer = styled(motion.div)``;
const Image = styled(motion.img)`
  overflow: hidden;
`;

const MovieTitle = styled.h3`
  ${sharedStyles}
`;

const MovieYear = styled.p`
  ${sharedStyles}
`;

const MovieCard = ({ Title, Poster, Year }) => {
  return(
    <MovieCardContainer
      whileHover={{ 
        scale: 0.95,
        transition: {
          duration: 0.2
        }
      }}
    >
      <div>
        <Image src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/300x450"} alt={Title} whileHover={{ scale: 1.1}} />
      </div>
      <div>
        <MovieTitle>{Title}</MovieTitle>
        <MovieYear>{Year}</MovieYear>
      </div>
    </MovieCardContainer>
  );
}

export default MovieCard;