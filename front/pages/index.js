/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { scroller, Element } from 'react-scroll';
import ToolbarContainer from '../containers/toolbar-layout';
import BannerContainer from '../containers/banner-layout';
import ListCoursesContainer from '../containers/list-courses-layout';
import AboutUsContainer from '../containers/about-us-layout';
import { Layout } from '../layouts';

const HomePage = () => {
  const router = useRouter();
  const [scroll, setScroll] = useState({
    element: {},
    isScrolling: false,
  });
  let isAnimated = false;
  let section = 1;
  const lastSection = 6;
  const firstSection = 1;

  const doScroll = () => {
    if (isAnimated) {
      scroller.scrollTo(`section${section}`, {
        ignoreCancelEvents: true,
        smooth: 'easeInOutQuart',
        duration: 700,
      });
    }
  };

  const checkScrollDirectionIsUp = (e) => {
    return e.wheelDelta > 0;
  };

  const prevSection = () => {
    if (section > firstSection) {
      section -= 1;
      doScroll();
    }
  };

  const nextSection = () => {
    if (section < lastSection) {
      section += 1;
      doScroll();
    }
  };

  const checkScrollDirection = (e) => {
    if (isAnimated) {
      e.preventDefault();
      return;
    }
    isAnimated = true;
    if (checkScrollDirectionIsUp(e)) {
      prevSection();
    } else {
      nextSection();
    }
    setTimeout(() => {
      isAnimated = false;
    }, 600);
  };

  useEffect(() => {
    if (scroll.isScrolling) {
      setTimeout(() => {
        setScroll({ isScrolling: false, element: null });
      }, 1000);
    }
  }, [scroll]);

  useEffect(() => {
    document.body.addEventListener('wheel', checkScrollDirection, { passive: false });
    window.addEventListener('scroll', (e) => {
      e.preventDefault();
    });
    document.addEventListener('keydown', (e) => {
      // eslint-disable-next-line default-case
      switch (e.keyCode) {
        case 38: // Up
          e.preventDefault();
          if (isAnimated) {
            return;
          }
          isAnimated = true;
          prevSection();
          setTimeout(() => {
            isAnimated = false;
          }, 600);
          break;
        case 40: // Down
          e.preventDefault();
          if (isAnimated) {
            return;
          }
          isAnimated = true;
          nextSection();
          setTimeout(() => {
            isAnimated = false;
          }, 600);
          break;
      }
    });

    document.addEventListener(
      'mousewheel',
      (e) => {
        e.preventDefault();
      },
      { passive: false }
    );
    return () => {
      document.body.removeEventListener('wheel');
      window.removeEventListener('scroll');
    };
  }, []);

  // eslint-disable-next-line no-unused-vars
  const goToCourse = (course) => {
    router.push(`/cursos/${course}`);
  };

  return (
    <>
      <Head>
        <title>Fuisionarte ccc</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Layout>
        <Element name="section1">
          <ToolbarContainer />
        </Element>
        <Element className="section-uno" name="section2">
          <BannerContainer />
        </Element>
        <Element className="section-dos" name="section3">
          <ListCoursesContainer category="FUSIONADITOS KIDS" />
        </Element>
        <Element className="section-tres" name="section4">
          <ListCoursesContainer category="FUSIONARTE JOVENES" />
        </Element>
        <Element className="section-cuatro" name="section5">
          <ListCoursesContainer category="FUSIONARTE ADULTOS" />
        </Element>
        <Element className="section-cinco" name="section6">
          <AboutUsContainer />
        </Element>
      </Layout>
    </>
  );
};

export default HomePage;
