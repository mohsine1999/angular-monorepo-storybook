import { Meta, moduleMetadata } from '@storybook/angular';
import { UserComponent } from './user.component';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTableModule } from '@angular/material/table';

export default {
  title: 'ME/User',
  component: UserComponent,
  decorators: [
    moduleMetadata({
      imports: [MatTableModule, CdkTableModule],
    }),
  ],
} as Meta<UserComponent>;


export const Primary = (args: UserComponent) => ({
  props: args,
});

Primary.args = {
  user: {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    salary: 50000,
  },
};

