import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shopdata/shopdata.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart)]);
}
