import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--mainGreen);
  border-color: ${props =>
    props.cart ? "var(--lightBlue)" : "var(--mainGreen)"};
  color: var(--mainGreen);
  color: ${props => (props.cart ? "var(--lightBlue)" : "var(--mainGreen)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainGreen);
    background: ${props =>
      props.cart ? "var(--lightBlue)" : "var(--mainGreen)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
    }
    `;


//export const ButtonContainer = styled.button`
  //text-transform: capitalize;
  //font - size: 1.4rem;
  //background: transparent;
  //border: 0.05rem solid var(--mainGreen);
  //border - radius: 0.5rem;
  //padding: 0.2rem 0.5rem;
  //outline - color: red;
  //cursor: pointer;
  //display: inline - block;
  //margin: 0.2rem 0.5rem 0.2rem 0;
  //transition: all 0.5s ease -in -out;
    // &: hover {
          //background: var(--mainGreen);
   //color: var(--mainBlue);
 //}
 //`;
