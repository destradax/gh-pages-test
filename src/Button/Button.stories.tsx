import { Story } from '@ladle/react';
import Button, { ButtonProps } from './Button';

export const Default: Story<ButtonProps> = ({ label }) => (
  <Button label={label} />
);
Default.args = {
  label: 'Hello'
};
