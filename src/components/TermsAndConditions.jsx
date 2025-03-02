import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="py-16 px-5 md:px-10 bg-gray-100 w-full lg:w- mx-auto px-4">
      
      {/*Heading*/}
      <h1 className='w-full text-3xl font-bold text-center mb-16 font-shippori'>Terms and Conditions</h1>

      {/*Paragraph*/}
      <p className="text-[#E3501F] text-lg text-Shippori mb-4">
        By using our website, [Your Website Name], and making a donation, you agree to the following terms and conditions. Please read these terms carefully before proceeding.
      </p>

      {/*Points*/}
      <section className="">
        <ul className="list-disc pl-6 text-lg text-popins w-[90%] text-justify leading-10">
          <li>By making a donation, you agree to comply with these terms, and any updates or changes that may occur over time.</li>

          <li>We reserve the right to modify or amend these terms at any time, and such modifications will be posted on this page.</li>

          <li>Donations made on the website are voluntary and can be one-time or recurring, depending on the options provided.</li>

          <li>Donations may be made using various payment methods (credit card, PayPal, etc.). By submitting a donation, you confirm that you have the legal right to use the payment method.</li>

          <li>All donations made through this website will be used for [describe the intended purpose of donations, e.g., charitable purposes, specific projects].</li>

          <li>We reserve the right to reallocate donations to similar causes if necessary.</li>

          <li>All donations are final and non-refundable, except in the case of an error in processing.</li>

          <li>If you believe a mistake was made, please contact us at [contact information].</li>

          <li>We may collect personal information (e.g., name, email address, payment details) to process your donation.</li>

          <li>We may use third-party payment processors to handle transactions (e.g., PayPal, Stripe).</li>

          <li>These third parties have their own terms and conditions, and we encourage you to review them.</li>

          <li>If applicable, donations made through [Your Website Name] may be tax-deductible.</li>

          <li>Please consult with a tax professional or refer to the donation receipt for details on how to claim deductions.</li>
        </ul>
      </section>
    </div>
  );
}

export default TermsAndConditions;