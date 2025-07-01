import { Panel } from './types'
import { COLORS } from './enums'
import { getStrNo } from './getStrNo'
import { canGetPanelCheck } from './canGetPanelCheck'

// パネルの取得可能か確認（panel:使用パネル,colorNum:色番号）
export const panelCheck = (panel: Panel[][], colorNum: number): string => {
  // 取得可能な番号を格納する配列
  const canGetPanelNo = []
  // 処理に使用するfor文用変数
  let m = 0
  let n = 0
  // チェック箇所の初期化
  for (m = 0; m <= 6; m++) {
    for (n = 0; n <= 6; n++) {
      panel[m][n].check = false
    }
  }
  // 黄色が入れる箇所を抽出
  if (colorNum === COLORS.YELLOW) {
    for (m = 0; m <= 6; m++) {
      for (n = 0; n <= 6; n++) {
        // 赤、緑、白、青のいずれかなら入れる様にチェックし、取得可能な番号として格納
        if (panel[m][n].colorNo >= COLORS.RED) {
          panel[m][n].check = true
        }
        if (panel[m][n].check) {
          canGetPanelNo.push(getStrNo(m, n))
        }
      }
    }
  } else {
    // 他の色のチェック
    // 最小条件番号（1:挟める場所及び、最初の13番,2:1以外で次挟める場所,3:1,2以外で赤、緑、白、青と隣接している場所,9:入れない場所）
    let minCondNum = 9
    // 条件の初期化
    for (m = 0; m <= 6; m++) {
      for (n = 0; n <= 6; n++) {
        panel[m][n].condition = 9
      }
    }
    // 条件確認ロジック
    for (m = 0; m <= 6; m++) {
      for (n = 0; n <= 6; n++) {
        // 条件を判定（灰色か黄色（空いているパネル）で、条件番号を判定し、最小条件番号を取得）
        if (panel[m][n].colorNo === COLORS.GRAY || panel[m][n].colorNo === COLORS.YELLOW) {
          panel[m][n].condition = canGetPanelCheck(panel, m, n, colorNum)
        }
        if (panel[m][n].condition < minCondNum) {
          minCondNum = panel[m][n].condition
        }
      }
    }
    // 入れる箇所を抽出
    for (m = 0; m <= 6; m++) {
      for (n = 0; n <= 6; n++) {
        // 最小条件番号と一致する番号を入れる場所としてチェックし、取得可能な番号として格納
        if (panel[m][n].condition === minCondNum) {
          panel[m][n].check = true
        }
        if (panel[m][n].check) {
          canGetPanelNo.push(getStrNo(m, n))
        }
      }
    }
  }
  // 終了（取れるパネルがなくなる）の判定
  // 終了フラグ
  let isFinish = true
  // 灰色や黄色があれば終了フラグを降ろす
  for (m = 0; m <= 6; m++) {
    for (n = 0; n <= 6; n++) {
      if (panel[m][n].colorNo === COLORS.GRAY || panel[m][n].colorNo === COLORS.YELLOW) {
        isFinish = false
      }
    }
  }
  // 終了の判定
  if (isFinish) {
    return 'ありません。'
  } else {
    // 入れる番号を戻り値にして返す
    return canGetPanelNo.join(',')
  }
}
