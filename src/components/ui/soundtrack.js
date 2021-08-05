import React, {useEffect, useRef, useState} from 'react';

import BrandIcon from './brand-icon.js';

const Soundtrack = ({isEnabled}) => {
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

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
        <BrandIcon
          icon={isPlaying ? 'pause' : 'play'}
          position="fixed"
          right="m"
          tooltip={`${isPlaying ? 'Pause' : 'Play'} soundtrack`}
          top="m"
          onClick={handleControls}
        />
      )}
      <audio ref={audioRef} hidden loop src="audio/intro.mp3" />
    </>
  );
};

export default Soundtrack;
