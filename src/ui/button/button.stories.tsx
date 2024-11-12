import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Button from "./index";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    size: {
      control: { type: "select", options: ["sm", "md", "lg"] },
    },
    full: { control: "boolean" },
    primary: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
    size: "md",
    full: false,
    primary: true,
    disabled: false,
    href: "",
    prefix: null,
    type: "button",
  },
};

export const Primary: Story = {
  args: {
    ...Default.args,
    primary: true,
  },
};

export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
  },
};

export const FullWidth: Story = {
  args: {
    ...Default.args,
    full: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const WithPrefix: Story = {
  args: {
    ...Default.args,
    prefix: <FaChevronLeft className="w-4 h-4" />,
  },
};

export const WithSuffix: Story = {
  args: {
    ...Default.args,
    suffix: <FaChevronRight className="w-4 h-4" />,
  },
};

export const AsLink: Story = {
  args: {
    ...Default.args,
    href: "/example",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-2">
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="space-x-2">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div>
        <Button full>Full Width</Button>
      </div>
      <div className="space-x-2">
        <Button prefix={<FaChevronLeft className="w-4 h-4" />}>
          With Prefix
        </Button>
        <Button suffix={<FaChevronRight className="w-4 h-4" />}>
          With Suffix
        </Button>
      </div>
      <div>
        <Button href="/example">As Link</Button>
      </div>
    </div>
  ),
};
