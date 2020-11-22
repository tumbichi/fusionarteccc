import styled from 'styled-components';

export const HeadContainer = styled.div`
  position: relative;
  h1 {
    margin: 1rem 1.5rem;
    position: absolute;
    left: 0;
    color: ${({ textColor }) => textColor};
    font-weight: 700;
    @media (min-width: 0px) {
      font-size: 1em;
    }
    @media (min-width: 600px) {
      font-size: 2em;
    }
    @media (min-width: 1280px) {
      font-size: 2.5em;
    }

    @media (min-width: 1920px) {
      font-size: 3em;
    }
  }
  img {
    position: absolute;
    right: 0;
    opacity: 25%;
    @media (min-width: 0px) {
      width: 100px;
      height: 100px;
    }
    @media (min-width: 600px) {
      width: 250px;
      height: 250px;
    }
    @media (min-width: 1280px) {
      width: 300px;
      height: 300px;
    }
    @media (min-width: 1920px) {
      width: 350px;
      height: 350px;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  @media (min-width: 0px) {
    flex-direction: column;
  }
  @media (min-width: 600px) {
    flex-direction: column;
  }
  @media (min-width: 1280px) {
    flex-direction: row;
  }
  @media (min-width: 1920px) {
    flex-direction: row;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-image: url('../static/images/${({ bgImage }) => bgImage}-4.png');
  @media (min-width: 0px) {
    background-image: url('../static/images/${({ bgImage }) => bgImage}-1.png');
  }
  @media (min-width: 600px) {
    background-image: url('../static/images/${({ bgImage }) => bgImage}-2.png');
  }
  @media (min-width: 1280px) {
    background-image: url('../static/images/${({ bgImage }) => bgImage}-3.png');
  }
  @media (min-width: 1920px) {
    background-image: url('../static/images/${({ bgImage }) => bgImage}-4.png');
  }
`;
