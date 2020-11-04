import Head from 'next/head';
import ListChaptersContainer from '../../containers/list-chapters-layout';
import InfoChapterContainer from '../../containers/info-chapter-layout';
/* eslint-disable react/react-in-jsx-scope */

export default function Curso() {
  return (
    <>
      <Head>
        <title>Curso: nombre curso</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ListChaptersContainer/>
      <InfoChapterContainer/>

    </>
  );
}
