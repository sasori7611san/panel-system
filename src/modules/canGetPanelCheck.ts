import { COLORS } from './enums'
import { Panel } from './types'
import { upSandCheck, downSandCheck, leftSandCheck, rightSandCheck, leftUpSandCheck, leftDownSandCheck, rightUpSandCheck, rightDownSandCheck } from './sandCheck'

// 取得可能か確認する関数（panel:使用パネル,v:縦番号,s:横番号,colorNum:色番号）
export const canGetPanelCheck = (panel: Panel[][], v: number, s: number, colorNum: number): number => {
  // 条件番号（1:挟める箇所,2:次挟める箇所,3:自分や他人と隣接している箇所,9:それ以外）
  let condNum = 9
  // 最初の判定フラグ（13番以外入れないようにする為）
  let beginLock = false
  // 挟める箇所フラグ
  const sandPanel = false
  // 最初は配列[3][3]（13番）のみ条件番号1を設定
  if (panel[3][3].colorNo === COLORS.GRAY) {
    beginLock = true
    if (v === 3 && s === 3) {
      condNum = 1
      beginLock = false
    }
  }
  // 挟める箇所か（該当すれば条件番号1を設定）
  if (condNum === 9 && upSandCheck(panel, sandPanel, colorNum, v, s)) {
    condNum = 1
  } else if (condNum !== 1 && downSandCheck(panel, sandPanel, colorNum, v, s)) {
    condNum = 1
  } else if (condNum !== 1 && leftSandCheck(panel, sandPanel, colorNum, v, s)) {
    condNum = 1
  } else if (condNum !== 1 && rightSandCheck(panel, sandPanel, colorNum, v, s)) {
    condNum = 1
  } else if (condNum !== 1 && leftUpSandCheck(panel, sandPanel, colorNum, v, s)) {
    condNum = 1
  } else if (condNum !== 1 && leftDownSandCheck(panel, sandPanel, colorNum, v, s)) {
    condNum = 1
  } else if (condNum !== 1 && rightUpSandCheck(panel, sandPanel, colorNum, v, s)) {
    condNum = 1
  } else if (condNum !== 1 && rightDownSandCheck(panel, sandPanel, colorNum, v, s)) {
    condNum = 1
  }
  // 次挟める箇所か、各方向で確認する（既に条件番号1がある時、又は、最初の場合は行わない）
  // 1.自分のパネルと空いているパネルや枠（colorNo = -1）以外なら挟む対象フラグを立てる
  // 2.空いているパネルで挟む対象フラグがtrueなら次挟める箇所となるので条件番号2を設定してその方向の確認を抜ける
  // 3.それ以外は何もせずその方向の確認を抜ける
  // 確認用for文用変数
  let a
  let b
  if (condNum !== 1 && !beginLock) {
    // 挟む対象フラグ
    let isSandTarget = false
    // 上方向確認
    for (a = v - 1; a >= 0; a--) {
      if (panel[a][s].colorNo !== colorNum && panel[a][s].colorNo > COLORS.YELLOW) {
        isSandTarget = true
      } else if (panel[a][s].colorNo === COLORS.GRAY || panel[a][s].colorNo === COLORS.YELLOW) {
        if (isSandTarget) {
          condNum = 2
        }
        break
      } else {
        break
      }
    }
    // 下方向確認
    if (condNum > 2) {
      let isSandTarget = false
      for (a = v + 1; a <= 6; a++) {
        if (panel[a][s].colorNo !== colorNum && panel[a][s].colorNo > COLORS.YELLOW) {
          isSandTarget = true
        } else if (panel[a][s].colorNo === COLORS.GRAY || panel[a][s].colorNo === COLORS.YELLOW) {
          if (isSandTarget) {
            condNum = 2
          }
          break
        } else {
          break
        }
      }
    }
    // 左方向確認
    if (condNum > 2) {
      let isSandTarget = false
      for (a = s - 1; a >= 0; a--) {
        if (panel[v][a].colorNo !== colorNum && panel[v][a].colorNo > COLORS.YELLOW) {
          isSandTarget = true
        } else if (panel[v][a].colorNo === COLORS.GRAY || panel[v][a].colorNo === COLORS.YELLOW) {
          if (isSandTarget) {
            condNum = 2
          }
          break
        } else {
          break
        }
      }
    }
    // 右方向確認
    if (condNum > 2) {
      let isSandTarget = false
      for (a = s + 1; a <= 6; a++) {
        if (panel[v][a].colorNo !== colorNum && panel[v][a].colorNo > COLORS.YELLOW) {
          isSandTarget = true
        } else if (panel[v][a].colorNo === COLORS.GRAY || panel[v][a].colorNo === COLORS.YELLOW) {
          if (isSandTarget) {
            condNum = 2
          }
          break
        } else {
          break
        }
      }
    }
    // 左斜め上方向確認
    if (condNum > 2) {
      let isSandTarget = false
      for (a = v - 1, b = s - 1; a >= 0 || b >= 0; a--, b--) {
        if (panel[a][b].colorNo !== colorNum && panel[a][b].colorNo > COLORS.YELLOW) {
          isSandTarget = true
        } else if (panel[a][b].colorNo === COLORS.GRAY || panel[a][b].colorNo === COLORS.YELLOW) {
          if (isSandTarget) {
            condNum = 2
          }
          break
        } else {
          break
        }
      }
    }
    // 左斜め下方向確認
    if (condNum > 2) {
      let isSandTarget = false
      for (a = v + 1, b = s - 1; a <= 6 || b >= 0; a++, b--) {
        if (panel[a][b].colorNo !== colorNum && panel[a][b].colorNo > COLORS.YELLOW) {
          isSandTarget = true
        } else if (panel[a][b].colorNo === COLORS.GRAY || panel[a][b].colorNo === COLORS.YELLOW) {
          if (isSandTarget) {
            condNum = 2
          }
          break
        } else {
          break
        }
      }
    }
    // 右斜め上方向確認
    if (condNum > 2) {
      let isSandTarget = false
      for (a = v - 1, b = s + 1; a >= 0 || b <= 6; a--, b++) {
        if (panel[a][b].colorNo !== colorNum && panel[a][b].colorNo > COLORS.YELLOW) {
          isSandTarget = true
        } else if (panel[a][b].colorNo === COLORS.GRAY || panel[a][b].colorNo === COLORS.YELLOW) {
          if (isSandTarget) {
            condNum = 2
          }
          break
        } else {
          break
        }
      }
    }
    // 右斜め下方向確認
    if (condNum > 2) {
      let isSandTarget = false
      for (a = v + 1, b = s + 1; a <= 6 || b <= 6; a++, b++) {
        if (panel[a][b].colorNo !== colorNum && panel[a][b].colorNo > COLORS.YELLOW) {
          isSandTarget = true
        } else if (panel[a][b].colorNo === COLORS.GRAY || panel[a][b].colorNo === COLORS.YELLOW) {
          if (isSandTarget) {
            condNum = 2
          }
          break
        } else {
          break
        }
      }
    }
  }
  // 誰かのパネルに隣接しているか確認（あれば条件番号3を設定）
  if (condNum > 2) {
    if (panel[v - 1][s].colorNo >= COLORS.RED || panel[v + 1][s].colorNo >= COLORS.RED) {
      condNum = 3
    } else if (panel[v][s - 1].colorNo >= COLORS.RED || panel[v][s + 1].colorNo >= COLORS.RED) {
      condNum = 3
    } else if (panel[v - 1][s - 1].colorNo >= COLORS.RED || panel[v + 1][s - 1].colorNo >= COLORS.RED) {
      condNum = 3
    } else if (panel[v - 1][s + 1].colorNo >= COLORS.RED || panel[v + 1][s + 1].colorNo >= COLORS.RED) {
      condNum = 3
    }
  }
  return condNum
}
