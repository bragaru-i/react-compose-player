import { FC, ReactNode, memo } from 'react';

import { MediaContainer, MediaContainerProps } from './media-container';
import { MediaProvider } from './media-provider';

export interface CorePlayerProps extends MediaContainerProps {
  children: ReactNode;
}

export const CorePlayer: FC<CorePlayerProps> = memo(
  ({ children, classes, url }) => {
    return (
      <MediaProvider>
        <MediaContainer url={url} classes={classes}>
          {children}
        </MediaContainer>
      </MediaProvider>
    );
  },
);
