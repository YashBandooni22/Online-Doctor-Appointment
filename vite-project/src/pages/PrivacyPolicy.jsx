import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="md:mx-10 my-16 text-gray-900">
      <h1 className="text-3xl font-medium mb-5">Privacy Policy</h1>
      <p><strong>Effective Date:  </strong>  [ October 6, 2024.]</p>

      <section className="my-5">
        <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
        <p>We collect personal information such as your name, email, phone number, and appointment details to manage bookings and improve our services. We also collect technical data like your IP address for analytics.</p>
      </section>

      <section className="my-5">
        <h2 className="text-2xl font-semibold mb-3">2. How We Use Your Information</h2>
        <p>We use your information to facilitate doctor appointments, send notifications, and enhance user experience. Your data is shared with healthcare providers and service vendors but never sold or rented.</p>
      </section>

      <section className="my-5">
        <h2 className="text-2xl font-semibold mb-3">3. Data Security</h2>
        <p>We take reasonable measures to protect your data, but no method is 100% secure. By using our app, you acknowledge this risk.</p>
      </section>

      <section className="my-5">
        <h2 className="text-2xl font-semibold mb-3">4. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. You can also request to restrict the processing of your information, subject to legal exceptions.</p>
      </section>

      <section className="my-5">
        <h2 className="text-2xl font-semibold mb-3">5. Cookies</h2>
        <p>Our app uses cookies to enhance functionality and gather analytics. You can disable cookies in your browser settings, but this may limit app functionality.</p>
      </section>

      <section className="my-5">
        <h2 className="text-2xl font-semibold mb-3">6. Updates to the Policy</h2>
        <p>We may update this policy periodically. Changes will be posted on this page.</p>
      </section>

      <section className="my-5">
        <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Name:</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="Your name" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email:</label>
            <input type="email" className="w-full p-2 border border-gray-300 rounded" placeholder="Your email" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Message:</label>
            <textarea className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 rounded">Send Message</button>
        </form>
      </section>

      <p className="py-5 text-center text-sm text-gray-600">Copyright 2024 @Prescipto - All Rights Reserved</p>
    </div>
  );
};

export default PrivacyPolicy;
