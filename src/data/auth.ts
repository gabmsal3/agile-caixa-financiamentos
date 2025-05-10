
// Credenciais de autenticação
export const ADMIN_USER = 'admin';
export const ADMIN_PASSWORD = 'agile2025';

// Chave para armazenamento local
export const AUTH_STORAGE_KEY = 'agile-admin-auth';

// Funções de autenticação
export const authenticateUser = (username: string, password: string): boolean => {
  return username === ADMIN_USER && password === ADMIN_PASSWORD;
};

export const isAuthenticated = (): boolean => {
  const authData = localStorage.getItem(AUTH_STORAGE_KEY);
  return authData === 'true';
};

export const setAuthenticated = (value: boolean): void => {
  localStorage.setItem(AUTH_STORAGE_KEY, String(value));
};

export const logout = (): void => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};
