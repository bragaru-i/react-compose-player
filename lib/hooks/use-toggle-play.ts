import { useCallback } from 'react';
import { shallow } from 'zustand/vanilla/shallow';

import { useMediaStore } from './use-media-store';

export const useTogglePlay = () => {
  const mediaStore = useMediaStore();
  const [play, pause, isPlaying] = mediaStore(
    state => [state.play, state.pause, state.isPlaying],
    shallow,
  );
  return useCallback(() => {
    if (isPlaying) {
      return pause();
    }
    return play();
  }, [pause, play, isPlaying]);
};
