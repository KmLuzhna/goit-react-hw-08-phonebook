import styled from "styled-components";

export const LogInForm = styled.form`
    flex-direction: column;
    display: flex;
    align-items: center;
    margin: 40px 0px;
`;

export const LogInLbl = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
    font-size: 25px;
`;
export const LogInInput = styled.input`
    display: block;
    border: none;
    border-radius: 20px;
    padding: 5px 8px;
    color: #333;
    box-shadow: 
        inset 0 -2px 0 rgba(0,0,0,.2), 
        0 0 4px rgba(0,0,0,0.1);
    font-size: 15px;
    padding: 10px 20px;
    margin-top: 10px;
`;

export const LogInBtn = styled.button`
    border: 0px;
    display: inline-block;
    padding: 12px 30px;
    margin: 30px auto;
    border-radius: 30px;
    background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
    background-position: 100% 0;
    background-size: 200% 200%;
    font-family: 'Montserrat', sans-serif;
    font-size: 21px;
    font-weight: 300;
    color: white;
    box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
    transition: .5s;
    
    :hover {
       background: #002878;
        box-shadow: 0 15px 20px rgba(0, 40, 120, 1);
        color: white;
        transform: translateY(-7px);
}
`