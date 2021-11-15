# Basic Todo Application with Redux Toolkit


### How does todoSlice work? 

In the todoSlice, a thunk is created. 
The thunk gets called by the components. 
The component dispatches the getTodosAsync action that is created by the thunk. 
If the response to the server is ok, the thunk will convert the response into JSON,
store it in a variable, 
and return the todos object. 


