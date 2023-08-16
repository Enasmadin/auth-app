import { createContext,useContext,useEffect,useState } from "react" ;
import{createUserWithEmailAndPassword, onAuthStateChanged ,signOut,signInWithEmailAndPassword,sendPasswordResetEmail,updateEmail,updatePassword} from "firebase/auth" ;
import auth from "../firebase";

const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState();
    const [Loading ,setLoding] = useState(true);
    

    const SignUp = (email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    };
    const SignIn = (email,password)=>{
       return signInWithEmailAndPassword(auth,email,password);
    }
    const restPasssword = (email)=>{
       return sendPasswordResetEmail(auth,email)
    }
    const LogOut = ()=>{
    return signOut( auth);
    }

   
    const updateEmail = (email) => {
      return updateEmail(auth.currentUser, email);
    };
    const updatePassword = (password) => {
      return updatePassword(auth.currentUser, password);
    };

    useEffect(()=>{
         const unSubsribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
            setLoding(false);
        }); 
        return ()=>{
            unSubsribe()
        }
    },[])

  return (
    <AuthContext.Provider value={{ currentUser,SignUp,LogOut,SignIn ,restPasssword ,updateEmail,updatePassword}}>
    { !Loading && children  }
    </AuthContext.Provider>
  )
}

 export const useAuth =()=>{
    return useContext(AuthContext)
}

export default AuthProvider ;
