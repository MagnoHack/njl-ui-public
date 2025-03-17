import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Example } from "./Example.component";

const meta = {
  title: "Components/Example",
  component: Example,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn(), label: "Example" },
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Example",
  },
};

export const Secondary: Story = {
  args: {
    label: "Example",
  },
};

export const Large: Story = {
  args: {
    label: "Example",
  },
};

export const Small: Story = {
  args: {
    label: "Example",
  },
};
