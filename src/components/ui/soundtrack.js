import React, {useEffect, useRef, useState} from 'react';
import {Icon} from 'uinix-ui';

import src from '../../../static/assets/audio/intro.mp3';

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
      {isEnabled && (
        <Icon
          icon={isPlaying ? 'pause' : 'play'}
          color="brand.primary"
          position="fixed"
          right="m"
          size="icon"
          title={isPlaying ? 'Pause' : 'Play'}
          top="m"
          onClick={handleControls}
        />
      )}
      <audio ref={audioRef} hidden loop src={src} />
    </>
  );
};

export default Soundtrack;
