import {useEffect, useState} from 'react';
import ImagePicker, {Image} from 'react-native-image-crop-picker';
import {getCurrentFirebaseUid} from 'utils';
import storage from '@react-native-firebase/storage';
import {useDispatch} from 'react-redux';
import {updatePlayer} from 'store/modules/player';

const useFirebaseStorage = (asset?: Image | string) => {
  const [isUploading, setIsUploading] = useState(false);
  const [storageError, setStorageError] = useState<string>();
  const [imageUrl, setImageUrl] = useState<string>();
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const uri = asset && (typeof asset === 'string' ? asset : asset.path);
    if (!uri) return;

    const firebaseUid = getCurrentFirebaseUid();

    setIsUploading(true);

    const bucketRef = storage().ref(`players/${firebaseUid}/profile-picture`);
    const task = bucketRef.putFile(uri);

    task.on('state_changed', snapshot => {
      setProgress(
        Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000,
      );
    });

    task.then(async () => {
      const getImageUrl = await bucketRef.getDownloadURL();
      setImageUrl(getImageUrl);
      dispatch(updatePlayer({profileImage: getImageUrl}));
      setIsUploading(false);
    });

    task.catch(err => {
      setStorageError(err.name + ': ' + err.message);
      setIsUploading(false);
    });

    return () => {
      ImagePicker.clean();
    };
  }, [asset, dispatch]);

  return {progress, isUploading, storageError, imageUrl};
};

export default useFirebaseStorage;
