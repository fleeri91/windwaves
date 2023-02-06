import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Grid, Cell } from "./Grid";

export default {
  title: "WindWaves/Layout/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args} classname="h-16">
    <Cell>
      <div className="h-full w-full bg-red-400" />
    </Cell>
    <Cell>
      <div className="h-full w-full bg-red-400" />
    </Cell>
    <Cell>
      <div className="h-full w-full bg-red-400" />
    </Cell>
  </Grid>
);

export const PrimaryGrid = Template.bind({});

PrimaryGrid.args = {
  cols: 3,
};
