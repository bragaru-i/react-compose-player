import { FC, ReactNode } from 'react';
export interface CurrentTimingProps {
    progressInterval?: number;
    children?: ReactNode;
}
/** Component that adds current playing time to media player */
export declare const CurrentTiming: FC<CurrentTimingProps>;
