import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  font-size: 25px;
  color: #000;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Number = styled.span`
  font-size: 25px;
`;

export const Button = styled.button`
  padding: 10px;
  display: block;
  font-family: inherit;
  font-size: 15px;
  color: #000;
  background-color: #a8de;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 250ms ease, color 250ms ease;

  &:hover,
  &:focus {
    color: #000;
    background-color: #4b9d;
  }
`;
