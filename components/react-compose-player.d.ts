import { FC } from 'react';
import { BasicPlayerProps } from './basic-player';
import { CurrentTimingProps } from '.';
export interface ReactComposePlayerProps extends BasicPlayerProps {
    currentTimingProps?: CurrentTimingProps;
}
/**
 * ReactComposePlayer is a full ready-to-go component created for playing media-players
 */
export declare const ReactComposePlayer: FC<ReactComposePlayerProps>;
