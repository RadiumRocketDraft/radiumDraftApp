import {useEffect, useState} from 'react';
import {onAuthStateChanged} from '../utils';

const useIsSignedIn = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async user => {
      if (user) {
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
