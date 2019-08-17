//retorna un reducer
import { handleActions } from "redux-actions";

// como crear un reducer con la libreria redux-action

export default handleActions(
  {
    //action
    action1: (state, action) => {},
    action2: (state, action) => {}
    //inicialization state
  },
  []
);
