import { FC } from 'react';
export interface PlayerProps {
    url: string;
    className?: string;
}
/** Component that:
 * - mounts video/audio tag
 * - set media duration
 */
export declare const Player: FC<PlayerProps>;
