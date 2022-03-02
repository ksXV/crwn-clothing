import ShopActionsTypes from "./shopdata.types";

import {
  database,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { collection, onSnapshot } from "firebase/firestore";

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsStart = () => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsFailed = (error) => ({
  type: ShopActionsTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = collection(database, "collections");
    dispatch(fetchCollectionsStart());
    onSnapshot(
      collectionRef,
      async (snapshot) => {
        const collectionMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionMap));
      },
      (error) => dispatch(fetchCollectionsFailed(error.message))
    );
  };
};
