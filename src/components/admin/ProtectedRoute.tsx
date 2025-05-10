
import { ReactNode, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from '@/data/auth';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const isAuth = isAuthenticated();

  useEffect(() => {
    // Verificação adicional de autenticação quando o componente é montado
    if (!isAuth) {
      console.log('Acesso não autorizado detectado');
    }
  }, [isAuth]);

  if (!isAuth) {
    // Redireciona para a página de login se não estiver autenticado
    return <Navigate to="/adm/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
