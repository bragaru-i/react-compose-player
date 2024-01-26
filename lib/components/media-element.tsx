import { FC, memo, useEffect, useMemo } from 'react';
import { shallow } from 'zustand/shallow';

import { useMediaStore } from '@/hooks';
import { getMediaType } from '@/utils/media-types';

export interface MediaElementProps {
  url: string;
  className?: string;
}

/** Component that:
 * - mounts video/audio tag
 * - set media duration
 */

export const MediaElement: FC<MediaElementProps> = memo(
  ({ className, url }) => {
    const mediaStore = useMediaStore();
    const [mediaElRef, setIsReady, isReady, setDuration] = mediaStore(
      state => [
        state.mediaElRef,
        state.setIsReady,
        state.isReady,
        state.setDuration,
      ],
      shallow,
    );

    // ATM we say that player is ready when it's Player Component is mounted
    useEffect(() => {
      setIsReady(true);
      return () => setIsReady(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Get duration after loading metadata
    useEffect(() => {
      mediaElRef.current?.addEventListener('loadedmetadata', () => {
        const duration = mediaElRef.current?.duration;
        if (duration) {
          setDuration(duration);
        }
      });
    }, [isReady, mediaElRef, setDuration]);
    const Element = useMemo(() => {
      if (getMediaType(url) === 'audio-file') {
        return 'audio';
      }
      if (getMediaType(url) === 'video-file') {
        return 'video';
      }
      throw Error(`URL: ${url} has a media file that is not supported`);
    }, [url]);

    return (
      // disable controls
      <Element
        controls={false}
        ref={mediaElRef}
        src={url}
        className={className}
      />
    );
  },
);
