export const AUDIO_EXTENSIONS =
  /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
export const VIDEO_EXTENSIONS =
  /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i;

export type UnknownMedia = 'unknown-media';

export type MediaType = 'video-file' | 'audio-file';

export const getMediaType = (url: string): MediaType | UnknownMedia => {
  if (AUDIO_EXTENSIONS.test(url)) {
    return 'audio-file';
  }
  if (VIDEO_EXTENSIONS.test(url)) {
    return 'video-file';
  }
  return 'unknown-media';
};
