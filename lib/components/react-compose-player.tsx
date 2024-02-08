import { FC } from 'react';

import { BasicPlayer, BasicPlayerProps } from './basic-player';

import { CurrentTiming, CurrentTimingProps } from '.';
export interface ReactComposePlayerProps extends BasicPlayerProps {
  progressInterval?: CurrentTimingProps['progressInterval'];
}

/**
 * ReactComposePlayer is a full ready-to-go component created for playing media-players
 */
export const ReactComposePlayer: FC<ReactComposePlayerProps> = ({
  children,
  progressInterval,
  ...restProps
}) => {
  return (
    <BasicPlayer {...restProps}>
      <CurrentTiming progressInterval={progressInterval} />
      {children}
    </BasicPlayer>
  );
};
