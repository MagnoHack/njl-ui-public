import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import '../../../index.css';

import { Button } from './button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'icon'],
    },
    className: {
      control: 'select',
      options: ['light', 'dark'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Click me',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Click me',
  },
};

export const Outline_Primary: Story = {
  args: {
    variant: 'outline_primary',
    children: 'Click me',
  },
};

export const Outline_Secondary: Story = {
  args: {
    variant: 'outline_secondary',
    children: 'Click me',
  },
};
