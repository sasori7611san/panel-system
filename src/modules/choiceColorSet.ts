import { COLORS } from './enums'
import { ColorType } from './types'

// 色の選択（num:色番号）
export const choiceColorSet = (num: number): ColorType => {
  // パネル集計用変数
  const colorType: ColorType = {
    colorNum: 0,
    colorStr: '灰'
  }
  switch (num) {
    case 2:
      colorType.colorNum = COLORS.RED
      colorType.colorStr = '赤'
      break
    case 3:
      colorType.colorNum = COLORS.GREEN
      colorType.colorStr = '緑'
      break
    case 4:
      colorType.colorNum = COLORS.WHITE
      colorType.colorStr = '白'
      break
    case 5:
      colorType.colorNum = COLORS.BLUE
      colorType.colorStr = '青'
      break
    case 1:
      colorType.colorNum = COLORS.YELLOW
      colorType.colorStr = '黄'
      break
    default:
      colorType.colorNum = COLORS.GRAY
      colorType.colorStr = '灰'
      break
  }
  return colorType
}
