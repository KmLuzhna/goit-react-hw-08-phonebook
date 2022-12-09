import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AuthBox = styled.div`
    margin: 0 auto;
    @media (max-width: 768px) {
    max-width: 320px;
  }
` 
export const WelcomeText = styled.p`
    font-weight: 600;
    text-align: center;
    font-family: 'Montserrat',sans-serif;
    // font-family: Ubuntu;
    color: white;
    display: flex;
    font-size: 50px;
    justify-content: center;

      @media (max-width: 768px) {
    font-size: 40px;
  }
`;


export const AuthLink = styled(NavLink)`
    text-decoration: none;
    color: white;
    padding: 10px 20px;
    font-weight: 600;
}
`;


export const AuthList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0;
    display: flex;
    justify-content: center;
`
export const AuthEl = styled.li`
text-decoration: none;
  display: inline-block;
  padding: 12px 40px;
  margin: 10px 20px;
  border-radius: 30px;
  // background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
  // background-position: 100% 0;
  // background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 300;
  // box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
  // transition: .5s;

      @media (max-width: 768px) {
    margin: 0px;
    padding: 0px;
  }


   :hover {
        border-radius: 30px;
        box-shadow: 0 15px 20px rgba(255, 255, 255, 1);
        color: white;
  transform: translateY(-7px);


`
