import { FC, memo } from 'react';
import { BaseButton } from './BaseButton';

type Props = {
  onClick: () => void;
};

export const YellowButton: FC<Props> = memo((props) => {
  return (
    <div>
      <BaseButton strColor={'yellow'} onClick={props.onClick} />
    </div>
  );
});
