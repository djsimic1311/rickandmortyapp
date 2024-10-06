import { createGlobalStyle, styled, css } from "styled-components"

export const breakpoints = {
  tablet: css`min-width: 768px`,
  laptop: css`min-width: 1368px`,
  desktop: css`min-width: 1920px`,
}

export const box_spacings = {
  tablet: css`padding: 1rem 0`,
  laptop: css`padding: 1.5rem 0`,
  desktop: css`padding: 2rem 0`
}

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'get schwifty';
    src: url('/fonts/get_schwifty.ttf') format('truetype');
  }
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export const PageWrapper = styled.div`
  position: relative;
  padding: 1.5rem;
  @media (${breakpoints.tablet}) {
    padding: 2rem;
  }
  @media (${breakpoints.laptop}) {
    padding: 3rem;
  }
  @media (${breakpoints.desktop}) {
    padding: 4rem;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      margin: 0;
    }
    padding-bottom: 1.5rem;
  }
`

export const H1 = styled.h1`
  font-family: 'get schwifty';
`

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1.5rem;
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: absolute;
    top: .75rem;
    right: 1.5rem;
  }
  @media (${breakpoints.tablet}) {
    padding: 2rem;
    nav {
      top: 1rem;
      right: 2rem;
    }
  }
  @media (${breakpoints.laptop}) {
    padding: 3rem;
    nav {
      top: 3rem;
      right: 3rem;
    }
  }
  @media (${breakpoints.desktop}) {
    padding: 4rem;
    nav {
      top: 4rem;
      right: 4rem;
    }
  }
  a {
    color: black;
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  button {
    color: black;
    font-size: 1.5rem;
    text-decoration: none;
    background-color: transparent;
    border: none;
    font-weight: 700;
    padding: 0;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`