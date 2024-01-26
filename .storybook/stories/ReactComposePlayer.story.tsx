import type { Meta, StoryFn } from '@storybook/react';

import React, { useState } from 'react';
import { VIDEO_URL } from '../utils/constants';
import { PlayToggleButton } from '../components/play-toggle-button';
import { ReactComposePlayerProps, ReactComposePlayer } from '../../lib/main';
import { CurrentTime } from '../components/current-time';

export const Primary: StoryFn<ReactComposePlayerProps> = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReactComposePlayer url={VIDEO_URL}>
        <PlayToggleButton />
        <CurrentTime />
      </ReactComposePlayer>
      <button onClick={() => setCount(prev => prev + 1)}>Count: {count}</button>
    </>
  );
};

const meta: Meta<ReactComposePlayerProps> = {
  component: ReactComposePlayer,
  tags: ['autodocs'],
};

export default meta;
