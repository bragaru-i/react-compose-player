import { FC, memo, useEffect, useMemo, useRef } from 'react';

import { MediaProviderProps, MediaStoreContext } from '@/context/';
import { useBoolean } from '@/hooks';
import { createMediaStore } from '@/store';

export const MediaProvider: FC<MediaProviderProps> = memo(
  ({ children, onStoreUpdate }) => {
    const [isMounted, mountedCb] = useBoolean(false);
    const playPromiseRef = useRef<Promise<void>>();
    const mediaContainerRef = useRef<HTMLDivElement>(null);
    const mediaElRef = useRef<HTMLVideoElement>(null);

    const contextValueRef = useRef(
      createMediaStore({
        playPromiseRef,
        mediaContainerRef,
        onStoreUpdate,
        mediaElRef,
      }),
    );

    const contextValue = useMemo(() => {
      return contextValueRef;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMounted]);

    useEffect(() => {
      mountedCb.on();
      return () => mountedCb.off();
    }, [mountedCb]);

    return (
      <MediaStoreContext.Provider value={contextValue.current}>
        {children}
      </MediaStoreContext.Provider>
    );
  },
);
