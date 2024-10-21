import {
  deleteField,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import { firestore } from '../../services/firebase.config';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit';
import { upperCaseFirst } from '../../utils/upperCaseFirst';
import { AttributeDefinition } from './attributeDefinition';
import { setAttributes } from '../../redux/root';

export const allAttributes = async (dispatch: Dispatch<UnknownAction>) => {
  const docRef = doc(firestore, 'attributes', 'data');
  const docSnap = await getDoc(docRef);

  const response = docSnap.data() || {};

  const attributesToDispatch: AttributeDefinition[] = Object.values(response);

  dispatch(setAttributes(attributesToDispatch));
};

export const addAttributeMutation = async (attribute: AttributeDefinition) => {
  const uuid = uuidv4();
  const attributeRef = doc(firestore, 'attributes', 'data');

  try {
    // attribute obj to write
    const attributeToAdd = {
      ...attribute,
      id: uuid,
    };

    // write to db
    setDoc(
      attributeRef,
      { [attributeToAdd.id]: { ...attributeToAdd } },
      { merge: true }
    );

    notifications.show({
      title: 'Successfully Created!',
      message: `${upperCaseFirst(
        attribute.name
      )} has successfully been created. Please see your attribute in the Gallery and Studio.`,
      color: 'lime',
    });
  } catch (error) {
    notifications.show({
      title: 'Error Creating Attribute!',
      message: 'Please check the attribute details and try again.',
      color: 'red',
    });
    throw new Error(`Error adding attribute to db: ${error}`);
  }
};

export const deleteAttributeMutation = async (attributeId: string) => {
  const attributeRef = doc(firestore, 'attributes', 'data');

  // remove attribute from db
  try {
    await updateDoc(attributeRef, {
      [attributeId]: deleteField(),
    });

    notifications.show({
      title: 'Successfully Deleted!',
      message: `${upperCaseFirst(attributeId)} has successfully been deleted.`,
      color: 'lime',
    });
  } catch (error) {
    notifications.show({
      title: 'Error Deleting Attribute!',
      message: 'Please check the attribute details and try again.',
      color: 'red',
    });
    throw new Error(`Error removing attribute from db: ${error}`);
  }
};
