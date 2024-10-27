'use client';
import { useState } from 'react';
import CalendlyWidget from '../components/CalendlyWidget';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    requirements: '',
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', budget: '', requirements: '' });
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact-form"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="max-w-lg mr-4 max-h-full">
          <h2 className="text-gray-600 text-3xl font-bold text-center ">
            Need a custom solution for your business?
          </h2>
          <div className="py-4">
            <CalendlyWidget />
          </div>
        </div>

        <div className="card bg-base-100 p-6 shadow-xl">
          <div>
            <h3 className="text-gray-600 text-2xl font-bold text-center ">
              Leave me a message
            </h3>
            <p className="text-center mb-12">I will get back to you shortly</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-end px-4"
          >
            <div className="container mx-auto flex flex-col gap-4">
              <label className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered rounded-md"
                />
              </label>
              <label className="form-control">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input input-bordered rounded-md"
                />
              </label>
              <label className="form-control">
                <input
                  type="number"
                  name="budget"
                  placeholder="Your budget in USD"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="input input-bordered rounded-md"
                />
              </label>
              <label className="form-control">
                <textarea
                  name="requirements"
                  className="textarea textarea-bordered h-24 rounded-md text-base"
                  placeholder="Share your requirements"
                  required
                  value={formData.requirements}
                  onChange={handleChange}
                ></textarea>
              </label>
            </div>
            <div className="w-full flex flex-col items-end gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary text-gray-700 transition duration-300"
              >
                {status === 'sending' ? 'Sending...' : 'Send'}
              </button>

              {status === 'success' && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600">
                  Failed to send message. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
