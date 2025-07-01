import { FC, memo, useContext } from 'react';
import styled from 'styled-components';
import { SheetsContext } from '../pages/Home';

type Props = {
  strColor: string;
  onClick: () => void;
};

export const BaseButton: FC<Props> = memo((props) => {
  // パネル枚数
  const sheets = useContext(SheetsContext);
  switch (props.strColor) {
    case 'red':
      return <BaseRed onClick={props.onClick}>{sheets.redSheet}</BaseRed>;
    case 'green':
      return <BaseGreen onClick={props.onClick}>{sheets.greenSheet}</BaseGreen>;
    case 'white':
      return <BaseWhite onClick={props.onClick}>{sheets.whiteSheet}</BaseWhite>;
    case 'blue':
      return <BaseBlue onClick={props.onClick}>{sheets.blueSheet}</BaseBlue>;
    case 'yellow':
      return <BaseYellow onClick={props.onClick} />;
    default:
      return <BaseGray onClick={props.onClick} />;
  }
});

const BaseRed = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  font-size: 16px;
  color: black;
  background: red;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;
const BaseGreen = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  font-size: 16px;
  color: black;
  background: green;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;
const BaseWhite = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  font-size: 16px;
  color: black;
  background: white;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;
const BaseBlue = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  font-size: 16px;
  color: black;
  background: blue;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;
const BaseYellow = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  background: yellow;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;
const BaseGray = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  background: gray;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;
