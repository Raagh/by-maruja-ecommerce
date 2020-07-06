import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { UserFeedResponseCandidatesItem } from 'instagram-private-api';
import { BodyCopyRegularSmall } from '../../config/global-styled-components';
import { device } from '../../config/device';
import { colors } from '../../config/global-styles';

const FeedContainer = styled.section`
  margin: 0 auto 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: ${colors.ui.grey5percent};

  @media ${device.large} {
    padding: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-width: 1600px;
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
    height: 350px;

    img {
      display: block !important;
    }
  }
`;

const Image = styled.img`
  max-width: 50%;
  padding: 0.5rem;
`;

const Feed = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('/api/instagram-feed').then((result) => setItems(result.data.map((x: UserFeedResponseCandidatesItem) => x.url)));
  }, []);

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
          <Image alt="first" src={items[0]} />
          <Image alt="second" src={items[1]} />
          <Image alt="third" src={items[2]} />
        </ImagesContainer>
      )}
    </FeedContainer>
  );
};

export default Feed;
