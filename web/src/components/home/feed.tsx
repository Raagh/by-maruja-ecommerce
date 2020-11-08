import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BodyCopyRegularSmall } from '../../config/global-styled-components';
import { device, reusablePlaceholder } from '../../config/device';
import { colors } from '../../config/global-styles';
import LazyLoadImage from '../shared/image-types/lazy-image';

const BackgroundContainer = styled.section`
  background-color: ${colors.ui.grey5percent};
`;

const FeedContainer = styled.section`
  padding: 2rem;
  text-align: center;

  @media ${device.large} {
    padding: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: auto;
    max-width: 1600px;
  }
`;

const TextContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${device.large} {
    margin-right: 4rem;
  }
`;

const FeedSubtitle = styled(BodyCopyRegularSmall)`
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const FeedDescription = styled(BodyCopyRegularSmall)`
  margin-top: 2rem;
`;

const ImagesContainer = styled.article`
  margin-top: 2rem;
  display: flex;
  flex-direction: row;

  img:nth-child(3) {
    display: none;
  }

  @media ${device.large} {
    img {
      display: block !important;
    }
  }
`;

const Image = styled(LazyLoadImage)`
  max-width: 50%;
  object-fit: cover;
  padding: 0.5rem;

  @media ${device.large} {
    width: 350px;
  }
`;

const MarujaLink = styled.a`
  text-decoration: none;
  color: ${colors.ui.darkSurface};
  font-weight: bold;
  transition: ease-out 200ms;

  :hover {
    color: ${colors.primary.dark};
  }
`;

const Feed = () => {
  const [items, setItems] = useState([reusablePlaceholder, reusablePlaceholder, reusablePlaceholder]);
  const [areItemsLoaded, setItemsLoaded] = useState(false);

  useEffect(() => {
    if (!areItemsLoaded) {
      setItemsLoaded(true);
      axios
        .get('/api/instagram-feed')
        .then((result) => {
          setItems([]);
          setItems(result.data);
        })
        .catch(() => {});
    }
  }, [areItemsLoaded]);

  return (
    <BackgroundContainer>
      <FeedContainer>
        <TextContainer>
          <FeedSubtitle> ¿Qué se dice de Maruja?</FeedSubtitle>
          <FeedDescription>
            Leé más comentarios y seguínos en
            <MarujaLink href="https://www.instagram.com/bymaruja/" target="_blank" rel="noopener noreferrer">
              {' '}
              <strong>@bymaruja</strong>
            </MarujaLink>
          </FeedDescription>
        </TextContainer>

        {items.length !== 0 && (
          <ImagesContainer>
            {items.map((x, index) => (
              <Image alt="feed-image" key={index} src={x} placeholderSrc={reusablePlaceholder} />
            ))}
          </ImagesContainer>
        )}
      </FeedContainer>
    </BackgroundContainer>
  );
};

export default Feed;
