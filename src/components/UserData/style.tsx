import  React from 'react';
import styled from 'styled-components';
import {FontLightColor} from '../../styles/configStyles'
import {Avatar} from '@material-ui/core';
export const UserDataStyled = styled.div`
  flex: 3;
  display: inline-flex;
  align-items : flex-end;
  justify-content: space-around;
  @media (max-width: 600px) {
    display:flex ;
    flex:2;
    justify-content: space-between;
  }
`;
export const DataStyled =styled.div`
  flex: 7;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${FontLightColor};
  margin: 0 1rem 0 auto;
  @media (max-width: 600px) {
    flex:2;
    display: flex;
    flex-direction: column-reverse;
  }
`;
export const UserNameStyled = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 1rem;
  a{
    color: #a5a9ab;
    text-decoration: none;
    &:hover{
      color:#ffff00;
    }
  }` ;

export const CreditsStyled = styled.span`
  color:#69caa4;`;

export const AvatarStyled =styled((props)=> <Avatar {...props} />)`margin-right:1rem;`;
