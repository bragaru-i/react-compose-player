import { FC, ReactNode } from 'react';
import { MediaElementProps } from './media-element';
interface Classes {
    video?: string;
    wrapper?: string;
}
export interface MediaContainerProps extends Pick<MediaElementProps, 'url'> {
    children?: ReactNode;
    classes?: Classes;
}
export declare const MediaContainer: FC<MediaContainerProps>;
export {};
