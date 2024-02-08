import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import { VIDEO_URL } from '../utils/constants';
import { PlayToggleButton } from '../components/play-toggle-button';
import {
  ReactComposePlayerProps,
  ReactComposePlayer,
  PROGRESS_TIMEOUT,
} from '../../lib/main';
import { CurrentTime } from '../components/current-time';
import { ProgressBar } from '../components/progress-bar';

import './ReactComposePlayer.styles.css';

const meta: Meta<ReactComposePlayerProps> = {
  component: ReactComposePlayer,
  render: ({ progressInterval, url }) => (
    <ReactComposePlayer
      url={url}
      classes={{ wrapper: 'video-wrapper', video: 'video' }}
      progressInterval={progressInterval}
    >
      <div
        className="controls"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <CurrentTime className="current-time" />
        <PlayToggleButton />
        <ProgressBar />
      </div>
    </ReactComposePlayer>
  ),
};

type Story = StoryObj<ReactComposePlayerProps>;
export default meta;

export const Basic: Story = {
  args: {
    progressInterval: PROGRESS_TIMEOUT,
    url: VIDEO_URL,
  },
  argTypes: {
    classes: {
      name: 'classes',
      description:
        'Classes used for styling `<video>` tag and the `<div>` that wraps it',
    },
    progressInterval: {
      name: 'progressInterval',
      description:
        'Re-rendering player every `progressInterval` seconds. Used to get timing for `<CurrentTiming />` component.',
      defaultValue: { summary: PROGRESS_TIMEOUT },
    },
    url: { name: 'url', description: 'URL for the media to be played.' },
  },
  parameters: {
    controls: { expanded: true },
  },
};
