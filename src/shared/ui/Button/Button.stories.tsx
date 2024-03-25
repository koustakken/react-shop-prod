import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button, ThemeButton } from './Button'

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    className: '',
    children: 'Text',
    theme: ThemeButton.CLEAR,
  },
}
