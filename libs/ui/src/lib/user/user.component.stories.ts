import { Meta, Story } from '@storybook/angular';
import { UserComponent } from './user.component';

export default {
  title: 'ME/User',
  component: UserComponent,
} as Meta<UserComponent>;

const Template: Story<UserComponent> = (args: UserComponent) => ({
  component: UserComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  user: {
    firstName: 'Mosine',
    lastName: 'hajjar',
    age: 30,
    salary: 50000,
  },
};
