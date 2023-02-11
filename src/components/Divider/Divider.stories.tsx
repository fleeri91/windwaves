import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Divider from './Divider'

export default {
  title: 'WindWaves/Layout/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args}>{args.label}</Divider>
)

export const Default = Template.bind({})

Default.args = {
  label: '',
}
