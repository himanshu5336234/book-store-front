import React, { useEffect } from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Divider } from "@material-ui/core";

// import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";

// // import 'react-toastify/dist/ReactToastify.css';
// import LogoDark2 from "../../assets/img/LogoDark2.png";
// import { isLoggedIn } from "../../utils";

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

export default function Signup({ Signup }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  function API(values) {
    if (Signup === true) {
      dispatch({ type: "REGISTRATION", payload: values });
    } else {
      console.log(values);
      dispatch({ type: "LOGIN", payload: values });
    }
  }

  // if (isLoggedIn()) {
  //     return <Redirect to="/admin/dashboard" />
  // }

  const Title = () => {
    if (Signup === true) {
      return (
        <Typography
          component="h1"
          variant="h5"
          style={{ color: "#0D0D2B", margin: "34px auto", fontWeight: "600" }}
        >
          Registration
        </Typography>
      );
    } else {
      return (
        <Typography
          component="h1"
          variant="h5"
          style={{ color: "#0D0D2B", margin: "34px auto", fontWeight: "600" }}
        >
          Login
        </Typography>
      );
    }
  };

  const LoginForm = ({ errors, values, handleChange, handleBlur, touched }) => {
    if (Signup === true) {
      return (
        <>
          <Typography className={classes.greyText}>Name</Typography>
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
          <Typography className={classes.greyText}>Phone</Typography>
          <TextField
            className={classes.inputFields}
            variant="outlined"
            margin="normal"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            size="small"
            id="phone"
            fullWidth
          />
          {errors.phone && touched.phone && (
            <div className="input-feedback">{errors.phone}</div>
          )}
        </>
      );
    }
  };
  return (
    <Grid
      container
      component="main"
      className={classes.root}
      alignItems="center"
    >
      <CssBaseline />

      <Grid item xs={12} sm={8} md={12}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "200px",
            margin: "10px auto ",
          }}
        >
          {Title()}
        </div>
        <Card className={classes.cards}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirm: "",
              phone: "",
            }}
            onSubmit={async (values) => {
              API(values);
            }}
            validationSchema={Yup.object().shape({
              name: Yup.string().required("Required"),
              email: Yup.string().email().required("Required"),
              password: Yup.string().required("Required"),
              phone: Yup.string().required("Required"),
             
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
                  {LoginForm(props)}
                  <Typography className={classes.greyText}>Email</Typography>
                  <TextField
                    className={classes.inputFields}
                    variant="outlined"
                    margin="normal"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    size="small"
                    id="email"
                    fullWidth
                  />
                  {errors.email && touched.email && (
                    <div className="input-feedback">{errors.email}</div>
                  )}
                  <Typography className={classes.greyText}>Password</Typography>
                  <TextField
                    size="small"
                    className={classes.inputFields}
                    variant="outlined"
                    margin="normal"
                    id="password"
                    type="password"
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.password && touched.password && (
                    <div className="input-feedback">{errors.password}</div>
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
        </Card>

        <Typography
          className={classes.greyText}
          style={{ textAlign: "center" }}
        >
          Having trouble? <br /> Contact our support at <br />
        </Typography>
      </Grid>
    </Grid>
  );
}
