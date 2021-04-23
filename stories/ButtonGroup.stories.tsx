import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ButtonGroup } from '../src';

const meta: Meta = {
  title: 'UsersButtonGroup',
  component: ButtonGroup,
};

export default meta;

const Template: Story = (args) => {
  const { items, selectedRowIds } = args;
  return (
    <div className="container mx-auto pl-20">
      <ButtonGroup items={items} selectedRowIds={selectedRowIds} />
    </div>
  );
};

export const DisabledButtonGroup = Template.bind({});
DisabledButtonGroup.args = {
  items: [{ name: 'Delete', icon: 'TrashIcon', href: '#' }],
  selectedRowIds: {},
};

export const ButtonGroupOneRow = Template.bind({});
ButtonGroupOneRow.args = {
  items: [
    { name: 'Transfer', icon: 'ArrowCircleRightIcon', href: '#' },
    { name: 'Delete', icon: 'TrashIcon', href: '#' },
  ],
  selectedRowIds: {
    '9': true,
  },
};

export const UsersButtonMultipleRows = Template.bind({});
UsersButtonMultipleRows.args = {
  items: [
    { name: 'Transfer', icon: 'ArrowCircleRightIcon', href: '#' },
    { name: 'Delete', icon: 'TrashIcon', href: '#' },
  ],
  selectedRowIds: {
    '5': true,
    '8': true,
    '9': true,
  },
};
