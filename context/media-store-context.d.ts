import { ReactNode } from 'react';
import { StoreApi } from 'zustand';
import { MediaStore } from '../store/media-store';
export interface MediaProviderProps {
    onStoreUpdate?: (store: MediaStore) => void;
    children: ReactNode;
}
export declare const MediaStoreContext: import("react").Context<StoreApi<MediaStore>>;
