import frameSrc from '../../../static/assets/images/ui/frame.png';
import stoneSrc from '../../../static/assets/images/ui/stone.jpg';

const frame = {
  backgroundImage: `url(${stoneSrc})`,
  borderStyle: 'solid',
  borderWidth: 'frame',
  borderImage: `url(${frameSrc}) 140 repeat`,
  width: 'frame',
};

const fullscreen = {
  height: '100vh',
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

export default {
  fullscreen,
  frame,
  splash,
};
