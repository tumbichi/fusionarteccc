/* eslint-disable react/react-in-jsx-scope */

import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

const StyleBox = styled.div.attrs({
  className: 'flex justify-center items-center h-screen bg-yellow-300',
})``;

const HomePage = () => {
  const router = useRouter();

  const goToCourse = (course) => {
    router.push(`/cursos/${course}`);
  };

  return (
    <StyleBox>
      <Head>
        <title>Fuisionarte ccc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-red-600 text-white">AGUANTE NEW Y RIVER LOCOOOOO✨</div>
    </StyleBox>
  );
};

export default HomePage;
