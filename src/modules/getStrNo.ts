// 縦横各番号からパネル番号を算出し文字列に変換（v:縦番号,s:横番号）
export const getStrNo = (v: number, s: number): string => {
  let panelNum = 0
  panelNum = (v - 1) * 5 + s
  return panelNum.toString()
}
