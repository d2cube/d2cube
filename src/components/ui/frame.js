import {useState} from 'react';
import {Layout} from 'uinix-ui';

import PreviewModal from '../preview-modal.js';
import BrandIcon from './brand-icon.js';
import Help from './help.js';

const Frame = ({
  alignTitle = undefined,
  children,
  help = undefined,
  isFixedHeight = false,
  preview = undefined,
  size = undefined,
  title,
}) => {
  const [showPreview, setShowPreview] = useState(false);

  const handleHidePreview = () => setShowPreview(false);

  const handleShowPreview = () => setShowPreview(true);

  const modal = showPreview && preview && (
    <PreviewModal preview={preview} onHide={handleHidePreview} />
  );

  return (
    <>
      <Layout
        as="section"
        direction="column"
        h={isFixedHeight ? 'frame.height.inventory' : undefined}
        spacing="l"
        variant="frame"
        w={`frame.width.${size}`}
      >
        <Layout align="center" alignSelf={alignTitle} spacing="m">
          <h3>{title}</h3>
          {preview && (
            <BrandIcon
              icon="video"
              title="View Preview"
              onClick={handleShowPreview}
            />
          )}
          {help && <Help text={help} />}
        </Layout>
        {children}
      </Layout>
      {modal}
    </>
  );
};

export default Frame;
