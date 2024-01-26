import { FC, ReactNode } from 'react';
import { PlayerProps } from './player';
interface Classes {
    video?: string;
    wrapper?: string;
}
export interface MediaContainerProps extends Pick<PlayerProps, 'url'> {
    children?: ReactNode;
    classes?: Classes;
}
export declare const MediaContainer: FC<MediaContainerProps>;
export {};
