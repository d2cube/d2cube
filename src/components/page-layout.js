import {useState} from 'react';
import {Layout, useStyles} from 'uinix-ui';

import Head from './head.js';
import Hud from './hud.js';
import DiscordIcon from './ui/discord-icon.js';
import GithubIcon from './ui/github-icon.js';
import GithubSponsorIcon from './ui/github-sponsor-icon.js';
import PaypalIcon from './ui/paypal-icon.js';
import Splash from './ui/splash.js';
import ScrollTop from './ui/scroll-top.js';
import ResponsiveHide from './ui/responsive-hide.js';

let cachedEntered = false;

const PageLayout = ({children, title = null}) => {
  const [entered, setEntered] = useState(cachedEntered);
  const styles = useStyles();

  const handleEnter = () => {
    cachedEntered = true;
    setEntered(cachedEntered);
  };

  return (
    <>
      <Head title={title} />
      <Layout direction="column" minH="100vh">
        <ScrollTop />
        {entered ? (
          <>
            <Layout
              as="main"
              align="center"
              direction="column"
              flex="auto"
              px="l"
              py="xl"
              pb="footer"
              spacing="xl"
              styles={styles.fadeIn}
            >
              {children}
            </Layout>
            <Hud title={title} />
            <ResponsiveHide>
              <Layout
                bottom="l"
                direction="column"
                position="fixed"
                right="l"
                spacing="l"
                z="forward"
              >
                <GithubSponsorIcon />
                <PaypalIcon />
                <DiscordIcon />
                <GithubIcon />
              </Layout>
            </ResponsiveHide>
          </>
        ) : (
          <Splash onEnter={handleEnter} />
        )}
      </Layout>
    </>
  );
};

export default PageLayout;
