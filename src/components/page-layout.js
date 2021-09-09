import {useState} from 'react';
import {Layout, useStyles} from 'uinix-ui';

import Hud from './hud.js';
import DiscordIcon from './ui/discord-icon.js';
import GithubIcon from './ui/github-icon.js';
import GithubSponsorIcon from './ui/github-sponsor-icon.js';
import PaypalIcon from './ui/paypal-icon.js';
import Splash from './ui/splash.js';
import ScrollTop from './ui/scroll-top.js';

let cachedEntered = false;

const PageLayout = ({children, title}) => {
  const [entered, setEntered] = useState(cachedEntered);
  const styles = useStyles();

  const handleEnter = () => {
    cachedEntered = true;
    setEntered(cachedEntered);
  };

  return (
    <Layout direction="column" minH="100vh" spacing="l">
      {entered ? (
        <>
          <Layout
            as="main"
            align="center"
            direction="column"
            flex="auto"
            pt="xl"
            spacing="xl"
            styles={styles.fadeIn}
            variant="container"
          >
            {children}
          </Layout>
          <Hud title={title} />
        </>
      ) : (
        <Splash onEnter={handleEnter} />
      )}
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
      <ScrollTop />
    </Layout>
  );
};

export default PageLayout;
