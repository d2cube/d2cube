import {useState} from 'react';
import {Layout, Text} from 'uinix-ui';

import pkg from '../../package.json';
import PageLayout from '../components/page-layout.js';
import BrandLogo from '../components/ui/brand-logo.js';
import Button from '../components/ui/button.js';
import ButtonLink from '../components/ui/button-link.js';
import Iframe from '../components/ui/iframe.js';
import Frame from '../components/ui/frame.js';
import Modal from '../components/ui/modal.js';
import Interface from '../components/ui/interface.js';
import {IFRAME_SRCS} from '../constants/index.js';
import BrandIcon from '../components/ui/brand-icon.js';

const Page = () => {
  const [activeTabId, setActiveTabId] = useState(null);
  const [iframeKey, setIframeKey] = useState(1);
  const activeTab = tabs[activeTabId];

  const handleHide = () => setActiveTabId(null);

  const handleRewatch = () => setIframeKey(iframeKey + 1);

  const left = (
    <Frame size="l" title={null}>
      <Layout direction="column">
        <BrandLogo as="h1" size="l" />
        <Text variant="diablo">{pkg.description}</Text>
      </Layout>
      {Object.values(tabs).map((tab) => (
        <Layout
          key={tab.id}
          direction="column"
          variant="card.preview"
          spacing="s"
          onClick={() => setActiveTabId(tab.id)}
        >
          <Layout align="center" spacing="s">
            <BrandIcon icon={tab.icon} />
            <h3>{tab.title}</h3>
          </Layout>
          <Text variant="description">{tab.description}</Text>
        </Layout>
      ))}
    </Frame>
  );

  const modal = activeTab && (
    <Modal
      title={
        <Layout align="center" spacing="m">
          <BrandIcon icon={activeTab.icon} />
          <div>{activeTab.title}</div>
        </Layout>
      }
      onHide={handleHide}
    >
      <Layout align="center" direction="column" spacing="l">
        <Text variant="description">{activeTab.description}</Text>
        <Iframe key={iframeKey} src={activeTab.previewSrc} />
        <Layout align="center" spacing="l">
          <Button text="Rewatch" onClick={handleRewatch} />
          <ButtonLink href={activeTab.href} text="Explore" />
        </Layout>
      </Layout>
    </Modal>
  );

  return (
    <PageLayout title="Home">
      <Interface left={left} />
      {modal}
    </PageLayout>
  );
};

const tabs = {
  cube: {
    id: 'cube',
    href: '/cube',
    icon: 'nav.cube',
    title: 'Cube',
    description: 'Explore Cube recipes with a unique interactive interface.',
    previewSrc: IFRAME_SRCS.previews.cube,
  },
  items: {
    id: 'items',
    href: '/items',
    icon: 'nav.items',
    title: 'Items',
    description: 'Query the ItemDB with a powerful search interface.',
    previewSrc: IFRAME_SRCS.previews.items,
  },
  sets: {
    id: 'sets',
    href: '/sets',
    icon: 'nav.sets',
    title: 'Sets',
    description: 'View item sets and bonuses.',
    previewSrc: IFRAME_SRCS.previews.sets,
  },
  runewords: {
    id: 'runewords',
    href: '/runewords',
    icon: 'nav.runewords',
    title: 'Runewords',
    description: 'Explore Runewords with the Runegram.',
    previewSrc: IFRAME_SRCS.previews.runewords,
  },
  developers: {
    id: 'developers',
    href: '/developers',
    icon: 'nav.developers',
    title: 'Developers',
    description: 'Reference the REST/Node API.',
    previewSrc: IFRAME_SRCS.previews.developers,
  },
};

export default Page;
