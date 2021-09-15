import {Element} from 'uinix-ui';

const ASPECT_PADDING = `${(9 / 16) * 100}%`; // 16:9 aspect ratio

const EmbedIframe = ({src}) => (
  <Element overflow="hidden" position="relative" pt={ASPECT_PADDING} w="100%">
    <Element
      allowFullScreen
      as="iframe"
      frameBorder="0"
      h="100%"
      src={src}
      variant="absolute.stretch"
      w="100%"
    />
  </Element>
);

export default EmbedIframe;
