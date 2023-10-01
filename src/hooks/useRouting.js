import { useState } from 'react';

const useRouting = () => {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);

  const navigateTo = (path) => {
    window.history.pushState(null, null, path);
    setCurrentRoute(path);
  };

  return {
    currentRoute,
    navigateTo,
  };
};

export default useRouting;
