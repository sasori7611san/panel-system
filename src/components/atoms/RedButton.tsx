import { FC, memo } from 'react';
import { BaseButton } from './BaseButton';

type Props = {
  onClick: () => void;
};

export const RedButton: FC<Props> = memo((props) => {
  return (
    <div>
      <BaseButton strColor={'red'} onClick={props.onClick} />
    </div>
  );
});
