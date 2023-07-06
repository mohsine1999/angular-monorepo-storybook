import { Meta } from '@storybook/angular';
import { TableHeaderComponent } from './table-header.component';

export default {
  title: 'TableHeaderComponent',
  component: TableHeaderComponent,
} as Meta<TableHeaderComponent>;

export const Primary = {
  render: (args: TableHeaderComponent) => ({
    props: args,
  }),
  args: {},
};
