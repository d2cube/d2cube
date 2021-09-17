import theme, {slotSize} from '../theme/index.js';

const baseButton = {
  backgroundImage: 'url(images/ui/button.jpg)',
  backgroundSize: '100% 400%',
  border: 'none',
  color: 'brand.primary',
  flex: 'none',
  fontFamily: 'diablo',
  fontSize: 's',
  lineHeight: 'body',
  margin: 0,
  outline: 'none',
  paddingLeft: 'm',
  paddingRight: 'm',
  width: 'min-content',
};

const absolute = {
  stretch: {
    inset: 0,
    position: 'absolute',
  },
  center: {
    height: 'fit-content',
    inset: 0,
    margin: 'auto',
    position: 'absolute',
    width: 'fit-content',
  },
};

const fixed = {
  position: 'fixed',
  inset: 0,
};

const button = {
  m: baseButton,
  l: {
    fontSize: 'l',
    paddingBottom: 's',
    paddingLeft: 'xl',
    paddingRight: 'xl',
    paddingTop: 's',
  },
};

const card = {
  preview: {
    border: 'bordered',
    borderRadius: 'm',
    padding: 'm',
    opacity: 1,
    transition: 'all',
    ':hover': {
      backgroundColor: 'interface.background',
      color: 'text.primary',
      opacity: 'hover',
    },
  },
};

const cube = {
  backgroundImage: 'url(images/ui/cube-background.png)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100%',
  border: 'bordered',
  margin: 'auto',
  height: slotSize * 12,
  width: slotSize * 10,
};

const divider = {
  backgroundImage: 'url(images/ui/divider.png)',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 10px',
  border: 'none',
  flex: 'none',
  height: '10px',
  margin: 0,
  position: 'relative',
  '::before': {
    backgroundImage: 'url(images/ui/divider-knob.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '20px 20px',
    position: 'absolute',
    content: '""',
    color: 'transparent',
    height: '20px',
    left: '-2px',
    top: '-5px',
    width: '20px',
  },
  '::after': {
    backgroundImage: 'url(images/ui/divider-knob.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '20px 20px',
    position: 'absolute',
    content: '""',
    color: 'transparent',
    height: '20px',
    right: '-2px',
    top: '-5px',
    width: '20px',
  },
};

const frame = {
  backgroundImage: 'url(images/ui/stone.png)',
  borderStyle: 'solid',
  borderWidth: 'frame',
  borderImage: 'url(images/ui/frame.png) 100 repeat',
};

const pentagram = ({isActive}) => ({
  ...absolute.stretch,
  backgroundImage: 'url(images/ui/pentagram.svg)',
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  filter: isActive ? 'saturate(4)' : undefined,
});

const socket = {
  borderRadius: 'round',
  border: 'socketed',
  height: 'socket',
  width: 'socket',
};

const splash = {
  ...fixed,
  backgroundColor: 'interface.fade',
  padding: 'xxl',
};

const sticky = {
  top: {
    position: 'sticky',
    top: 0,
    zIndex: 'forward',
  },
  bottom: {
    bottom: 0,
    position: 'sticky',
    zIndex: 'forward',
  },
};

const footer = {
  backgroundColor: 'interface.background',
  boxShadow: 'footer',
  bottom: 0,
  left: 0,
  position: 'fixed',
  right: 0,
};

const header = {
  ...sticky.top,
  backgroundColor: 'interface.background',
  boxShadow: 'header',
  width: '100%',
};

const modal = {
  overlay: {
    ...fixed,
    animation: 'easeInOutFast',
    animationName: 'fade.in',
    backgroundColor: 'interface.fade',
    zIndex: 'modal',
  },
  container: {
    backgroundColor: 'interface.background',
    border: 'bordered',
    borderRadius: 'm',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10%',
    marginTop: '10%',
    maxHeight: '70vh',
    width: 'modal.width.m',
    zIndex: 'modal',
  },
  header: {
    borderBottom: 'bordered',
    padding: 'l',
  },
  contents: {
    overflowY: 'auto',
    padding: 'l',
  },
};

const portal = {
  red: {
    borderRadius: '75%',
    background: `radial-gradient(#000000, #000000 60%, ${theme.colors.text.event} 70%)`,
    height: '100%',
    width: '100%',
  },
};

export default {
  absolute,
  button,
  card,
  cube,
  divider,
  fixed,
  footer,
  frame,
  header,
  modal,
  pentagram,
  portal,
  socket,
  splash,
  sticky,
};
