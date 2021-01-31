import Head from 'next/head';
import ListChaptersContainer from '../../containers/list-chapters-layout';
import InfoChapterContainer from '../../containers/info-chapter-layout';
import ToolbarContainer from '../../containers/toolbar-layout';
import Footer from '../../components/Footer';
import PageContainer from '../../containers/page-container';
/* eslint-disable react/react-in-jsx-scope */

export default function Curso() {
  return (
    <>
      <Head>
        <title>Curso: nombre curso</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToolbarContainer />
      <PageContainer containerStyle="flex">
        <ListChaptersContainer />
        <InfoChapterContainer />
      </PageContainer>
      <Footer color="bg-primary" />
    </>
  );
}
