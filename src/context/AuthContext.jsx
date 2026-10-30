import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

const AuthContext = createContext(null);
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';
const TOKEN_KEY = 'apniMandiToken';

async function request(path, options = {}) {
  const token = localStorage.getItem(TOKEN_KEY);
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers
    }
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong. Please try again.');
  }
  return data;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      setLoading(false);
      return;
    }

    request('/auth/me')
      .then((data) => setUser(data.user))
      .catch(() => {
        localStorage.removeItem(TOKEN_KEY);
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const register = useCallback(async (formData) => {
    const data = await request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(formData)
    });
    localStorage.setItem(TOKEN_KEY, data.token);
    setUser(data.user);
    setShowLoginModal(false);
    return data.user;
  }, []);

  const login = useCallback(async (credentials) => {
    const data = await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials)
    });
    localStorage.setItem(TOKEN_KEY, data.token);
    setUser(data.user);
    setShowLoginModal(false);
    return data.user;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setUser(null);
    setShowLoginModal(false);
  }, []);

  const requireAuth = useCallback((callback) => {
    if (!user) {
      setShowLoginModal(true);
      return false;
    }
    if (callback) callback();
    return true;
  }, [user]);

  const value = useMemo(() => ({
    user,
    loading,
    register,
    login,
    logout,
    requireAuth,
    showLoginModal,
    setShowLoginModal
  }), [user, loading, register, login, logout, requireAuth, showLoginModal]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
