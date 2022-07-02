import { put } from "redux-saga/effects";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";
const NEW_HOST = "http://localhost:8000";

export function* getProduct() {
  const data = yield axios
    .get(`${API}`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
  yield put({ type: "GOT_PRODUCT", data });
}

export function* getProductById({ payload }) {
  const data = yield axios
    .get(`${API}/${payload}`)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
  yield put({ type: "GOT_PRODUCT_BY_ID", data });
}

export function* getLogin({ payload }) {
  console.log(payload);

  // const data = yield fetch(`${NEW_HOST}/signin`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // })
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .catch((error) => {
  //     throw error;
  //   });
  // if (data.status) {
  //   localStorage.token = data.token;
  //   localStorage.user = data.id;

  //   // values.callback();
  // }

  // yield put({ type: "GOT_LOGIN", data });
}

export function* getRegistration({ payload }) {
  console.log(payload);
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
    // values.callback();
  }
  console.log(data);
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

export function* addAuthor({payload}) {
  const token = localStorage.getItem("Token");
  console.log(payload)
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
    console.log(data)
  yield put({ type: "GOT_kjjkAUTHOR", data });
}



export function* addBook({payload}) {
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
    console.log(data)
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
export function* removebook({payload}) {
  console.log(payload)
  const token = localStorage.getItem("Token");
  const data = yield fetch(`${NEW_HOST}/auth/book/delete`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer" + " " + token,
    },
    body: JSON.stringify({id:payload})
  })
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      throw error;
    });
    console.log(data)
  yield put({ type: "GOT_BOOK", data });
}
