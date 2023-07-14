import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 10px;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Name = styled.p`
  font-weight: bold;
  margin-right: 10px;
  flex: 1;
`;

export const Number = styled.p`
  color: gray;
  flex: 1;
`;

export const DeleteButton = styled.button`
  padding: 2px 5px;
  background-color: #ff3d00;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 14px;
  flex: 1;
`;
