const baseButton = {
  backgroundImage: 'url(images/ui/button.jpg)',
  backgroundSize: '100% 400%',
  border: 'none',
  color: 'brand.primary',
  flex: 'none',
  fontFamily: 'diablo',
  fontSize: 's',
  margin: 0,
  outline: 'none',
  paddingLeft: 'm',
  paddingRight: 'm',
  paddingBottom: 's',
  paddingTop: 's',
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

const button = {
  m: baseButton,
  l: {
    fontSize: 'l',
    paddingLeft: 'xl',
    paddingRight: 'xl',
  },
};

const card = {
  preview: {
    // This is a somewhat coupled implementation
    border: 'bordered',
    borderRadius: 'm',
    padding: 'l',
    opacity: 1,
    transition: 'all',
    '> iframe': {
      height: 0,
      transition: 'all',
    },
    '> button': {
      display: 'none',
    },
    ':hover': {
      backgroundColor: 'interface.background',
      color: 'text.primary',
      opacity: 'hover',
      '> iframe': {
        height: 300,
      },
      '> button': {
        display: 'block',
      },
    },
  },
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
  card,
  divider,
  footer,
  frame,
  header,
  pentagram,
  socket,
  splash,
  sticky,
};
