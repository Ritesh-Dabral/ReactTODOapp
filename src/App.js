import React,{useReducer} from 'react';
import Login from './component/Login/login';
import Signup from './component/Signup/signup';
import Todos from './component/Todo/todos';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

export const UserContext = React.createContext();

const initialState = {
  isUser:false,
  uid:'',
  email:''
}
const reducer = (state,action)=>{
  switch(action.type){
    case 'LOGIN': return {
      ...state,
      isUser: true
    }
    case 'LOGOUT': return {
      isUser:true,
      uid:'',
      email:''
    }

    default: return state
  }
}

function App(){

  const [userDet,dispatch] = useReducer(reducer,initialState);

  // console.log("userdata",userDet);

  return (
    <UserContext.Provider value={{userState:userDet, userFunc:dispatch}}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/"><Redirect to="/login"/></Route>
            <Route exact path="/login" component>
              <Login/>
            </Route>
            <Route exact path="/todo/:id">
              {
                userDet.isUser ? <Todos uid={userDet.uid}/> : <Redirect to="/login" />
              }
            </Route>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="*"><Redirect to="/login"/></Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );

}

export default App;
