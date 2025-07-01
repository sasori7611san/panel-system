import { createContext, FC, ReactNode } from 'react';
import { Panel } from '../modules/types';

export const PanelContext = createContext({} as Panel[][]);

// パネルの初期化、colorNo = -1は枠、0はパネル（灰色）1:黄,2:赤,3:緑,4:白,5:青
// check:取れる箇所、condition:取得条件番号（1:挟める、2:次挟める、3:隣接、9:それ以外）
let panel: Panel[][] = [
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
  return (
    <PanelContext.Provider value={panel}>
      {props.children}
    </PanelContext.Provider>
  );
};
