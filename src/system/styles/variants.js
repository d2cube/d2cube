const baseButton = {
  backgroundImage: 'url(images/ui/button.jpg)',
  backgroundSize: '100% 400%',
  border: 'none',
  color: 'brand.primary',
  flex: 'none',
  fontFamily: 'diablo',
  fontSize: 'l',
  margin: 0,
  outline: 'none',
  padding: 0,
  paddingBottom: 's',
  paddingLeft: 'xl',
  paddingRight: 'xl',
  paddingTop: 's',
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

const button = {
  s: {
    fontSize: 's',
    paddingLeft: 'm',
    paddingRight: 'm',
  },
  m: baseButton,
};

const divider = {
  backgroundImage: 'url(images/ui/divider.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: '100% 10px',
  backgroundPosition: 'center top',
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
  backgroundImage: 'url(images/ui/stone.jpg)',
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
  backgroundColor: 'interface.fade',
  inset: 0,
  padding: 'xxl',
  position: 'fixed',
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
  ...sticky.bottom,
  backgroundColor: 'interface.background',
  boxShadow: 'footer',
};

const header = {
  ...sticky.top,
  backgroundColor: 'interface.background',
  boxShadow: 'header',
  width: '100%',
};

export default {
  absolute,
  button,
  divider,
  footer,
  frame,
  header,
  pentagram,
  socket,
  splash,
  sticky,
};
