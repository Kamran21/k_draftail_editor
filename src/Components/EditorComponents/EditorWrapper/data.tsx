// @ts-ignore
import { BLOCK_TYPE, INLINE_STYLE, ENTITY_TYPE } from "draftail";

export const blockTypes = [
  { type: BLOCK_TYPE.UNSTYLED },
  { type: BLOCK_TYPE.HEADER_ONE },
  { type: BLOCK_TYPE.HEADER_TWO },
  { type: BLOCK_TYPE.HEADER_THREE },
  { type: BLOCK_TYPE.HEADER_FOUR },
  { type: BLOCK_TYPE.HEADER_FIVE },
  { type: BLOCK_TYPE.HEADER_SIX },
  { type: BLOCK_TYPE.UNORDERED_LIST_ITEM },
  { type: BLOCK_TYPE.ORDERED_LIST_ITEM },
  { type: BLOCK_TYPE.BLOCKQUOTE },
  { type: BLOCK_TYPE.CODE },
  { type: BLOCK_TYPE.ATOMIC }
];

export const inlineStyles = [
  { type: INLINE_STYLE.BOLD },
  { type: INLINE_STYLE.ITALIC },
  { type: INLINE_STYLE.CODE },
  { type: INLINE_STYLE.UNDERLINE },
  { type: INLINE_STYLE.STRIKETHROUGH },
  { type: INLINE_STYLE.MARK },
  { type: INLINE_STYLE.QUOTATION },
  { type: INLINE_STYLE.SMALL },
  { type: INLINE_STYLE.SAMPLE },
  { type: INLINE_STYLE.INSERT },
  { type: INLINE_STYLE.DELETE },
  { type: INLINE_STYLE.KEYBOARD },
  { type: INLINE_STYLE.SUPERSCRIPT },
  { type: INLINE_STYLE.SUBSCRIPT }
];

export const entityTypes = [
  { type: ENTITY_TYPE.LINK },
  { type: ENTITY_TYPE.IMAGE },
  { type: ENTITY_TYPE.HORIZONTAL_RULE }
];
