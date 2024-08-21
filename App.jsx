import React from "react";
import { useState } from "react";
import "./App.css";
// import MergePage from "./MergePage";
import MultiStepForm from "./StepsForm";

function App() {
  // <MergePage />;
  <MultiStepForm />;
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
            Step {step}
          </h2>
          <div className="space-y-6">
            {step === 1 && (
              <pageOne
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}
            {step === 2 && (
              <pageTwo
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}
            {step === 3 && (
              <pageThree
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}
          </div> }
          {/* Buttons */}
          {<div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                className="bg-gray-300 px-6 py-2 rounded-lg text-gray-700 hover:bg-gray-400"
                type="button"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            )}
            {step < 3 && (
              <button
                className="bg-blue-500 px-6 py-2 rounded-lg text-white hover:bg-blue-600"
                type="button"
                onClick={() => setStep(step + 1)}
              >
                Next
              </button>
            )}
            {step === 3 && (
              <button
                className="bg-green-500 px-6 py-2 rounded-lg text-white hover:bg-green-600"
                type="submit"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
