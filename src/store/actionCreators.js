import {SEARCH_BLUR, SEARCH_FOCUS} from "./actionTypes";

export const searchFocus = () => ({
  type: SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: SEARCH_BLUR
});