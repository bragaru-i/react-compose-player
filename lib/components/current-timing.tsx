import { FC, memo, useEffect, useMemo } from 'react';
import { shallow } from 'zustand/shallow';

import { useMediaStore } from '@/hooks';

export interface CurrentTimingProps {
  progressInterval?: number;
}

export const PROGRESS_TIMEOUT = 50;

/** Component that adds current playing time to media player.
 * It is added to a separate component(not in basic), due to performance optimizations.
 */
export const CurrentTiming: FC<CurrentTimingProps> = memo(
  ({ progressInterval = PROGRESS_TIMEOUT }) => {
    const mediaStore = useMediaStore();
    const [mediaElRef, setCurrentTime, isReady, isPlaying] = mediaStore(
      state => [
        state.mediaElRef,
        state.setCurrentTime,
        state.isReady,
        state.isPlaying,
      ],
      shallow,
    );

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
      }, progressInterval);

      return () => clearInterval(progressTimeout);
    }, [isReadyToProgress, mediaElRef, progressInterval, setCurrentTime]);

    return null;
  },
);
