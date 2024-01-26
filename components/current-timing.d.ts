import { FC, ReactNode } from 'react';
export interface CurrentTimingProps {
    progressInterval?: number;
    children?: ReactNode;
}
/** Component that adds current playing time to media player.
 * It is added to a separate component(not in basic), due to performance optimizations.
 */
export declare const CurrentTiming: FC<CurrentTimingProps>;
