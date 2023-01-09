import {useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';
import {authIsCreatingAccount} from 'store/modules/auth';
import {axiosInterceptors, onAuthStateChanged} from 'utils';

const useIsSignedIn = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>();
  const isCreatingAccount = useSelector(authIsCreatingAccount);

  const unsubscribeRef = useRef<() => void>();

  useEffect(() => {
    if (unsubscribeRef.current) unsubscribeRef.current();
    unsubscribeRef.current = onAuthStateChanged(async user => {
      if (user) {
        axiosInterceptors();
        if (isCreatingAccount) return;
        return setIsSignedIn(true);
      } else {
        return setIsSignedIn(false);
      }
    });
    return () => unsubscribeRef.current?.();
  }, [isCreatingAccount]);

  return isSignedIn;
};

export default useIsSignedIn;
