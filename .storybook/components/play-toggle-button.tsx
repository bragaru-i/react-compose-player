import { FC, memo } from 'react';
import React from 'react';
import { shallow } from 'zustand/shallow';
import { useMediaStore } from '../../lib/hooks/use-media-store';

interface PlayToggleButtonProps {}

export const PlayToggleButton: FC<PlayToggleButtonProps> = memo(() => {
  const mediaStore = useMediaStore();

  const [play, pause, isPlaying] = mediaStore(
    state => [state.play, state.pause, state.isPlaying],
    shallow,
  );

  const handleToggleClick = () => {
    if (isPlaying) {
      return pause();
    }
    return play();
  };

  const renderButtonText = () => {
    if (isPlaying) {
      return 'Pause';
    }
    return 'Play';
  };

  return <button onClick={handleToggleClick}>{renderButtonText()}</button>;
});
