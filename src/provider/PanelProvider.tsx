import { createContext, FC, ReactNode, useState } from 'react';
import { Panel } from '../modules/types';

// PanelContextはpanel配列と更新関数を持つオブジェクトを提供する
export const PanelContext = createContext({} as {
  panel: Panel[][];
  setPanel: (p: Panel[][]) => void;
});

// パネルの初期化、colorNo = -1は枠、0はパネル（灰色）1:黄,2:赤,3:緑,4:白,5:青
// check:取れる箇所、condition:取得条件番号（1:挟める、2:次挟める、3:隣接、9:それ以外）
let initialPanel: Panel[][] = [
  [
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
  ],
  [
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
  ],
  [
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
  ],
  [
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
  ],
  [
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
  ],
  [
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: 0, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
  ],
  [
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
    { colorNo: -1, check: false, condition: 9 },
  ],
];

type Props = {
  children: ReactNode;
};

export const PanelProvider: FC<Props> = (props) => {
  // deep clone helper to avoid leaking mutations from module-scoped initialPanel
  const clonePanel = (p: Panel[][]): Panel[][] => JSON.parse(JSON.stringify(p));

  const [panelState, setPanelState] = useState<Panel[][]>(() => clonePanel(initialPanel));

  return (
    <PanelContext.Provider
      value={{ panel: panelState, setPanel: setPanelState }}
    >
      {props.children}
    </PanelContext.Provider>
  );
};
