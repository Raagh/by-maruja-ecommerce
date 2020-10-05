import React, { useContext } from 'react';
import styled from 'styled-components';
import { CartProduct as CP } from '../../../model/cart-product';
import RemoteFixedSizeImage from '../image-types/remote-fixed-size-image';
import { LabelLarge, LabelLargeBold, StyledH6Title, LabelSmall } from '../../../config/global-styled-components';
import { colors } from '../../../config/global-styles';
import { store } from '../../../context/store';
import { ActionTypes } from '../../../model/action-types';

const SingleItemContainer = styled.div`
  display: flex;
  margin-bottom: 0.5rem;
  box-shadow: 0px 2px 2px rgba(81, 50, 50, 0.05);
  border-radius: 4px;
  height: 133px;
`;

const SingleItemImage = styled(RemoteFixedSizeImage)`
  width: 118px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 1rem 0.5rem 1rem 0.5rem;
`;

const NameAndPrice = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Quantity = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
`;

const QuantityTitle = styled(StyledH6Title)`
  color: ${colors.ui.grey50percent};
  margin-right: 0.5rem;
  line-height: 18px;
`;

const DeleteImg = styled.img`
  /* margin: auto 1rem 1.25rem auto; */
  :hover {
    cursor: pointer;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  display: column;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
`;

const SingleItem = ({ product }: { product: CP }) => {
  const { dispatch } = useContext(store);
  return (
    <SingleItemContainer>
      <SingleItemImage image={product.image} asset={product.asset} alt={product.name} />
      <InfoContainer>
        <NameAndPrice>
          <LabelLarge>{product.name}</LabelLarge>
          <LabelLargeBold>${product.price}</LabelLargeBold>
        </NameAndPrice>
        <Quantity>
          <QuantityTitle>CANTIDAD</QuantityTitle>
          <LabelSmall>
            {product.quantity} {product.quantity > 1 ? 'unidades' : 'unidad'}
          </LabelSmall>
        </Quantity>
        <StyledImgContainer>
          <DeleteImg
            src="/assets/delete.svg"
            alt="Delete"
            onClick={() => dispatch({ type: ActionTypes.Remove, payload: product })}
          />
        </StyledImgContainer>
      </InfoContainer>
    </SingleItemContainer>
  );
};

export default SingleItem;
