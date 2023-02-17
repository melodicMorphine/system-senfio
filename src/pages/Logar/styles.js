import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 5px 5px #087E8B;
  background-color: white;
  max-width: 400px;
  padding: 30px;
  border-radius: 50px;
`;

export const Label = styled.label`
  font-size: 27px;
  font-weight: 600;
  color: #087E8B;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 15px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    
    text-decoration: none;
    color: #087E8B;
  }


`;