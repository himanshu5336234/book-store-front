import * as Users from "../Api/index";
import { takeLatest, takeEvery, all } from "redux-saga/effects";



function* userActionWatcher() {
 yield takeLatest("GET_BOOKS", Users.getBooks);
 yield takeLatest("REGISTRATION", Users.GetRegistration);
 yield takeLatest("LOGIN", Users.GetLogin);
 yield takeLatest("GET_AUTHOR_DATA", Users.getAuthorData);
 yield takeLatest("ADD_AUTHOR", Users.addAuthor);
 yield takeLatest("ADD_BOOK", Users.addBook);
 yield takeLatest("REMOVE_BOOK", Users.removebook);
}













export default function* rootSaga() {
  yield all([
    userActionWatcher()
  ]);
}
