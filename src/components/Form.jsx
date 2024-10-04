import React from 'react';

function Form() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        name="contact v1" // Ensure the form name matches the hidden form in index.html
        method="POST"
        data-netlify="true" // Enable Netlify form handling
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        {/* Hidden input to identify the form for Netlify */}
        <input type="hidden" name="form-name" value="contact v1" />

        {/* First Name input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            First Name
            <br />
            <input
              type="text"
              name="first-name"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
            <br />
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>

        {/* Message textarea */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
            <br />
            <textarea
              name="message"
              rows="4"
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </label>
        </div>

        {/* Submit button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-all"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
