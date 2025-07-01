import { COLORS } from './enums'
import { Panel, Total } from './types'

// パネルの集計（panel:対象パネル,total:各色の集計）
  export const panelAggregation = (panel: Panel[][], total: Total): Total => {
  // 各色の枚数を集計の為、初期化
  total.redSheet = 0
  total.greenSheet = 0
  total.whiteSheet = 0
  total.blueSheet = 0
  // for文用変数
  let x
  let y
  // 各色の枚数を集計
  for (x = 0; x <= 6; x++) {
    for (y = 0; y <= 6; y++) {
      switch (panel[x][y].colorNo) {
        case COLORS.RED:
          total.redSheet++
          break
        case COLORS.GREEN:
          total.greenSheet++
          break
        case COLORS.WHITE:
          total.whiteSheet++
          break
        case COLORS.BLUE:
          total.blueSheet++
          break
        default:
          break
      }
    }
  }
  return total
}
