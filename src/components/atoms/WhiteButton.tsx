import { FC, memo } from 'react';
import { BaseButton } from './BaseButton';

type Props = {
  onClick: () => void;
};

export const WhiteButton: FC<Props> = memo((props) => {
  return (
    <div>
      <BaseButton strColor={'white'} onClick={props.onClick} />
    </div>
  );
});
