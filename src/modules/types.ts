// Panel型の定義
export type Panel = {
  colorNo: number;
  check: boolean;
  condition: number;
}
// パネル枚数合計型の定義
export type Total = {
  redSheet: number;
  greenSheet: number;
  whiteSheet: number;
  blueSheet: number;
}
// 色のデータ型定義
export type ColorType = {
  colorNum: number;
  colorStr: string;
}
// パネル結果型定義
export type PanelChange = {
  panel: Panel[][];
  total: Total;
}
// UNDO用に保存する状態
export type UndoState = {
  panel: Panel[][];
  total: Total;
  colorNum: number;
  colorStr: string;
}
