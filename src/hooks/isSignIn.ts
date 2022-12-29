import {useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from '../utils/firebase';

const useIsSignedIn = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
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
