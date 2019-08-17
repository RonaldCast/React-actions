//nos permite crear una nueva accion
import { createAction } from "redux-actions";

export const action1 = createAction("action1");
export const action2 = createAction("action2");

//cualquier cosa que se le pase a los action
// al invocarlo es el payload
//otra firma de aplicacines
/*
export const action2 = createAction("action2", (a,b,c,d) => {
   //todo lo que se retorne va a ser payload 
  
    {
      type:action2,
      payload: 10
    }
   
   return 10
})

action1(1,2,3,4) 
*/
