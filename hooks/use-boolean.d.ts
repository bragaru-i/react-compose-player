type InitialState = boolean | (() => boolean);
/**
 * A react hook that tracks a boolean
 */
export declare function useBoolean(initialState?: InitialState): readonly [boolean, {
    on: () => void;
    off: () => void;
    toggle: () => void;
}];
export {};
