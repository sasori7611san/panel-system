import { createContext, FC, memo, useContext, useState } from 'react';
import { choiceColorSet } from '../../modules/choiceColorSet';
import { COLORS } from '../../modules/enums';
import {
  upPanelChenge,
  downPanelChenge,
  leftPanelChenge,
  rightPanelChenge,
  leftUpPanelChenge,
  leftDownPanelChenge,
  rightUpPanelChenge,
  rightDownPanelChenge,
  panelChangeExec,
} from '../../modules/panelChangeExec';
import { panelCheck } from '../../modules/panelCheck';
import {
  upSandCheck,
  downSandCheck,
  leftSandCheck,
  rightSandCheck,
  leftUpSandCheck,
  leftDownSandCheck,
  rightUpSandCheck,
  rightDownSandCheck,
} from '../../modules/sandCheck';
import { ColorType, PanelChange, Total, UndoState } from '../../modules/types';
import { PanelContext } from '../../provider/PanelProvider';
import { ChoiceColor } from '../organisms/ChoiceColor';
import { MessagePlace } from '../organisms/MessagePlace';
import { PanelScreen } from '../organisms/PanelScreen';

// context宣言
export const SheetsContext = createContext({} as Total);

export const Home: FC = memo(() => {
  // panel使用（contextからpanelと更新関数を取得）
  const { panel, setPanel } = useContext(PanelContext);

  // ローカルのパネル総数状態
  const [panelTotal, setPanelTotal] = useState<Total>({
    redSheet: 0,
    greenSheet: 0,
    whiteSheet: 0,
    blueSheet: 0,
  });
  // 使用メッセージ
  const [strColor, setStrColor] = useState<string>('');
  const [message, setMessage] = useState<string>(
    '必ず入力する色を選んでから番号を押してください'
  );
  const [panelNo, setPanelNo] = useState<string>('');
  // 選択色番号
  const [colorNum, setColorNum] = useState<number>(0);
  // UNDO履歴
  const [history, setHistory] = useState<UndoState[]>([]);

  // deep clone helper for panel (use JSON to ensure no shared references)
  const clonePanel = (p: PanelChange['panel']): PanelChange['panel'] =>
    JSON.parse(JSON.stringify(p));

  // 色の選択・表示用変数へ代入（num:色番号）
  const choiceColor = (num: number): void => {
    // 色の選択を反映
    const colorType: ColorType = choiceColorSet(num);
    setColorNum(colorType.colorNum);
    setStrColor(colorType.colorStr);
    // 取れるパネルを確認（panelCheck は副作用で check/condition を変更するため、クローンで計算してからそのクローンを state に反映する）
    const cloned = clonePanel(panel);
    const can = panelCheck(cloned, colorType.colorNum);
    setPanel(cloned);
    setPanelNo(can);
  };

  // UNDOボタン処理
  const undo = (): void => {
    // Use functional updater to atomically read & pop the latest snapshot from history
    setHistory((prev) => {
      console.log('UNDO pressed, history length before:', prev.length);
      if (prev.length === 0) {
        // No history to pop; show message and keep history unchanged
        setMessage('これ以上戻れません');
        return prev;
      }
      const last = prev[prev.length - 1];
      // For debugging: compare last snapshot to current panel
      try {
        const same = JSON.stringify(last.panel) === JSON.stringify(panel);
        console.log('is last snapshot identical to current panel?', same);
      } catch (e) {
        console.log('compare error', e);
      }
      // restore: compute cloned board with correct check/condition, then restore
      const clonedLast = clonePanel(last.panel);
      const can = panelCheck(clonedLast, last.colorNum);
      console.log('restoring panel, computed can:', can);
      setPanel(clonedLast);
      setPanelTotal({ ...last.total });
      setColorNum(last.colorNum);
      setStrColor(last.colorStr);
      setPanelNo(can);
      setMessage('1手戻しました');
      return prev.slice(0, prev.length - 1);
    });
  };

  // パネル取得（num:パネル番号）
  const action = (num: number): void => {
    // 縦要素番号
    let verNo = 0;
    // 横要素番号
    let sideNo = 0;
    // パネル取得ロジック
    if (num <= 25 && num > 0) {
      // 取得配列要素取得
      Math.floor(num / 5) < 5 && num % 5 !== 0
        ? (verNo = Math.floor(num / 5) + 1)
        : (verNo = Math.floor(num / 5));
      num % 5 === 0 ? (sideNo = 5) : (sideNo = num % 5);
      if (panel[verNo][sideNo].check) {
        // 操作前の状態を履歴に保存
        // ただし panelCheck は副作用で check/condition を更新するため、保存前に表示と同じチェック情報を確実に入れておく
        const preClone = clonePanel(panel);
        const preCan = panelCheck(preClone, colorNum);
        // setPanel を事前に反映してから履歴に保存（これ同期的に UI にも反映される）
        setPanel(preClone);
        setPanelNo(preCan);
        setHistory((prev) => [
          ...prev,
          {
            panel: clonePanel(preClone),
            total: { ...panelTotal },
            colorNum: colorNum,
            colorStr: strColor || '灰',
          },
        ]);

        // パネルに色を設定し、次取れる箇所や枚数を集計
        // 操作は元の state を破壊しないよう、クローンを作ってから渡す
        const working = clonePanel(preClone);
        const panelresult: PanelChange = panelChangeExec(
          colorNum,
          verNo,
          sideNo,
          working,
          panelTotal
        );
        const newPanel = panelresult.panel;
        const newTotal = panelresult.total;
        // 挟まったパネルの色を変える
        // 起点の色
        const currentColorNo = newPanel[verNo][sideNo].colorNo;
        // パネル変わるフラグ
        let panelChange = false;
        // 色判定（0:灰色、1:黄色は除外）
        if (currentColorNo >= COLORS.RED) {
          // パネル更新（各方向で確認）
          // 1.変わるパネルがあるか判定し、あるならpanelChangeをtrueにする
          // 2.panelChangeがtrueならパネル更新する
          // 上方向確認
          panelChange = upSandCheck(
            newPanel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            upPanelChenge(currentColorNo, verNo, sideNo, newPanel, newTotal);
            panelChange = false;
          }
          // 下方向確認
          panelChange = downSandCheck(
            newPanel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            downPanelChenge(currentColorNo, verNo, sideNo, newPanel, newTotal);
            panelChange = false;
          }
          // 左方向確認
          panelChange = leftSandCheck(
            newPanel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            leftPanelChenge(currentColorNo, verNo, sideNo, newPanel, newTotal);
            panelChange = false;
          }
          // 右方向確認
          panelChange = rightSandCheck(
            newPanel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            rightPanelChenge(currentColorNo, verNo, sideNo, newPanel, newTotal);
            panelChange = false;
          }
          // 左斜め上方向確認
          panelChange = leftUpSandCheck(
            newPanel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            leftUpPanelChenge(currentColorNo, verNo, sideNo, newPanel, newTotal);
            panelChange = false;
          }
          // 左斜め下方向確認
          panelChange = leftDownSandCheck(
            newPanel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            leftDownPanelChenge(
              currentColorNo,
              verNo,
              sideNo,
              newPanel,
              newTotal
            );
            panelChange = false;
          }
          // 右斜め上方向確認
          panelChange = rightUpSandCheck(
            newPanel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            rightUpPanelChenge(
              currentColorNo,
              verNo,
              sideNo,
              newPanel,
              newTotal
            );
            panelChange = false;
          }
          // 右斜め下方向確認
          panelChange = rightDownSandCheck(
            newPanel,
            panelChange,
            currentColorNo,
            verNo,
            sideNo
          );
          if (panelChange) {
            rightDownPanelChenge(
              currentColorNo,
              verNo,
              sideNo,
              newPanel,
              newTotal
            );
            panelChange = false;
          }
        }
        // すべての更新が完了したのでstateに反映
        // panelCheck は副作用で check/condition を設定するため、クローンを使って計算し、そのクローンを state に反映する
        const clonedForCheck = clonePanel(newPanel);
        const can = panelCheck(clonedForCheck, colorNum);
        setPanel(clonePanel(clonedForCheck));
        setPanelTotal({ ...newTotal });
        setPanelNo(can);
        // メッセージを非表示にする
        setMessage('');
      } else {
        // メッセージ出力（入れないことを表示）
        setMessage('今は取れません');
      }
    }
  };
  return (
    <div>
      <PanelScreen action={(num: number) => action(num)} />
      <MessagePlace strColor={strColor} message={message} panelNo={panelNo} />
      <div style={{ textAlign: 'center', marginTop: 8 }}>
        <button onClick={undo}>UNDO</button>
      </div>
      <SheetsContext.Provider value={panelTotal}>
        <ChoiceColor choiceColor={(num: number) => choiceColor(num)} />
      </SheetsContext.Provider>
    </div>
  );
});
