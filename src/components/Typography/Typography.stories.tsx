import type { Meta, StoryObj } from '@storybook/react'
import Typography from './Typography'

const meta: Meta<typeof Typography> = {
  title: 'WindWaves/General/Typography',
  component: Typography,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    as: {
      control: { type: 'select' },
    },
    styleAs: {
      control: { type: 'select' },
    },
    italic: {
      control: { type: 'boolean' },
    },
    marginBottom: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    controls: { exclude: ['className'] },
  },
}
export default meta

type Story = StoryObj<typeof Typography>

export const Default: Story = {
  args: {
    children: 'Lorem ipsum',
    as: 'h1',
    italic: false,
  },
}
