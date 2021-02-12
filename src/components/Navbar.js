import styled from 'styled-components';

import {colors} from '../abstracts/Variables';

const Navbar = styled.div`
  background-color: ${colors.colorGreyDark1};
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  display: flex;
`

export default Navbar;