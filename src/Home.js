import React,{useEffect, useState} from 'react'
import { useStateValue} from "./StateProvider"
import { auth,db } from "./firebase"
import { collection,addDoc,query,where,getDocs} from "firebase/firestore"
function Home() {
  const [userdata,setUsername] = useState(['']);
const [{user},dispatch] = useStateValue();
// const usr=auth.currentUser.uid;
//     const fetchPost = async () => {
       
//         await getDocs(collection(db, "users"), where("username" , "==", "biza"))
//             .then((querySnapshot)=>{               
//                 const newData = querySnapshot.docs
//                     .map((doc) => ({...doc.data(), id:doc.id }));
//                     setUsername(newData);                
//             })
       
//     }
   
//     useEffect(()=>{
//         fetchPost();
//     }, [])


   const fetchData= async ()=>{

    const querySnapshot = await getDocs(query(collection(db, "users"), where("uid", "==",auth.currentUser.uid)));
    // querySnapshot.forEach((doc) => {
         
    //   console.log(doc.id, " => ", doc.data());
    const newData=querySnapshot.docs.map((doc)=>({...doc.data(), id:doc.id}));
    setUsername(newData); 
    // });
   }

  useEffect(()=>{
     
    fetchData();

  },[]);



  return (
    <div className='home'>
      <p>{auth.currentUser.uid}</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
      {
        
        userdata?.map((value,i)=>(
            <p key={i}>
                {value.username}
            </p>
        ))
    }
      </div>
  )
}

export default Home