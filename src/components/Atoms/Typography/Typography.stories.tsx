import type { Meta, StoryObj } from '@storybook/react'
import Typography from './Typography'

const meta: Meta<typeof Typography> = {
  title: '3. Library/Atoms/Typography',
  component: Typography,
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
    marginBottom: false,
    styleAs: 'h1',
  },
}
