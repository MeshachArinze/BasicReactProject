import { ComponentStory, ComponentMeta, Meta, StoryFn } from "@storybook/react"
import Button from "./Button"


export default {
  title: "shared/Button",
  component: Button,

  argTypes: {
    className: { control: "string" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;