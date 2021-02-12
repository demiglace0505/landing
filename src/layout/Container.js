import styled from 'styled-components';

const Container = styled.body`
  display: grid;
  grid-template-rows: 5rem calc(100vh - 5rem) repeat(4, min-content); 
  grid-template-columns: [full-start] minmax(7rem, 1fr) 
                         [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end]) [center-end]
                         minmax(7rem, 1fr) [full-end];
`

export default Container;