import { CHANGE_THEME_MODE } from "./actionTypes";

export const changeThemeMode = value => {
  return {
    type: CHANGE_THEME_MODE,
    newValue: value,
  };
};
