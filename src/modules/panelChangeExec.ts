import { colorSet } from './colorSet'
import { COLORS } from './enums'
import { panelAggregation } from './panelAggregation'
import { Panel, PanelChange, Total } from './types'

// for文用変数
let i = 0
let j = 0
// パネル格納
let panelChange: PanelChange = {
  panel:[
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
  ],
  total: {
    redSheet: 0,
    greenSheet: 0,
    whiteSheet: 0,
    blueSheet: 0,
  }
}

// パネル更新
// 各方向で対象となるパネルに対して更新処理を行う
// パネル更新（上方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const upPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total): void => {
  for (i = v - 1; i >= 0; i--) {
    if (pan[i][s].colorNo !== col && pan[i][s].colorNo > COLORS.YELLOW) {
      panelChangeExec(col, i, s, pan, total)
    } else {
      break
    }
  }
}
// パネル更新（下方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const downPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total): void => {
  for (i = v + 1; i <= 6; i++) {
    if (pan[i][s].colorNo !== col && pan[i][s].colorNo > COLORS.YELLOW) {
      panelChangeExec(col, i, s, pan, total)
    } else {
      break
    }
  }
}
// パネル更新（左方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const leftPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total): void => {
  for (i = s - 1; i >= 0; i--) {
    if (pan[v][i].colorNo !== col && pan[v][i].colorNo > COLORS.YELLOW) {
      panelChangeExec(col, v, i, pan, total)
    } else {
      break
    }
  }
}
// パネル更新（右方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const rightPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total): void => {
  for (i = s + 1; i <= 6; i++) {
    if (pan[v][i].colorNo !== col && pan[v][i].colorNo > COLORS.YELLOW) {
      panelChangeExec(col, v, i, pan, total)
    } else {
      break
    }
  }
}
// パネル更新（左斜め上方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const leftUpPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total): void => {
  for (i = v - 1, j = s - 1; i >= 0 || j >= 0; i--, j--) {
    if (pan[i][j].colorNo !== col && pan[i][j].colorNo > COLORS.YELLOW) {
      panelChangeExec(col, i, j, pan, total)
    } else {
      break
    }
  }
}
// パネル更新（左斜め下方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const leftDownPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total): void => {
  for (i = v + 1, j = s - 1; i <= 6 || j >= 0; i++, j--) {
    if (pan[i][j].colorNo !== col && pan[i][j].colorNo > COLORS.YELLOW) {
      panelChangeExec(col, i, j, pan, total)
    } else {
      break
    }
  }
}
// パネル更新（右斜め上方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const rightUpPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total): void => {
  for (i = v - 1, j = s + 1; i >= 0 || j <= 6; i--, j++) {
    if (pan[i][j].colorNo !== col && pan[i][j].colorNo > COLORS.YELLOW) {
      panelChangeExec(col, i, j, pan, total)
    } else {
      break
    }
  }
}
// パネル更新（右斜め下方向）（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計,sheet:パネル変化枚数）
export const rightDownPanelChenge = (col: number, v: number, s: number, pan: Panel[][], total: Total): void => {
  for (i = v + 1, j = s + 1; i <= 6 || j <= 6; i++, j++) {
    if (pan[i][j].colorNo !== col && pan[i][j].colorNo > COLORS.YELLOW) {
      panelChangeExec(col, i, j, pan, total)
    } else {
      break
    }
  }
}
// パネル変更動作（col:対象色番号,v:縦番号,s:横番号,pan:パネル,total:パネル集計）
export const panelChangeExec = (col: number, v: number, s: number, pan: Panel[][], total: Total): PanelChange => {
  panelChange.panel = colorSet(col, v, s, pan)
  panelChange.total = panelAggregation(pan, total)
  return panelChange
}
