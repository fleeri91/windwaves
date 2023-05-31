import React from 'react'
import { Meta, Story } from '@storybook/react'
import Typography from './Typography'

type TypographyProps = React.ComponentProps<typeof Typography>

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  title: 'WindWaves/General/Typography',
  component: Typography,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    as: {
      control: { type: 'select' },
    },
    font: {
      control: { type: 'select' },
    },
    weight: {
      control: { type: 'select' },
    },
    italic: {
      control: { type: 'boolean' },
    },
  },
} as Meta<TypographyProps>

const Template: Story<TypographyProps> = (args) => <Typography {...args} />

export const Default = Template.bind({})

Default.args = {
  children: 'Lorem ipsum',
  as: 'h1',
  italic: false,
}

Default.parameters = {
  controls: {
    include: Object.keys(Default.args),
  },
}

/**
 
  <Typography as='mega'>Mega: 60/48px</Typography>
  <Typography as='h1'>H1: 48/36px</Typography>
  <Typography as='h2'>H2: 36/30px</Typography>
  <Typography as='h3'>H3: 30/24px</Typography>
  <Typography as='h4'>H4: 24/20px</Typography>
  <Typography as='h5'>H5: 20/18px</Typography>
  <Typography as='preamble'>Preamble: 18/16px</Typography>
  <Typography as='p'>P: 16/14px</Typography>

 */
