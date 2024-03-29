import React from 'react';
import styled from 'styled-components';

const Button = styled.a`
  line-height: 2;
  height: 3rem;
  text-decoration: none;
  display:inline-flex;
  color: #FFFFFF;
  background-color: #0F4465;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.7rem 1rem 0.7rem 1rem;
  font-size: 2rem;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  transition: 0.3s all linear;

  &:hover, &:active, &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
    color:#FFFFFF;
  }
`;

const Image = styled.img`
  height: 30px;
  width: 31px;
  margin-bottom: 1px;
  box-shadow: none;
  border: none;
  vertical-align: middle;
`;

const Text = styled.span`
  margin-left: 5px;
  font-size: 1.1rem;
  vertical-align: middle;
`;

function Coffee() {
    return (
        <Button target="_blank" href="https://www.buymeacoffee.com/gippo">
            <Image src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
            <Text>Buy me a coffee</Text>
        </Button>
    );
}

export default Coffee;
