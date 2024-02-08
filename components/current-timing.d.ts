import { FC } from 'react';
export interface CurrentTimingProps {
    progressInterval?: number;
}
export declare const PROGRESS_TIMEOUT = 50;
/** Component that adds current playing time to media player.
 * It is added to a separate component(not in basic), due to performance optimizations.
 */
export declare const CurrentTiming: FC<CurrentTimingProps>;
