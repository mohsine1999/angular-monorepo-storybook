import { Meta } from '@storybook/angular';
import { UserListComponent } from './user-list.component';

export default {
  title: 'Me/UserListComponent',
  component: UserListComponent,
} as Meta<UserListComponent>;

export const Primary = {
  render: (args: UserListComponent) => ({
    props: args,
  }),
  args: {
    users: [
      { firstName: 'mosine', lastName: 'hajjar', age: 30, salary: 50000 },
      { firstName: 'rida', lastName: 'el mehdi', age: 25, salary: 60000 },
      { firstName: 'outman', lastName: 'el miraouy', age: 35, salary: 70000 },
    ],
  },
};
