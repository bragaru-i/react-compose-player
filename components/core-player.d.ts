import { FC, ReactNode } from 'react';
import { MediaContainerProps } from './media-container';
export interface CorePlayerProps extends MediaContainerProps {
    children: ReactNode;
}
export declare const CorePlayer: FC<CorePlayerProps>;
