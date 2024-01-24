import { FC, memo, useEffect, useMemo } from 'react';
import { shallow } from 'zustand/shallow';

import { useMediaStore } from '@/hooks';

export interface PlayerProps {
  url: string;
  className?: string;
}

const PROGRESS_TIMEOUT = 50;

export const Player: FC<PlayerProps> = memo(({ className, url }) => {
  const mediaStore = useMediaStore();
  const [
    mediaElRef,
    setIsReady,
    setCurrentTime,
    isReady,
    isPlaying,
    setDuration,
  ] = mediaStore(
    state => [
      state.mediaElRef,
      state.setIsReady,
      state.setCurrentTime,
      state.isReady,
      state.isPlaying,
      state.setDuration,
    ],
    shallow,
  );

  // ATM we say that player is ready when it's Player Component is mounted
  useEffect(() => {
    setIsReady(true);
    return () => setIsReady(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isReadyToProgress = useMemo(() => {
    return isReady && isPlaying && Boolean(mediaElRef.current);
  }, [isPlaying, isReady, mediaElRef]);

  // Get current time on a progress interval
  useEffect(() => {
    if (!isReadyToProgress) {
      return;
    }
    const progressTimeout = setInterval(() => {
      const time = mediaElRef.current?.currentTime;
      if (time) {
        setCurrentTime(time);
      }
    }, PROGRESS_TIMEOUT);

    return () => clearInterval(progressTimeout);
  }, [isReadyToProgress, mediaElRef, setCurrentTime]);

  // Get duration after loading metadata
  useEffect(() => {
    mediaElRef.current?.addEventListener('loadedmetadata', () => {
      const duration = mediaElRef.current?.duration;
      if (duration) {
        setDuration(duration);
      }
    });
  }, [isReady, mediaElRef, setDuration]);

  return (
    // disable controls
    <video controls={false} ref={mediaElRef} src={url} className={className} />
  );
});
