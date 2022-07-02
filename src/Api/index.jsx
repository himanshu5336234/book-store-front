import { put } from "redux-saga/effects";
import axios from "axios";

const API = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
const NEW_HOST = "http://localhost:8000";

export function* GetLogin({ payload }) {

  const data = yield fetch(`${NEW_HOST}/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw error;
    });

  if (data.status) {
    localStorage.setItem("Token", data.Token);

    alert(data.message)
    // values.callback();
  }

  yield put({ type: "GOT_LOGIN", data });
}

export function* GetRegistration({ payload }) {
 
  const data = yield fetch(`${NEW_HOST}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
  if (data.status === true) {
    localStorage.setItem("Token", data.Token);
  alert(data.message)
  }

  yield put({ type: "GOT_ADMIN", data });
}

export function* getAuthorData() {
  const token = localStorage.getItem("Token");
  const data = yield fetch(`${NEW_HOST}/auth/author`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + " " + token,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
  yield put({ type: "GOT_AUTHOR", data });
}

export function* addAuthor({ payload }) {
  const token = localStorage.getItem("Token");
  console.log(payload);
  const data = yield fetch(`${NEW_HOST}/auth/author`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + " " + token,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
  console.log(data);
  yield put({ type: "GOT_kjjkAUTHOR", data });
}

export function* addBook({ payload }) {
  const token = localStorage.getItem("Token");

  const data = yield fetch(`${NEW_HOST}/auth/book`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + " " + token,
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
  console.log(data);
  yield put({ type: "GOT_nmAUTHOR", data });
}
export function* getBooks() {
  const token = localStorage.getItem("Token");
  const data = yield fetch(`${NEW_HOST}/auth/book`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + " " + token,
    },
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
  yield put({ type: "GOT_BOOK", data });
}
export function* removebook({ payload }) {

  const token = localStorage.getItem("Token");
  const data = yield fetch(`${NEW_HOST}/auth/book/delete`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + " " + token,
    },
    body: JSON.stringify({ id: payload }),
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
  console.log(data);
  yield put({ type: "GOT_BOOK", data });
}


