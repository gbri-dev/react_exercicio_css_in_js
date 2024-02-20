import styled from 'styled-components'

import { Props } from '.'

export const Header = styled.header<Props>`
  text-align: center;
  color: ${(props) => props.theme.firstColor};
  background-color: ${(props) => props.theme.secondColor};
  padding: 24px 0;
  font-weight: bold;
  font-size: 16px;
`
