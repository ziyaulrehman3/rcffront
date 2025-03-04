import { useState } from "react";

function Donation() {
  const [selectedOption, setSelectedOption] = useState("upi");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="donation-page bg-[#D9D9D9] container mx-auto mt-8">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left column: Image occupying 50% */}
        <div className="w-full md:w-1/2">
          <img
            src="https://annamrita.org/wp-content/uploads/2023/02/5-ways-to-support-underprivileged-child-education.jpg"
            alt="Donation"
            className="aspect-square  w-full mx-auto h-full object-cover"
          />
        </div>
        {/* Right column: Options occupying 50% */}
        <div className="w-4/5 md:w-1/2 py-10 flex flex-col items-start justify-between px-4">
          <h2 className="text-2xl font-bold mb-4">Donate Now</h2>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => handleOptionChange("upi")}
              className={`px-6 py-2 rounded-md ${
                selectedOption === "upi"
                  ? "bg-blue-500 text-white font-bold transition-all ease-linear"
                  : "bg-gray-300 text-black"
              }`}
            >
              UPI
            </button>
            <button
              onClick={() => handleOptionChange("bank")}
              className={`px-4 py-2 rounded-md ${
                selectedOption === "bank"
                  ? "bg-blue-500 text-white font-bold transition-all ease-linear"
                  : "bg-gray-300 text-black"
              }`}
            >
              Bank
            </button>
          </div>

          <div className="w-full  rounded-md h-2/3">
            {selectedOption === "upi" ? (
              <div className="h-full w-11/12">
                <h3 className="text-xl font-semibold mb-2">UPI Details:</h3>
                <p className="text-base font-semibold">
                  UPI ID: raaht89584648@barodampay
                </p>
                <br />
                <img
                  className="h-48 aspect-square"
                  src="https://res.cloudinary.com/dqxjfn0qw/image/upload/v1740940676/qrcode_kmul7o.png"
                  alt="qr-code"
                />
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold mb-2">Bank Details:</h3>
                <p className="text-base font-semibold">
                  Bank Name: Bank of Baroda
                  <br />
                  Account Number: 05850200000648
                  <br />
                  IFSC: BARB0VJRAMP
                  <br />
                  Branch: Rampur Branch
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="my-4">
        <p className="font-poppins bg-slate-600 text-slate-50 text-center md:text-center w-full px-4 mx-auto">
          Send your payments screenshot to get the Donation receipt on Our
          WhatsApp Number: 9876543210
        </p>
      </div>
    </div>
  );
}

export default Donation;
