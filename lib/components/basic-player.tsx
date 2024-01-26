import { FC, ReactNode, memo } from 'react';

import { MediaContainer, MediaContainerProps } from './media-container';
import { MediaProvider } from './media-provider';

export interface BasicPlayerProps extends MediaContainerProps {
  children?: ReactNode;
}

/**
 * Component that is basic for playing.
 */

export const BasicPlayer: FC<BasicPlayerProps> = memo(
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
