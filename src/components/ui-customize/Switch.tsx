import { type Dispatch, SetStateAction } from 'react';
import { Switch } from '@/components/ui';
import { type CheckedState } from '@radix-ui/react-checkbox';

type TOriginSwitchProps = React.ComponentProps<typeof Switch>;
type TSwitchProps = TOriginSwitchProps & {
  onChange?: Dispatch<SetStateAction<CheckedState>>; // Use for react-hook-form
};

export function SwitchC(props: TSwitchProps) {
  const { onChange, ...rest } = props;
  return <Switch {...rest} onCheckedChange={(v) => onChange && onChange(v)} />;
}
