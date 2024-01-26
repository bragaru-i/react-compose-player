import { MediaStore } from '../store/media-store';
export declare const useMediaStore: () => {
    (): MediaStore;
    <T>(selector: (state: MediaStore) => T, equals?: ((a: T, b: T) => boolean) | undefined): T;
};
