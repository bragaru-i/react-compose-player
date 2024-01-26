import { FC } from 'react';
export interface MediaElementProps {
    url: string;
    className?: string;
}
/** Component that:
 * - mounts video/audio tag
 * - set media duration
 */
export declare const MediaElement: FC<MediaElementProps>;
