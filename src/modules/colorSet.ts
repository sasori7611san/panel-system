import { COLORS } from './enums'
import { Panel } from './types'

// パネル色の設定（col:色番号,v:縦番号,s:横番号,panel:使用パネル）
export const colorSet = (col: number, v: number, s: number, panel: Panel[][]): Panel[][] => {
  // パネルに色を反映
  switch (col) {
    case 1:
      panel[v][s].colorNo = COLORS.YELLOW
      break
    case 2:
      panel[v][s].colorNo = COLORS.RED
      break
    case 3:
      panel[v][s].colorNo = COLORS.GREEN
      break
    case 4:
      panel[v][s].colorNo = COLORS.WHITE
      break
    case 5:
      panel[v][s].colorNo = COLORS.BLUE
      break
    default:
      panel[v][s].colorNo = COLORS.GRAY
      break
  }
  return panel
}
