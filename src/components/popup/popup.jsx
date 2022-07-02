import React from "react";
import { memo } from "react";
import "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundColor: "#F4F7FF",
  },
  image: {
    backgroundColor: "#F4F7FF",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    alignItems: "center",
  },
  greyText: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "21px",
    textAlign: "left",
    color: "rgba(0, 0, 0, 0.4)",
  },
  inputFields: {
    boxSizing: "border-box",
    size: "small",
    borderRadius: "5px",
  },
  circularButton: {
    padding: "10px 40px",

    background: "#0D0D2B",
    borderRadius: "50px",

    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "14px",
    color: "#ffffff",
  },
  gridItems: {
    margin: "5px, 5px",
  },
  cards: {
    width: "412px",
    height: "auto",
    margin: "auto",
    padding: "20px",
    flexDirection: "column",
    background: "#FFFFFF",
    borderRadius: "10px",
  },
  links: {
    textDecoration: "none",
    color: "#0D0D2B",
  },
}));
const Popup = ({ AutherID, setHandlePopup }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const addBookForm = () => {
    if (AutherID.addbook === true) {
      return (
        <Formik
          initialValues={{
            name: "",
            price: "",
            publish: "",
          }}
          onSubmit={async (values) => {
   
            dispatch({
              type: "ADD_BOOK",
              payload: { ...values, author: AutherID.id }
            });
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Required"),

            publish: Yup.string().required("Required"),
            price: Yup.string().required("Required"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,

              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <Typography className={classes.greyText}>name</Typography>
                <TextField
                  className={classes.inputFields}
                  variant="outlined"
                  margin="normal"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  id="name"
                  fullWidth
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
                <Typography className={classes.greyText}>Price</Typography>
                <TextField
                  size="small"
                  className={classes.inputFields}
                  variant="outlined"
                  margin="normal"
                  id="price"
                  type="number"
                  fullWidth
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.price && touched.price && (
                  <div className="input-feedback">{errors.price}</div>
                )}
                <Typography className={classes.greyText}>publish on</Typography>
                <TextField
                  size="small"
                  className={classes.inputFields}
                  variant="outlined"
                  margin="normal"
                  id="publish"
                  type="datetime-local"
                  fullWidth
                  value={values.publish}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.publish && touched.publish && (
                  <div className="input-feedback">{errors.publish}</div>
                )}
                <Button
                  variant="contained"
                  className={classes.circularButton}
                  type="submit"
                  style={{ display: "block", margin: "40px auto" }}
                >
                  Submit
                </Button>
              </form>
            );
          }}
        </Formik>
      );
    } else {
      return (
        <Formik
          initialValues={{
            name: "",
            age: "",
            dob: "",
          }}
          onSubmit={async (values) => {
            dispatch({ type: "ADD_AUTHOR", payload: values });
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("Required"),
            age: Yup.string().required("Required"),
            dob: Yup.string().required("Required"),
          })}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,

              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
            } = props;
            return (
              <form onSubmit={handleSubmit}>
                <Typography className={classes.greyText}>name</Typography>
                <TextField
                  className={classes.inputFields}
                  variant="outlined"
                  margin="normal"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size="small"
                  id="name"
                  fullWidth
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
                <Typography className={classes.greyText}>Age</Typography>
                <TextField
                  size="small"
                  className={classes.inputFields}
                  variant="outlined"
                  margin="normal"
                  id="age"
                  type="number"
                  fullWidth
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.age && touched.age && (
                  <div className="input-feedback">{errors.age}</div>
                )}
                <Typography className={classes.greyText}>DOB</Typography>
                <TextField
                  size="small"
                  className={classes.inputFields}
                  variant="outlined"
                  margin="normal"
                  id="dob"
                  type="datetime-local"
                  fullWidth
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.dob && touched.dob && (
                  <div className="input-feedback">{errors.dob}</div>
                )}
                <Button
                  variant="contained"
                  className={classes.circularButton}
                  type="submit"
                  style={{ display: "block", margin: "40px auto" }}
                >
                  Submit
                </Button>
              </form>
            );
          }}
        </Formik>
      );
    }
  };

  return (
    <div className="model">
      <div className="close" onClick={() => setHandlePopup(false)}>
        X
      </div>

      {addBookForm()}
    </div>
  );
};
export default memo(Popup);
