import { FC, memo } from 'react';
import React from 'react';
import { shallow } from 'zustand/shallow';
import { useMediaStore } from '../../lib/hooks/use-media-store';

interface CurrentTimeProps {}

export const CurrentTime: FC<CurrentTimeProps> = memo(() => {
  const mediaStore = useMediaStore();
  const [currentTime] = mediaStore(state => [state.currentTime], shallow);

  return <div>{currentTime}</div>;
});
