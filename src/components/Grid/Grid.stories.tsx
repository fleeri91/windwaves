import type { Meta, StoryObj } from '@storybook/react'
import { Grid, Cell } from './Grid'

const meta: Meta<typeof Grid> = {
  title: 'WindWaves/Layout/Grid',
  component: Grid,
  render: ({ ...args }) => (
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
  ),
}
export default meta

type Story = StoryObj<typeof Grid>

export const Default: Story = {
  args: {
    cols: 3,
  },
}
