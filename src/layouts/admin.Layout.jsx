import { Navigate, Outlet } from "react-router";
import { useSigninCheck } from "reactfire";

const AdminLayout = () => {
  const { status, data: signInCheckResult, hasEmitted } = useSigninCheck();

  
  //mostrar el loading mientra se verifica el estado de inicio de sesion
  if (status === "loading" || !hasEmitted) {
    return <div>Loading...</div>;
  }

  //redirigir si el usuario no esta autenticado
  if (status==='success' && !signInCheckResult.signedIn) {
    
      <Navigate
        to="/auth/login"
        replace
      />
    
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
