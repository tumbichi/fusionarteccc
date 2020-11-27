import Head from 'next/head';
import ListChaptersContainer from '../../containers/list-chapters-layout';
import InfoChapterContainer from '../../containers/info-chapter-layout';
import ToolbarContainer from '../../containers/toolbar-layout';
/* eslint-disable react/react-in-jsx-scope */

export default function Curso() {
  return (
    <>
      <Head>
        <title>Curso: nombre </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToolbarContainer />

      <ListChaptersContainer />
      <InfoChapterContainer />
    </>
  );
}
