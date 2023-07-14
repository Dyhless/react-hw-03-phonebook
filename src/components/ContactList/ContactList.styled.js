import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  font-weight: bold;
  margin-right: 10px;
`;

export const Number = styled.p`
  color: gray;
`;

export const DeleteButton = styled.button`
  padding: 5px;
  background-color: #ff3d00;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;
