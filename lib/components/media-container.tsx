import { FC, ReactNode } from 'react';
import { shallow } from 'zustand/shallow';

import { Player, PlayerProps } from './player';

import { useMediaStore, useTogglePlay } from '@/hooks';

interface Classes {
  video?: string;
  wrapper?: string;
}

export interface MediaContainerProps extends Pick<PlayerProps, 'url'> {
  children?: ReactNode;
  classes?: Classes;
}

export const MediaContainer: FC<MediaContainerProps> = ({
  children,
  classes,
  url,
}) => {
  const playToggle = useTogglePlay();
  const mediaStore = useMediaStore();
  const [mediaContainerRef] = mediaStore(
    state => [state.mediaContainerRef],
    shallow,
  );

  return (
    <div
      ref={mediaContainerRef}
      className={classes?.wrapper}
      onClick={playToggle}
    >
      <Player className={classes?.video} url={url} />
      {children}
    </div>
  );
};
