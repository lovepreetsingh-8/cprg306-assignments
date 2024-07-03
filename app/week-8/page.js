import { useUserAuth } from "./_utils/auth-context";

export default Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
 
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
                <button onClick={signOut}>Logout</button>
                <Link to="/shopping-list">Go to Shopping List</Link>
            </div>
        ) : (
            <button onClick={signIn}>Login</button>
        )}
    </div>
);
}