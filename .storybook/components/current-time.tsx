import { FC, memo } from 'react';
import React from 'react';
import { shallow } from 'zustand/shallow';
import { useMediaStore, toTimestamp } from '../../lib/main';

interface CurrentTimeProps {}
const SECONDS_MULTIPLIER = 1000;
export const CurrentTime: FC<CurrentTimeProps> = memo(() => {
  const mediaStore = useMediaStore();
  const [currentTime, duration] = mediaStore(
    state => [state.currentTime, state.duration],
    shallow,
  );

  return (
    <div>
      {toTimestamp(currentTime * SECONDS_MULTIPLIER)} /
      {toTimestamp(duration * SECONDS_MULTIPLIER)}
    </div>
  );
});
