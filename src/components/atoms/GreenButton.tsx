import { FC, memo } from 'react';
import { BaseButton } from './BaseButton';

type Props = {
  onClick: () => void;
};

export const GreenButton: FC<Props> = memo((props) => {
  return (
    <div>
      <BaseButton strColor={'green'} onClick={props.onClick} />
    </div>
  );
});
