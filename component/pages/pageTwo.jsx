import React from "react";

function pageTwo({ formData, setFormData, nextStep, prevStep, errors }) {
  const [formData, setFormData, nextStep, prevStep] = React.useState({
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
  const [errors, setErrors] = React.useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-4">
      <form>
        <div>
          <label
            className="block text-lg font-medium text-gray-700 mb-1"
            htmlFor="streetAdress"
          >
            Address
          </label>
          <input
            type="text"
            id="streetAdress"
            name="streetAdress"
            value={formData.streetAdress}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.streetAdress && (
            <div className="text-red-500 text-sm">{errors.streetAdress}</div>
          )}
        </div>

        <div>
          <label
            className="block text-lg font-medium text-gray-700 mb-1"
            htmlFor="city"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.city && (
            <div className="text-red-500 text-sm">{errors.city}</div>
          )}
        </div>

        <div>
          <label
            className="block text-lg font-medium text-gray-700 mb-1"
            htmlFor="state"
          >
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.state && (
            <div className="text-red-500 text-sm">{errors.state}</div>
          )}
        </div>

        <div>
          <label
            className="block text-lg font-medium text-gray-700 mb-1"
            htmlFor="zipCode"
          >
            Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.zipCode && (
            <div className="text-red-500 text-sm">{errors.zipCode}</div>
          )}
        </div>
      </form>

      <button
        type="button"
        onClick={prevStep}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
      >
        {" "}
        Prev{" "}
      </button>
      <button
        type="button"
        onClick={nextStep}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
      >
        {" "}
        Next{" "}
      </button>
    </div>
  );
}

export default pageTwo;
