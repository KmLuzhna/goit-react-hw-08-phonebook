import styled from "styled-components";

export const AppHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
    background-position: 100% 0;
    background-size: 200% 200%;
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
    min-width: 320px;

    @media (max-width: 768px) {
    flex-direction: column;
`;