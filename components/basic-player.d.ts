import { FC, ReactNode } from 'react';
import { MediaContainerProps } from './media-container';
export interface BasicPlayerProps extends MediaContainerProps {
    children?: ReactNode;
}
/**
 * Component that is basic for playing.
 */
export declare const BasicPlayer: FC<BasicPlayerProps>;
