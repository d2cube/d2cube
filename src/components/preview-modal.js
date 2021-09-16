import {Layout, Text} from 'uinix-ui';

import Button from '../components/ui/button.js';
import ButtonLink from '../components/ui/button-link.js';
import Iframe from '../components/ui/iframe.js';
import Modal from '../components/ui/modal.js';
import BrandIcon from '../components/ui/brand-icon.js';
import {useToggle} from '../hooks/index.js';

const PreviewModal = ({enableLink = false, preview, onHide}) => {
  const [iframeKey, toggleIframeKey] = useToggle();

  const {description, href, icon, src, title} = preview;

  return (
    <Modal
      title={
        <Layout align="center" spacing="m">
          <BrandIcon icon={icon} />
          <div>{title}</div>
        </Layout>
      }
      onHide={onHide}
    >
      <Layout align="center" direction="column" spacing="l">
        <Text variant="description">{description}</Text>
        <Iframe key={iframeKey} src={src} />
        <Layout align="center" spacing="l">
          <Button text="Rewatch" onClick={toggleIframeKey} />
          {enableLink && <ButtonLink href={href} text="Explore" />}
        </Layout>
      </Layout>
    </Modal>
  );
};

export default PreviewModal;
