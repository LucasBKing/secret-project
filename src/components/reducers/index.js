import { combineReducers } from 'redux'
import { themeModeReducer } from './theme_mode_reducer'

export const Reducers = combineReducers({
  themeModeState: themeModeReducer
})
