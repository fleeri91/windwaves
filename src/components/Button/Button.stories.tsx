import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "WindWaves/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});

PrimaryButton.args = {
  children: "Primary",
  variant: "primary",
  disabled: false,
};

export const SecondaryButton = Template.bind({});

SecondaryButton.args = {
  children: "Secondary",
  variant: "secondary",
  disabled: false,
};

export const PrimaryButtonRounded = Template.bind({});

PrimaryButtonRounded.args = {
  children: "Primary Rounded",
  variant: "primary",
  disabled: false,
  rounded: true,
};

export const SecondaryButtonRounded = Template.bind({});

SecondaryButtonRounded.args = {
  children: "Secondary Rounded",
  variant: "secondary",
  disabled: false,
  rounded: true,
};
