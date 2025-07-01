import { FC, memo } from 'react';

export type Props = {
  message: string;
  strColor: string;
  panelNo: string;
};

export const MessagePlace: FC<Props> = memo((props: Props) => {
  const { message, strColor, panelNo } = props;
  return (
    <div>
      <br />
      <p>{`${message}`}</p>
      <p>{`選択中の色：${strColor}`}</p>
      <p>{`取れる番号は、${panelNo}`}</p>
    </div>
  );
});
