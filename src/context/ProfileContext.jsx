import { createContext, useContext, useState } from 'react';

const ProfileContext = createContext();

export const useProfile = () => {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfile must be used within ProfileProvider');
  return ctx;
};

export const ProfileProvider = ({ children }) => {
  const [profile, setProfileState] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const urlProfile = params.get('profile');
    if (urlProfile === 'dev' || urlProfile === 'data') return urlProfile;
    return sessionStorage.getItem('profile') || null;
  });

  const setProfile = (p) => {
    setProfileState(p);
    if (p) sessionStorage.setItem('profile', p);
    else sessionStorage.removeItem('profile');
  };

  const resetProfile = () => setProfile(null);

  return (
    <ProfileContext.Provider value={{ profile, setProfile, resetProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
