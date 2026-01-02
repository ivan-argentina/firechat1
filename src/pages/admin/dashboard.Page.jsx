import { useActionData } from "react-router";
import { useAuth, useUser } from "reactfire";

const DasboardPage = () => {
const auth = useAuth()
const {data: user} = useUser()

console.log('hola')
  return <div>
    <h1>DashboardPage</h1>
    <p>Welcome,{user?.displayName || "Guest"}</p>
    <p>Email: {user?.email || 'Not Provided'}</p>
    <button onClick={() => auth.signOut}>Sign Out</button>
    </div>;
};

export default DasboardPage;
