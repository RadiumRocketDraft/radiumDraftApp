import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

type CallbackOrObserver<T extends (...args: any[]) => any> = T | {next: T};

export const getCurrentFirebaseToken = async (
  forceRefresh = false,
): Promise<string> => {
  const token = await auth().currentUser?.getIdToken(forceRefresh);
  return token || '';
};

export const getCurrentFirebaseUid = () => auth().currentUser?.uid;

export const signIn = (email: string, password: string) => {
  return auth().signInWithEmailAndPassword(email, password);
};

export const logOut = () => {
  return auth().signOut();
};

export const signUp = (email: string, password: string) => {
  return auth().createUserWithEmailAndPassword(email, password);
};

export const onAuthStateChanged = (
  cb: CallbackOrObserver<FirebaseAuthTypes.AuthListenerCallback>,
) => {
  return auth().onAuthStateChanged(cb);
};
