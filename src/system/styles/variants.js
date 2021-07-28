import frameSrc from '../../../static/assets/images/ui/frame.png';
import stoneSrc from '../../../static/assets/images/ui/stone.jpg';

const absolute = {
  bottom: 0,
  left: 0,
  position: 'absolute',
  right: 0,
  top: 0,
};

const frame = {
  backgroundImage: `url(${stoneSrc})`,
  borderStyle: 'solid',
  borderWidth: 'frame',
  borderImage: `url(${frameSrc}) 140 repeat`,
  width: 'frame',
};

const fullscreen = {
  bottom: 0,
  height: '100%',
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  width: '100%',
};

const socket = {
  borderRadius: 'round',
  border: 'socketed',
  height: 'socket',
  width: 'socket',
};

const splash = {
  backgroundImage: 'linear-gradient(rgba(0,0,0,0), black, black)',
  bottom: 0,
  left: 0,
  padding: 'xl',
  position: 'fixed',
  right: 0,
  top: 0,
};

const sticky = {
  bottom: {
    bottom: 0,
    position: 'sticky',
  },
};

export default {
  absolute,
  fullscreen,
  frame,
  socket,
  splash,
  sticky,
};
