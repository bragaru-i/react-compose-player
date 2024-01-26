export declare const AUDIO_EXTENSIONS: RegExp;
export declare const VIDEO_EXTENSIONS: RegExp;
export type UnknownMedia = 'unknown-media';
export type MediaType = 'video-file' | 'audio-file';
export declare const getMediaType: (url: string) => MediaType | UnknownMedia;
