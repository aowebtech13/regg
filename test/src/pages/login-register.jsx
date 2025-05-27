import {useState} from "react";
import {motion} from "framer-motion";

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                >
                    <div className="w-full max-w-sm shadow-lg rounded-2xl p-6 bg-white">
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                            {isLogin ? "Login" : "Register"}
                        </h2>
                        <form className="space-y-4">
                            {
                                !isLogin &&(
                                    
                                    <input type="text" placeholder="Enter FullName" className="w-full p-2 border rounded" required />
                                    
                                )
                            }
     <input type="email" placeholder="Enter Email" className="w-full p-2 border rounded" required />
        
  <input type="text" placeholder="Enter Username" className="w-full p-2 border rounded" required />
          <input type="password" placeholder="Enter Password" className="w-full p-2 border rounded" required />
          <button className="w-full bg-blue-500 text-white p-2 rounded">
            
            {isLogin ? "Login" : "Register"}
          </button>
                        </form>
                        <p className="text-sm text-center mt-4">
                            {isLogin ? "Don't have an account?" : "Already have an account"}
                            <button onClick={() => setIsLogin(isLogin)} className="text-blue-500 font-semibold ml-1">
                                {isLogin ? "Register" : "Login"}
                            </button>
                        </p>
                    </div>
            </motion.div>
        </div> 
    )
}