'use client'
import Link from "next/link";
import { useContext } from "react";
import { AuthContext, useUserAuth } from "./_utils/auth-context";

const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();//useContext(AuthContext);
 
    const signIn = async () =>{
        await gitHubSignIn();
    };
    const signOut = async () =>{
        await firebaseSignOut();
    };
 

return (
    <div>
        {user ? (
            <div>
                <p>
                 Welcome, {user.displayName} ({user.email})
                </p>
                <div>
                    <button onClick={signOut}>Logout</button>
                    <Link href="/week-8/shopping-list">
                    <button className="ml-10" >Go to Shopping List</button>
                    </Link>
                </div>    
            </div>
        ) : (
            <button onClick={signIn}>Login</button>
        )}
    </div>
);
}
export default Page;