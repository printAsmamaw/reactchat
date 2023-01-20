import React,{useEffect,useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate,Link} from "react-router-dom"
import "./Login.css"
import { useStateValue} from "./StateProvider"
import { auth,db } from "./firebase"
import { collection,addDoc} from "firebase/firestore"
function Login() {
    const [{user} ,dispatch] = useStateValue();
    const [username,setusername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate=useNavigate();

       const register= async (e)=>{
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "users"), {
              username:username,
              uid:user,
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        createUserWithEmailAndPassword(auth,email,password).then((user)=>{
            if(user){
                navigate('/user');
              
            }
         
        })
       

       }
       

       

  return (
    <div className='login'>
       <img className='login__logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDQhI96KOJP4eaCohSsODK8xtaWhIUbLHFw&usqp=CAU'
       alt='' />
       <div className='login__info'>
        <div className='label'>
            <p>User Name</p>
            <input type="text" value={username} onChange={(e)=>setusername(e.target.value)}/>
        </div>
        <div className='label'>
            <p>Email</p>
            <input  type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='label'>
            <p>Password</p>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
       
            <button className='button' onClick={register}>Register</button>
        <div className='login__button'>
            
            <div className='create__account'>
                <p>have account</p>
            </div>
            <div className='with__account'>
               <Link to="/login"><p>login</p></Link>
            </div>
        </div>
       </div>
        </div>
  )
}

export default Login