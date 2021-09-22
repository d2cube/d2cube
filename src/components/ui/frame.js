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
        flex="auto"
        maxH={
          isFixedHeight
            ? [undefined, undefined, 'frame.height.inventory']
            : undefined
        }
        spacing="l"
        variant="frame"
        w={`width.${size}`}
      >
        <Layout
          align="center"
          alignSelf={alignTitle}
          justify="space-between"
          spacing="m"
        >
          <Layout align="center" spacing="m">
            <h3>{title}</h3>
            {help && <Help text={help} />}
          </Layout>
          {preview && (
            <BrandIcon
              icon="video"
              tooltip="Click to view preview"
              onClick={handleShowPreview}
            />
          )}
        </Layout>
        {children}
      </Layout>
      {modal}
    </>
  );
};

export default Frame;
