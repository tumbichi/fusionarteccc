/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const StyleBox = styled.div.attrs({
  className: 'flex justify-center items-center h-screen bg-yellow-300',
})``;

const HomePage = () => {
  return (
    <StyleBox>
      <div className="bg-red-600 text-white">AGUANTE NEW Y RIVER LOCOOOOO✨</div>
    </StyleBox>
  );
};

export default HomePage;
