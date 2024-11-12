import React, { createContext, useState, useContext, useEffect } from 'react';

// Create a Context for userId
const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  // Initialize the state from localStorage if available, otherwise default to false
  const [userId, setUserId] = useState(() => {
    const savedUserId = localStorage.getItem('userId');
    return savedUserId ? JSON.parse(savedUserId) : false; // Parse to boolean or default to false
  });

  // Update localStorage whenever userId changes
  useEffect(() => {
    if (userId !== false) {
      localStorage.setItem('userId', JSON.stringify(userId));
    }
  }, [userId]);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};
