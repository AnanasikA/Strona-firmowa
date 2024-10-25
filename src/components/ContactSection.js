import React, { useState } from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from 'react-icons/ai';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Proszę podać imię.';
    if (!formData.email) errors.email = 'Proszę podać email.';
    if (!formData.message) errors.message = 'Proszę wpisać wiadomość.';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted successfully:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <section id="contact" className="p-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">
        Skontaktuj się z nami
      </h2>

      {/* Formularz kontaktowy */}
      <form
        className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-xl"
        onSubmit={handleSubmit}
        aria-labelledby="contact-form-title"
      >
        <label htmlFor="name" className="sr-only">Twoje imię</label>
        <input
          id="name"
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          type="text"
          name="name"
          placeholder="Twoje imię"
          value={formData.name}
          onChange={handleChange}
          aria-required="true"
        />
        {errors.name && <p className="text-red-500 text-sm mb-2" aria-live="polite">{errors.name}</p>}

        <label htmlFor="email" className="sr-only">Twój email</label>
        <input
          id="email"
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          type="email"
          name="email"
          placeholder="Twój email"
          value={formData.email}
          onChange={handleChange}
          aria-required="true"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2" aria-live="polite">{errors.email}</p>}

        <label htmlFor="message" className="sr-only">Twoja wiadomość</label>
        <textarea
          id="message"
          className="w-full p-3 mb-4 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
          name="message"
          placeholder="Twoja wiadomość"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          aria-required="true"
        />
        {errors.message && <p className="text-red-500 text-sm mb-2" aria-live="polite">{errors.message}</p>}

        <button
          className="w-full px-8 py-3 bg-transparent border-2 border-yellow-500 text-yellow-500 rounded-full hover:bg-yellow-500 hover:text-white transition-all duration-300 ease-in-out"
          type="submit"
          aria-label="Wyślij wiadomość do zespołu"
        >
          Wyślij wiadomość
        </button>
      </form>

      {/* Sekcja z informacjami kontaktowymi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <AiOutlineHome size={36} className="text-yellow-500" aria-hidden="true" />
          <div>
            <p className="text-lg font-semibold">Adres:</p>
            <p className="text-sm text-gray-300">1234 Ulica Główna, Warszawa, Polska</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <AiOutlinePhone size={36} className="text-yellow-500" aria-hidden="true" />
          <div>
            <p className="text-lg font-semibold">Telefon:</p>
            <p className="text-sm text-gray-300">+48 123 456 789</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <AiOutlineMail size={36} className="text-yellow-500" aria-hidden="true" />
          <div>
            <p className="text-lg font-semibold">Email:</p>
            <p className="text-sm text-gray-300">kontakt@twojafirma.pl</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

