import React from "react";

function PageOne({ formData, setFormData }) {
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
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container space-y-4">
      <form>
        <label
          className="block text-lg font-medium text-gray-700 mb-1"
          htmlFor="fullName"
        >
          Your Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <br />
        <div>
          <label
            className="block text-lg font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            className="block text-lg font-medium text-gray-700 mb-1"
            htmlFor="dateOfBirth"
          >
            Birthdate
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.dateOfBirth && (
            <div className="text-red-500 text-sm">{errors.dateOfBirth}</div>
          )}
        </div>
      </form>

      <button
        type="button"
        onClick={nextStep}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
}

export default PageOne;
