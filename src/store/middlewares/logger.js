export const logger= store=>{
    return next=>{
        return action=>{
              //console.log("My logger middleware: Dispatching ===>", action);
              //console.log("My logger middleware: Stae before ", store.getState());
              const result = next(action);
              //console.log("My logger middleware: Stae AFTER ", store.getState());
              return result;

        }
    }
}