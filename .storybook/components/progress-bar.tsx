import { FC } from 'react';
import React from 'react';
import { useMediaStore } from '../../lib/hooks/';

interface ProgressBarProps {}

export const ProgressBar: FC<ProgressBarProps> = () => {
  const mediaStore = useMediaStore();
  const [currentTime, duration, seek] = mediaStore(state => [
    state.currentTime,
    state.duration,
    state.seek,
  ]);

  const calculateProgressBarWidth = () => {
    if (duration === 0) {
      return 0;
    }

    const progress = (currentTime / duration) * 100;
    return Math.min(100, Math.max(0, progress));
  };

  const handleClick = event => {
    const progressBar = event.currentTarget;
    const clickX = event.clientX - progressBar.getBoundingClientRect().left;
    const newProgress = (clickX / progressBar.offsetWidth) * 100;

    // Calculate the time to seek based on the clicked position
    const newTime = (newProgress / 100) * duration;
    seek(newTime);
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '3px',
        background: 'grey',
        width: '100%',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      <div
        style={{
          width: `${calculateProgressBarWidth()}%`,
          height: '3px',
          background: 'blue',
        }}
      ></div>
    </div>
  );
};
