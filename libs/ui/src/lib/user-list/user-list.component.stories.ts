import { Meta } from '@storybook/angular';
import { UserListComponent } from './user-list.component';

export default {
  title: 'UserListComponent',
  component: UserListComponent,
} as Meta<UserListComponent>;

export const Primary = {
  render: (args: UserListComponent) => ({
    props: args,
  }),
  args: {},
};
