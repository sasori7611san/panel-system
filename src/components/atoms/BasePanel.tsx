import { FC, memo, useContext } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../modules/enums';
import { PanelContext } from '../../provider/PanelProvider';

type Props = {
  panelNum: number;
  action: () => void;
};

export const BasePanel: FC<Props> = memo((props) => {
  // context呼び出し
  const panel = useContext(PanelContext);
  const { panelNum, action } = props;
  // 縦要素番号
  let verNum = 0;
  // 横要素番号
  let sideNum = 0;
  // 取得配列要素取得
  Math.floor(panelNum / 5) < 5 && panelNum % 5 !== 0
    ? (verNum = Math.floor(panelNum / 5) + 1)
    : (verNum = Math.floor(panelNum / 5));
  panelNum % 5 === 0 ? (sideNum = 5) : (sideNum = panelNum % 5);
  // 押した色を反映
  switch (panel[verNum][sideNum].colorNo) {
    case COLORS.YELLOW:
      return (
        <YellowPanels
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </YellowPanels>
      );
    case COLORS.RED:
      return (
        <RedPanels
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </RedPanels>
      );
    case COLORS.GREEN:
      return (
        <GreenPanels
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </GreenPanels>
      );
    case COLORS.WHITE:
      return (
        <WhitePanels
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </WhitePanels>
      );
    case COLORS.BLUE:
      return (
        <BluePanels
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </BluePanels>
      );
    default:
      return (
        <Panels
          onClick={() => {
            action();
          }}
        >
          {panelNum}
        </Panels>
      );
  }
});

const Panels = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  text-align: center;
  color: black;
  background-color: gray;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;
const YellowPanels = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  text-align: center;
  color: black;
  background-color: Yellow;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;
const RedPanels = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  text-align: center;
  color: black;
  background-color: red;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;
const GreenPanels = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  text-align: center;
  color: black;
  background-color: green;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;
const WhitePanels = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  text-align: center;
  color: black;
  background-color: white;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;
const BluePanels = styled.button`
  width: 60px;
  height: 60px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 16px;
  text-align: center;
  color: black;
  background-color: blue;
  border-style: solid;
  border-width: 2px;
  border-color: black;
`;
