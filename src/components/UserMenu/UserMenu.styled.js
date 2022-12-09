import styled from "styled-components";

export const UserMenuBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const WelcomeUser = styled.p`
    font-weight: 600;
    text-align: center;
    // font-family: Ubuntu;
    font-family: 'Montserrat',sans-serif;
    color: white;
    display: flex;
    font-size: 20px;
    justify-content: center;
`;

export const UserBtn = styled.button`

 border: 0px;
  background: rgba(0, 0, 0, 0); 
  padding: 5px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: white;
    :hover {
        padding: 5px 20px;
        border-radius: 30px;
        box-shadow: 0 15px 20px rgba(255, 255, 255, 1);
        color: white;
        // transform: translateY(-7px);
}
`