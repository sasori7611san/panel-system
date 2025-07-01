import { FC, memo } from 'react';
import { BaseButton } from './BaseButton';

type Props = {
  onClick: () => void;
};

export const BlueButton: FC<Props> = memo((props) => {
  return (
    <div>
      <BaseButton strColor={'blue'} onClick={props.onClick} />
    </div>
  );
});
