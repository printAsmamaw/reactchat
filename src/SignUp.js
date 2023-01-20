import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react'
import { useNavigate,Link} from "react-router-dom"
import { auth } from './firebase';
function SignUp() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate=useNavigate();
       const login=(e)=>{
        e.preventDefault();
        // signInWithEmailAndPassword(auth,email,password).then((user)=>{
        //     if(user){
        //         navigate('/user');
        //         console.log(user);
        //     }
         
        // })
        const user= signInWithEmailAndPassword(auth,email,password);
        if(user){
            navigate('/user');
        }
       }
  return (
    <div className='login'>
       <img className='login__logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvDQhI96KOJP4eaCohSsODK8xtaWhIUbLHFw&usqp=CAU'
       alt='' />
       <div className='login__info'>
        <div className='label'>
            <p>Email</p>
            <input  type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='label'>
            <p>Password</p>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
       
            <button className='button' onClick={login}>login</button>
        <div className='login__button'>
            
            <div className='create__account'>
                <p>have`t account</p>
            </div>
            <div className='with__account'>
               <Link to="/"><p>SignUp</p></Link>
            </div>
        </div>
       </div>
        </div>
  )
}

export default SignUp