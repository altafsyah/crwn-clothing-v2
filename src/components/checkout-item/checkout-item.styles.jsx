import styled from "styled-components";

export const CheckoutItemContainer = styled.tr`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutImageContainer = styled.td`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutItemName = styled.td`
  width: 23%;
`;

export const CheckoutItemQty = styled.td`
  width: 23%;
  display: flex;
`;

export const CheckoutItemPrice = styled.td`
  width: 23%;
`;

export const RemoveButton = styled.span`
  padding-left: 12px;
  cursor: pointer;
`;
