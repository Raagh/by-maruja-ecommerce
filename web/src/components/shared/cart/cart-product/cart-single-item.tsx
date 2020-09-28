import React from 'react';
import styled from 'styled-components';
import { CartProduct as CP } from '../../../../model/cart-product';
import RemoteFixedSizeImage from '../../image-types/remote-fixed-size-image';
import { LabelLarge, LabelLargeBold, StyledH5Title, LabelSmall } from '../../../../config/global-styled-components';
import { colors } from '../../../../config/global-styles';

const SingleItemContainer = styled.div``;

const SingleItemImage = styled(RemoteFixedSizeImage)``;

const NameAndPrice = styled.div``;

const Quantity = styled.div``;

const QuantityTitle = styled(StyledH5Title)`
  color: ${colors.ui.grey50percent};
`;

const DeleteImg = styled.img``;

const SingleItem = ({ product }: { product: CP }) => {
  return (
    <SingleItemContainer>
      <SingleItemImage image={product.images[0].image} asset={product.images[0].asset} alt={product.name} />
      <NameAndPrice>
        <LabelLarge>{product.name}</LabelLarge>
        <LabelLargeBold>{product.price}</LabelLargeBold>
      </NameAndPrice>
      <Quantity>
        <QuantityTitle>CANTIDAD</QuantityTitle>
        <LabelSmall>
          {product.quantity} {product.quantity > 1 ? 'unidad' : 'unidades'}
        </LabelSmall>
      </Quantity>
      <DeleteImg src="/assets/delete.svg" alt="Delete" />
    </SingleItemContainer>
  );
};

export default SingleItem;
