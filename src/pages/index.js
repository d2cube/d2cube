import {useState} from 'react';
import {Layout, Text} from 'uinix-ui';

import pkg from '../../package.json';
import PageLayout from '../components/page-layout.js';
import PreviewModal from '../components/preview-modal.js';
import BrandLogo from '../components/ui/brand-logo.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';
import {PREVIEWS} from '../constants/index.js';
import BrandIcon from '../components/ui/brand-icon.js';

const Page = () => {
  const [preview, setPreview] = useState(null);

  const handleHideModal = () => setPreview(null);

  const left = (
    <Frame size="l" title={null}>
      <Layout direction="column">
        <BrandLogo as="h1" size="l" />
        <Text variant="diablo">{pkg.description}</Text>
      </Layout>
      {Object.values(PREVIEWS).map((preview) => (
        <Layout
          key={preview.id}
          direction="column"
          variant="card.preview"
          spacing="s"
          onClick={() => setPreview(preview)}
        >
          <Layout align="center" spacing="s">
            <BrandIcon icon={preview.icon} />
            <h3>{preview.title}</h3>
          </Layout>
          <Text variant="description">{preview.description}</Text>
        </Layout>
      ))}
    </Frame>
  );

  const modal = preview && (
    <PreviewModal enableLink preview={preview} onHide={handleHideModal} />
  );

  return (
    <>
      <PageLayout title="Home">
        <Interface left={left} />
      </PageLayout>
      {modal}
    </>
  );
};

export default Page;
