import { Panel } from './types'
import { COLORS } from './enums'

// 関数の動作
// 1.その方向に接するパネルが自分のものではないか空いているパネルや枠（colorNo = -1）以外なら使用フラグを立てる
// 2.空いているパネルや枠の場合使用フラグを降し、確認を抜ける
// 3.それ以外は何もせず確認を抜ける
// 4.使用フラグを戻り値として返す
// 挟めるか確認（上方向）（panel:使用パネル,flag:使用フラグ,cn:色番号,v:縦番号,s:横番号）
export const upSandCheck = (panel: Panel[][], flag: boolean, cn: number, v: number, s: number): boolean => {
  // 確認for文用変数
  let i
  for (i = v - 1; i >= 0; i--) {
    if (panel[i][s].colorNo !== cn && panel[i][s].colorNo > COLORS.YELLOW) {
      flag = true
    } else if (panel[i][s].colorNo <= COLORS.YELLOW) {
      flag = false
      break
    } else {
      break
    }
  }
  return flag
}
// 挟めるか確認（下方向）（panel:使用パネル,flag:使用フラグ,cn:色番号,v:縦番号,s:横番号）
export const downSandCheck = (panel: Panel[][], flag: boolean, cn: number, v: number, s: number): boolean => {
  // 確認for文用変数
  let i
  for (i = v + 1; i <= 6; i++) {
    if (panel[i][s].colorNo !== cn && panel[i][s].colorNo > COLORS.YELLOW) {
      flag = true
    } else if (panel[i][s].colorNo <= COLORS.YELLOW) {
      flag = false
      break
    } else {
      break
    }
  }
  return flag
}
// 挟めるか確認（左方向）（panel:使用パネル,flag:使用フラグ,cn:色番号,v:縦番号,s:横番号）
export const leftSandCheck = (panel: Panel[][], flag: boolean, cn: number, v: number, s: number): boolean => {
  // 確認for文用変数
  let i
  for (i = s - 1; i >= 0; i--) {
    if (panel[v][i].colorNo !== cn && panel[v][i].colorNo > COLORS.YELLOW) {
      flag = true
    } else if (panel[v][i].colorNo <= COLORS.YELLOW) {
      flag = false
      break
    } else {
      break
    }
  }
  return flag
}
// 挟めるか確認（右方向）（panel:使用パネル,flag:使用フラグ,cn:色番号,v:縦番号,s:横番号）
export const rightSandCheck = (panel: Panel[][], flag: boolean, cn: number, v: number, s: number): boolean => {
  // 確認for文用変数
  let i
  for (i = s + 1; i <= 6; i++) {
    if (panel[v][i].colorNo !== cn && panel[v][i].colorNo > COLORS.YELLOW) {
      flag = true
    } else if (panel[v][i].colorNo <= COLORS.YELLOW) {
      flag = false
      break
    } else {
      break
    }
  }
  return flag
}
// 挟めるか確認（左斜め上方向）（panel:使用パネル,flag:使用フラグ,cn:色番号,v:縦番号,s:横番号）
export const leftUpSandCheck = (panel: Panel[][], flag: boolean, cn: number, v: number, s: number): boolean => {
  // 確認for文用変数
  let i
  let j
  for (i = v - 1, j = s - 1; i >= 0 || j >= 0; i--, j--) {
    if (panel[i][j].colorNo !== cn && panel[i][j].colorNo > COLORS.YELLOW) {
      flag = true
    } else if (panel[i][j].colorNo <= COLORS.YELLOW) {
      flag = false
      break
    } else {
      break
    }
  }
  return flag
}
// 挟めるか確認（左斜め下方向）（panel:使用パネル,flag:使用フラグ,cn:色番号,v:縦番号,s:横番号）
export const leftDownSandCheck = (panel: Panel[][], flag: boolean, cn: number, v: number, s: number): boolean => {
  // 確認for文用変数
  let i
  let j
  for (i = v + 1, j = s - 1; i <= 6 || j >= 0; i++, j--) {
    if (panel[i][j].colorNo !== cn && panel[i][j].colorNo > COLORS.YELLOW) {
      flag = true
    } else if (panel[i][j].colorNo <= COLORS.YELLOW) {
      flag = false
      break
    } else {
      break
    }
  }
  return flag
}
// 挟めるか確認（右斜め上方向）（panel:使用パネル,flag:使用フラグ,cn:色番号,v:縦番号,s:横番号）
export const rightUpSandCheck = (panel: Panel[][], flag: boolean, cn: number, v: number, s: number): boolean => {
  // 確認for文用変数
  let i
  let j
  for (i = v - 1, j = s + 1; i >= 0 || j <= 6; i--, j++) {
    if (panel[i][j].colorNo !== cn && panel[i][j].colorNo > COLORS.YELLOW) {
      flag = true
    } else if (panel[i][j].colorNo <= COLORS.YELLOW) {
      flag = false
      break
    } else {
      break
    }
  }
  return flag
}
// 挟めるか確認（右斜め下方向）（panel:使用パネル,flag:使用フラグ,cn:色番号,v:縦番号,s:横番号）
export const rightDownSandCheck = (panel: Panel[][], flag: boolean, cn: number, v: number, s: number): boolean => {
  // 確認for文用変数
  let i
  let j
  for (i = v + 1, j = s + 1; i <= 6 || j <= 6; i++, j++) {
    if (panel[i][j].colorNo !== cn && panel[i][j].colorNo > COLORS.YELLOW) {
      flag = true
    } else if (panel[i][j].colorNo <= COLORS.YELLOW) {
      flag = false
      break
    } else {
      break
    }
  }
  return flag
}
