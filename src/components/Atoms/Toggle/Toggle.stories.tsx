import type { Meta, StoryObj } from '@storybook/react'
import Toggle from './Toggle'

const meta: Meta<typeof Toggle> = {
  title: '4. Library/Atoms/Toggle',
  component: Toggle,
  argTypes: {},
  parameters: {
    controls: { exclude: [''] },
  },
}
export default meta

type Story = StoryObj<typeof Toggle>

export const Default: Story = {
  args: {
    children: 'toggle me',
  },
}
