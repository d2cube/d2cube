import {Element, Layout} from 'uinix-ui';

import BrandIcon from './brand-icon.js';

const Modal = ({children, title, onHide}) => (
  <Element variant="modal.overlay">
    <Layout direction="column" variant="modal.container">
      <Layout align="center" justify="space-between" variant="modal.header">
        <h3>{title}</h3>
        <BrandIcon icon="x" onClick={onHide} />
      </Layout>
      <Element variant="modal.contents">{children}</Element>
    </Layout>
  </Element>
);

export default Modal;
