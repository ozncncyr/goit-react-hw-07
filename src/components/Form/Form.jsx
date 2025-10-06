import React from "react";
import style from "./Form.module.css";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/reducers/contactsSlice";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.css";

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const validationScheme = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{7}$/, "Number must be exactly 7 digits")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  return (
    <div className={style.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationScheme}
        onSubmit={(values, { resetForm }) => {
          const isDuplicate = contacts.some(
            (contact) =>
              contact.name.toLowerCase() === values.name.toLowerCase() ||
              contact.number === values.number
          );
          if (isDuplicate) {
            iziToast.error({
              title: "Error",
              message: "This contact already exists!",
              position: "topRight",
              timeout: 3000,
            });
            return;
          }
          dispatch(
            addContact({
              id: nanoid(),
              name: values.name,
              number: values.number,
            })
          );
          resetForm();
          iziToast.success({
            title: "Success",
            message: `Contact "${values.name}" has been added`,
            position: "topRight",
            timeout: 3000,
          });
        }}
      >
        {({ handleSubmit }) => (
          <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.inputRow}>
              <div className={style.fieldWrapper}>
                <label className={style.label}>Name</label>
                <Field className={style.input} name="name" type="text" />
              </div>
              <ErrorMessage
                name="name"
                component="div"
                className={style.error}
              />
            </div>

            <div className={style.inputRow}>
              <div className={style.fieldWrapper}>
                <label className={style.label}>Number</label>
                <Field className={style.input} name="number" type="tel" />
              </div>
              <ErrorMessage
                name="number"
                component="div"
                className={style.error}
              />
            </div>

            <button className={style.button} type="submit">
              Add contact
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
