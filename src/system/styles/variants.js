const absolute = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
};

const button = {
  s: {
    fontSize: 's',
    paddingLeft: 'm',
    paddingRight: 'm',
  },
  m: {}, // Uses default global button styles
};

const frame = {
  backgroundImage: 'url(images/ui/stone.jpg)',
  borderStyle: 'solid',
  borderWidth: 'frame',
  borderImage: 'url(images/ui/frame.png) 100 repeat',
};

const socket = {
  borderRadius: 'round',
  border: 'socketed',
  height: 'socket',
  width: 'socket',
};

const splash = {
  backgroundColor: 'interface.fade',
  bottom: 0,
  left: 0,
  padding: 'xxl',
  position: 'fixed',
  right: 0,
  top: 0,
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
  footer,
  frame,
  header,
  socket,
  splash,
  sticky,
};
