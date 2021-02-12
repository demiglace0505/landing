# Landing Page

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Contents

1. [Setting up and initial architecture](#setting-up-and-initial-architecture)
2. [Layout](#layout)



### Setting up and initial architecture

In setting up the project, `create-react-app` was used. `styled components` was the library of choice for theming. The project's directory and architecture is loosely based on the 7-1 Sass architecture, wherein the project files are modularized and subdivided into directories:

```
src/
|_ abstracts/
  |_ Variables.js
|_ base/
  |_ GlobalStyle.js
  |_ typography.js
|_ components/
  |_ Navbar.js
|_ img/
  |_ icons/
  |_ logo/
|_ layout/
  |_ Container.js
  |_ Header.js
```

The Variables.js holds all the constants such as color definitions.

```jsx
export const colors = {
  colorPrimaryDark: "#000428",
  colorPrimary: "#004e92",
  colorPrimaryLight: "#91EAE4",
  ...
}
```

The global reset and base are set using styled component's `createGlobalStyle`.

```scss
const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; //1 rem = 10px; 10px/16px = 62.5%
  }
`
```

### Layout

For the layout, CSS-grids was extensively used. The overall container for the webpage's grid layout is defined in the Container.js file. The project makes use of a 8-column grid layout as basis.

