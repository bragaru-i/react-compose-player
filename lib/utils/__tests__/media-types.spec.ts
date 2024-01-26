import { getMediaType } from '../media-types';
import { describe, test, expect } from 'vitest';

describe('getMediaType function', () => {
  test('recognizes mp3 extension', () => {
    expect(getMediaType('https://example.com/audio-file.mp3')).toBe(
      'audio-file',
    );
  });

  test('recognizes mp4 extension', () => {
    expect(getMediaType('https://example.com/video-file.mp4')).toBe(
      'video-file',
    );
  });

  test('do not support unknown sources', () => {
    expect(getMediaType('https://example.com/unsupported-file.xyz')).toBe(
      'unknown-media',
    );
  });

  // Test cases for URL parameters
  test('recognizes audio file with URL parameters', () => {
    expect(getMediaType('https://example.com/audio-file.mp3?t=123')).toBe(
      'audio-file',
    );
  });

  test('recognizes video file with URL parameters', () => {
    expect(getMediaType('https://example.com/video-file.mp4?t=456')).toBe(
      'video-file',
    );
  });
});
