import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailed,
} from "./shopdata.actions";
import {
  database,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { collection, getDocs } from "firebase/firestore";

import ShopActionsTypes from "./shopdata.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = collection(database, "collections");
    const snapshot = yield getDocs(collectionRef);
    const collectionMap = yield call(convertCollectionsSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (err) {
    yield put(fetchCollectionsFailed(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
