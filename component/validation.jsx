import React from "react";
import { useFormik } from "formik";
import * as Yup from "Yup";

function ValidationSchema({ formData, handleSubmit }) {
  const formik = useFormik({
    initialValues: formData,
    validationSchema: Yup.object({
      fullName: Yup.string().required("Insert your Name"),
      email: Yup.string()
        .required("Required")
        .email("Please insert correct email address"),
      dateOfBirth: Yup.string().required("Please insert your Tanggal Lahir"),
      streetAdress: Yup.string().required("Please insert your Alamat"),
      city: Yup.string().required("Please insert your Kota"),
      state: Yup.string().required("Please insert your Provinsi"),
      zipCode: Yup.string().required("Please insert your Kode Pos"),
      userName: Yup.string().required("Please insert your Username"),
      password: Yup.string().required("Please insert your Password"),
    }),

    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleChange = (event) => formik.handleChange(event);

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Your form fields here */}
      <input type="text" name="fullName" onChange={handleChange} />
      {errors.fullName && <div>{errors.fullName}</div>}
      {/* More form fields and error messages */}
    </form>
  );
}

export default ValidationSchema;
