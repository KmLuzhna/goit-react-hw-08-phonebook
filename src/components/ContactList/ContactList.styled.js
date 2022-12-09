import styled from "styled-components";

export const ContactsBox = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const ContactsText = styled.p`
   font-family: 'Montserrat', sans-serif;
`

export const NewContactsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
  border: 1px solid #d3d3d3;
  padding: 0px 20px;
  min-width: 320px;
  
`
export const ContactEl = styled.li`
     display: flex;
    font-size: 20px;
    justify-content: space-between;
`


export const ButtonDelete = styled.button`
    border: none;
    display: inline-block;
    height: 45px;
    width: 65px;
    padding: 5px 20px;
    margin: 10px 10px;
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