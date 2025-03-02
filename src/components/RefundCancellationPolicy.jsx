
const RefundCancellationPolicy = () => {
  return (
    <div className="py-20 pl-10 pr-10 bg-gray-100 ">
      
      {/*Heading*/}
      <h1 className='w-full text-3xl  font-bold mb-10 text-center font-shippori'>Refund & Cancellation Policy</h1>

      {/*Paragraph*/}
      <p className="text-[#E3501F] text-xl text-Shippori mb-6 text-justify">
      This Refund & Cancellation Policy outlines the terms and conditions regarding refunds and cancellations for donations made on [Your Website Name]. Please review these policies carefully before proceeding with your donation.
      </p>

      {/*Points*/} 
      <div className='text-justify'>
        <ul className="list-disc pl-6 text-xl text-popins leading-10">
          <li>All donations are final and non-refundable unless otherwise specified or required by law.</li>

          <li>By making a donation, you confirm that you understand and accept the terms of this policy.</li>

          <li>In the event of an error or duplicate transaction, you may request a refund within 14 days of the donation date.</li>

          <li>Refund requests must be submitted through our support contact at [contact email].</li>

          <li>We reserve the right to process refunds in accordance with the applicable payment gateway's terms.</li>

          <li>Once a donation is processed, it cannot be cancelled.</li>

          <li>If you wish to discontinue a recurring donation, you may cancel future payments via your payment method provider (e.g., PayPal, credit card).</li>

          <li>If you believe a mistake was made, please contact us at [contact information].</li>

          <li>If an error occurs during the donation process, please notify us immediately by contacting [contact email].</li>

          <li>TWe will investigate and resolve any errors as quickly as possible.</li>

          <li>We implement reasonable security measures to protect your personal information.</li>

          <li>Some donations, depending on the campaign or cause, may be explicitly marked as non-refundable. Please review the terms of each specific campaign before donating.</li>

          <li>By making a non-refundable donation, you acknowledge that you are waiving your right to request a refund for that donation.</li>

          <li>We reserve the right to update or change this Refund & Cancellation Policy at any time.</li>

          <li>Any changes will be posted on this page with an updated "Effective Date."</li>

          <li>If you have any questions regarding this Refund & Cancellation Policy, please contact us at [contact email] or [phone number].</li>
        </ul>
      </div>
    </div>
  );
}

export default RefundCancellationPolicy;