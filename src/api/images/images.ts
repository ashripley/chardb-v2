import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../services/firebase.config';
import { ImagesDefinition } from './imagesDefinition';
import { setImages } from '../../redux/root';

export const allImages = async (dispatch: Dispatch<UnknownAction>) => {
  const docRef = doc(firestore, 'images', 'data');
  const docSnap = await getDoc(docRef);

  const response = docSnap.data() || {};

  const imagesToDispatch: ImagesDefinition[] = Object.values(response);

  dispatch(setImages(imagesToDispatch));
};
