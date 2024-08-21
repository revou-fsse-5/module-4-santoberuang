import React from "react";
import { useState } from "react";
import PageOne from "./component/pages/pageOne";
import PageTwo from "./component/pages/pageTwo";
import PageThree from "./component/pages/pageThree";
import validationSchema from "./component/validation";
// import { useState } from 'react'
function MergePage() {
  const [formData, setFormData] = React.useState({
    fullName: "",
    email: "",
    dateOfBirth: "",
    streetAdress: "",
    city: "",
    state: "",
    zipCode: "",
    userName: "",
    password: "",
  });

  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  switch (step) {
    case 1:
      return (
        <PageOne
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          errors={errors}
        />
      );

    case 2:
      return (
        <PageTwo
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
          errors={errors}
        />
      );

    case 3:
      return (
        <PageThree
          formData={formData}
          setFormData={setFormData}
          prevStep={prevStep}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      );
  }

  return <div>MergePage</div>;
}

export default MergePage;
