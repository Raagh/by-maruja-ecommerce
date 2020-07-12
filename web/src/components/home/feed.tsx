import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BodyCopyRegularSmall } from '../../config/global-styled-components';
import { device } from '../../config/device';
import { colors } from '../../config/global-styles';
import LazyLoadImage from '../shared/image-types/lazy-image';

const FeedContainer = styled.section`
  padding: 2rem;
  text-align: center;
  background-color: ${colors.ui.grey5percent};

  @media ${device.large} {
    padding: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
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

const Feed = () => {
  const placeholder =
    'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAJAA4DASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQT/xAAlEAABAgQEBwAAAAAAAAAAAAABAgMABAYRBRIhMRM0NXGBkbL/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//EABoRAAICAwAAAAAAAAAAAAAAAAECABIDERP/2gAMAwEAAhEDEQA/AAaWpluWZM5OKYmV3HACX0hYJ1JIzaWNt/Rg+qMQcUzKsmWQXGhYvFGVat9DY7RHhvTF90fKoFq7nfAh57axkmKrjqBP/9k=';
  const [items, setItems] = useState([placeholder, placeholder, placeholder]);
  const [areItemsLoaded, setItemsLoaded] = useState(false);

  useEffect(() => {
    if (!areItemsLoaded) {
      setItemsLoaded(true);
      axios.get('/api/instagram-feed').then((result) => {
        setItems([]);
        setItems(result.data);
      });
    }
  }, [areItemsLoaded]);

  return (
    <FeedContainer>
      <TextContainer>
        <FeedSubtitle>Que se dice de Maruja?</FeedSubtitle>
        <FeedDescription>
          Lee mas comentarios y seguinos en <strong>@bymaruja</strong>
        </FeedDescription>
      </TextContainer>

      {items.length !== 0 && (
        <ImagesContainer>
          {items.map((x, index) => (
            <Image alt="feed-image" key={index} src={x} placeholderSrc={placeholder} />
          ))}
        </ImagesContainer>
      )}
    </FeedContainer>
  );
};

export default Feed;
