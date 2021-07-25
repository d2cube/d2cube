import React, {useEffect, useRef, useState} from 'react';
import {Icon} from 'uinix-ui';

import tristramSrc from '../../../static/assets/audio/tristram.mp3';

const Soundtrack = ({isEnabled}) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState();

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && isEnabled) {
      audio.play();
      setIsPlaying(true);
    }
  }, [isEnabled]);

  const handleControls = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <Icon
        icon={isPlaying ? 'pause' : 'play'}
        color="brand.primary"
        size="slot"
        title={isPlaying ? 'Pause' : 'Play'}
        variant="controls"
        onClick={handleControls}
      />
      <audio ref={audioRef} hidden loop src={tristramSrc} />
    </>
  );
};

export default Soundtrack;
