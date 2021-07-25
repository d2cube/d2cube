import buttonSrc from '../../../static/assets/images/ui/button.jpg';
import frameSrc from '../../../static/assets/images/ui/frame.png';
import stoneSrc from '../../../static/assets/images/ui/stone.jpg';

// Variables
const defaultButton = {
  // Based on button.jpg sprite
  backgroundImage: `url(${buttonSrc})`,
  backgroundSize: '100% 400%',
  border: 'none',
  flex: 'none',
  fontFamily: 'diablo',
  margin: 0,
  outline: 'none',
  padding: 0,
};

const button = {
  primary: {
    ...defaultButton,
    color: 'brand.primary',
    fontFamily: 'diablo',
    fontSize: 'l',
    paddingBottom: 's',
    paddingLeft: 'xl',
    paddingRight: 'xl',
    paddingTop: 's',
  },
  icon: {
    ...defaultButton,
    height: 'icon',
    width: 'icon',
  },
};

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
  button,
  fullscreen,
  frame,
  splash,
};
