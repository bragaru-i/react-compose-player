import { FC, memo } from 'react';
import React from 'react';
import { useTogglePlay, useMediaStore } from '../../lib/hooks/';

interface PlayToggleButtonProps {}

export const PlayToggleButton: FC<PlayToggleButtonProps> = memo(() => {
  const togglePlay = useTogglePlay();
  const mediaStore = useMediaStore();
  const isPlaying = mediaStore(state => state.isPlaying);

  const renderButtonText = () => (isPlaying ? 'Pause' : 'Play');

  return <button onClick={togglePlay}>{renderButtonText()}</button>;
});
