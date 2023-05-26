import styled from "styled-components";

export const CheckoutContainer = styled.table`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeaderContainer = styled.thead`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutHeader = styled.tr`
  display: flex;
  justify-content: space-between;
`;

export const HeaderBlock = styled.th`
  text-transform: capitalize;
  width: 23%;
  text-align: left;
  font-weight: 500;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.h1`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
