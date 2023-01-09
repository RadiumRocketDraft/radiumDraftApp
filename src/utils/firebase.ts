import auth, {firebase, FirebaseAuthTypes} from '@react-native-firebase/auth';

type CallbackOrObserver<T extends (...args: any[]) => any> = T | {next: T};

export const getCurrentFirebaseToken = async (
  forceRefresh = false,
): Promise<string> => {
  const token = await auth().currentUser?.getIdToken(forceRefresh);
  return token || '';
};

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

var user = auth().currentUser;
console.log(user);
var credential = firebase.auth.EmailAuthProvider.credential(user.email, '');

export const changePass = (newPassword: string) => {
  user.reauthenticateWithCredential(credential);
  try {
    auth().currentUser?.updatePassword(newPassword);
  } catch (error) {
    console.log('errorazo', error);
  }
};
