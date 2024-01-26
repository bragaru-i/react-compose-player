import { FC } from 'react';

import { BasicPlayer, BasicPlayerProps } from './basic-player';

import { CurrentTiming, CurrentTimingProps } from '.';
export interface ReactComposePlayerProps extends BasicPlayerProps {
  currentTimingProps?: CurrentTimingProps;
}

/**
 * ReactComposePlayer is a full ready-to-go component created for playing media-players
 */
export const ReactComposePlayer: FC<ReactComposePlayerProps> = ({
  children,
  currentTimingProps,
  ...restProps
}) => {
  return (
    <BasicPlayer {...restProps}>
      <CurrentTiming {...currentTimingProps} />
      {children}
    </BasicPlayer>
  );
};
