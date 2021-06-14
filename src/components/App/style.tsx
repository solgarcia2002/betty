import styled from 'styled-components';
import {LightBackground} from '../../styles/configStyles';
import { ConnectedRouter } from 'connected-react-router';
export const AppStyled = styled(ConnectedRouter)<{ history: any }>`
body, html{
  display: flex;
  width: 100%;
  background: ${LightBackground};
  margin:0 !important;
}

  display: flex;
  width: 100%;
  > div {
    width: 100%;
  }
#root{
  width: 100%;
}
.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
}
`;
