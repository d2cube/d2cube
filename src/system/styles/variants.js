const backdrop = {
  bottom: 0,
  left: 0,
  margin: '0 auto',
  opacity: 'inactive',
  position: 'fixed',
  right: 0,
  top: 0,
  height: '100%',
  width: '100%',
  zIndex: 'back',
};

const controls = {
  position: 'fixed',
  right: 'm',
  top: 'm',
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
  layout: {
    backdrop,
    controls,
    splash,
  },
};
