import {useEffect, useState} from 'react';
import {onAuthStateChanged} from '../utils';
import axiosInterceptors from '../utils/axiosInterceptors';

const useIsSignedIn = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async user => {
      if (user) {
        axiosInterceptors();
        return setIsSignedIn(true);
      } else {
        return setIsSignedIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  return isSignedIn;
};

export default useIsSignedIn;
