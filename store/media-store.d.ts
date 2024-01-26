import { StateCreator } from 'zustand';
import { MediaState, MediaStateExternalInitializers, MediaControls } from '../types';
/**  @category MediaStore */
export type MediaStore = MediaState & MediaControls & MediaStateExternalInitializers;
type CreatePropsSlice = (args: MediaStateExternalInitializers) => StateCreator<MediaStore, [], [], MediaStateExternalInitializers>;
export declare const createPropsSlice: CreatePropsSlice;
export declare const createDefaultMediaSlice: StateCreator<MediaStore, [
], [
], MediaState>;
export declare const createSettersSlice: StateCreator<MediaState & MediaControls & MediaStateExternalInitializers, [
], [
], MediaControls>;
interface CreateMediaStoreArgs extends MediaStateExternalInitializers {
}
export declare const createMediaStore: ({ onStoreUpdate, ...externalProps }: CreateMediaStoreArgs) => import("zustand").UseBoundStore<import("zustand").StoreApi<MediaStore>>;
export {};
