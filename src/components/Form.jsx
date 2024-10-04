import React from 'react';

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission (reload)
    const form = event.target;

    // Alert confirmation
    alert('Form submitted successfully');

    // Programmatically submit the form to Netlify
    const formData = new FormData(form); 
    fetch('/', {
      method: 'POST',
      body: formData,
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => console.error('Form submission error', error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onSubmit={handleSubmit} // Call handleSubmit on form submission
      >
        {/* Hidden input to identify Netlify form */}
        <input type="hidden" name="form-name" value="contact" />

        <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>

        {/* Name input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Message textarea */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
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
