
import { useState, useCallback, useEffect } from 'react';
import { 
  isAuthenticated, 
  setAuthenticated,
  authenticateUser,
  logout
} from '@/data/auth';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(isAuthenticated());
  const navigate = useNavigate();

  useEffect(() => {
    // Update auth state when it changes
    setIsAuth(isAuthenticated());
  }, []);

  const signIn = useCallback((username: string, password: string): boolean => {
    const result = authenticateUser(username, password);
    if (result) {
      setAuthenticated(true);
      setIsAuth(true);
    }
    return result;
  }, []);

  const signOut = useCallback(() => {
    logout();
    setIsAuth(false);
    navigate('/adm/login');
  }, [navigate]);

  return {
    isAuth,
    signIn,
    signOut
  };
};
