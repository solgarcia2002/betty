import styled from 'styled-components';
import {LightBackground} from '../../styles/configStyles';
import { ConnectedRouter } from 'connected-react-router';
export const AppStyled = styled(ConnectedRouter)<{ history: any }>`
&:first-child{
     width:100%;
}
`;
