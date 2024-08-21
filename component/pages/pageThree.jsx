import React from "react";

function pageThree({ formData, setFormData, prevStep, handleSubmit, errors }) {
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
  const [errors, setErrors] = React.useState({});
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit}>
        <div>
          <label
            className="block text-lg font-medium text-gray-700 mb-1"
            htmlFor="userName"
          >
            Username
          </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.userName && (
            <div className="text-red-500 text-sm">{errors.userName}</div>
          )}
        </div>

        <div>
          <label
            className="block text-lg font-medium text-gray-700 mb-1"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <div className="text-red-500 text-sm">{errors.password}</div>
          )}
        </div>
      </form>

      <button
        type="button"
        onClick={prevStep}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
      >
        Prev
      </button>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
}

export default pageThree;
