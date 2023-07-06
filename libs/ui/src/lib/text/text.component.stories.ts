import { Meta } from '@storybook/angular';
import { TextComponent } from './text.component';

export default {
  title: 'TextComponent',
  component: TextComponent,
} as Meta<TextComponent>;

export const Primary = {
  render: (args: TextComponent) => ({
    props: args,
  }),
  args: {
    text: 'here is me',
  },
};
