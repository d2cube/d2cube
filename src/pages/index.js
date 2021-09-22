import {useState} from 'react';
import {Layout, Text} from 'uinix-ui';

import pkg from '../../package.json';
import PageLayout from '../components/page-layout.js';
import PreviewModal from '../components/preview-modal.js';
import BrandLogo from '../components/ui/brand-logo.js';
import CardPreview from '../components/ui/card-preview.js';
import Frame from '../components/ui/frame.js';
import Interface from '../components/ui/interface.js';
import {PREVIEWS} from '../constants/index.js';

const Page = () => {
  const [preview, setPreview] = useState(null);

  const handleHideModal = () => setPreview(null);

  const left = (
    <Frame size="l" title={null}>
      <Layout direction="column">
        <BrandLogo as="h1" size="l" />
        <Text variant="diablo">{pkg.description}</Text>
      </Layout>
      <hr />
      {Object.values(PREVIEWS).map((preview) => (
        <CardPreview
          key={preview.id}
          preview={preview}
          onViewPreview={setPreview}
        />
      ))}
    </Frame>
  );

  const modal = preview && (
    <PreviewModal preview={preview} onHide={handleHideModal} />
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
