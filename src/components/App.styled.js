import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const PhoneFrame = styled.div`
  background-color: #f4f4f4;
  border-radius: 20px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
