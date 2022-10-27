import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute(props: any) {
  const isAuth = false;
  return isAuth ? <Outlet /> : <Navigate to='/login' />
}

export default ProtectedRoute