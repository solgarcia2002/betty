import styled from 'styled-components';
import {LightBackground} from '../../styles/configStyles';
export const HeaderStyled = styled.div`
  display: flex;
  height: 5rem;
  padding: 0.5rem 0;
  background:${LightBackground};
  justify-content: space-around;
`;
export const HeaderLogoStyled = styled.div`
  flex: 1;
  display: block;
  img {
    float: left;
    margin-left: 1rem;
    height: 100%;
  }
` ;
