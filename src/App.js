import './App.css';
import { useEffect } from 'react';
import Login from './Login';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './Home';
import SignUp from './SignUp';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"

function App() {

  const [{user},dispatch] = useStateValue();
useEffect(()=> {
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch({
        type:'SET_USER',
        user:authUser,
      });
    }
    else{
      dispatch({
        type:'SET_USER',
        user:null,
      });
    }
  });

    

}
,[]);
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/user' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<SignUp />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
