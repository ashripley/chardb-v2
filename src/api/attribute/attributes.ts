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
import { notifications } from '@mantine/notifications';
import { upperCaseFirst } from '../../helpers/upperCaseFirst';
import { AttributeDefinition } from './attributeDefinition';
import { setAttributes } from '../../redux/root';

export const allAttributes = async (dispatch: Dispatch<UnknownAction>) => {
  const docRef = doc(firestore, 'attributes', 'data');
  const docSnap = await getDoc(docRef);

  const response = docSnap.data() || {};

  const attributesToDispatch: AttributeDefinition[] = Object.values(response);

  dispatch(setAttributes(attributesToDispatch));
};

// export const allAttributes = async (dispatch: Dispatch<UnknownAction>) => {
//   try {
//     const docRef = doc(firestore, 'attributes', 'data');
//     const docSnap = await getDoc(docRef);
//     const fetchedAttributes = docSnap.data() || {};

//     const res = Object.values(fetchedAttributes);

//     const attributes = res.reduce((acc, att) => {
//       const { attribute, name, ...rest } = att;

//       if (!acc[attribute]) {
//         acc[attribute] = [{ name, attribute, ...rest }];
//       } else {
//         acc[attribute].push({ name, attribute, ...rest });
//       }

//       return acc;
//     }, {});

//     dispatch(setAttributes({ isCreate: false, ...attributes }));
//   } catch (error) {
//     throw new Error(`Error fetching attributes: ${error}`);
//   }
// };

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
    // Remove the field in the data document that matches the name passed in
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
