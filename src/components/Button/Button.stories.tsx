import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'WindWaves/General/Button',
  component: Button,
  parameters: {
    controls: { exclude: ['className', 'onClick', 'href'] },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Primary',
    variant: 'primary',
    disabled: false,
  },
}
