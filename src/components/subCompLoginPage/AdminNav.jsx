import { useState } from "react";
export default function AdminNav() {
  const [showLogout, setShowLogout] = useState(false);

  return (
    <div>
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-sm text-gray-600 cursor-pointer">
          <img src="https://res.cloudinary.com/dqxjfn0qw/image/upload/v1741309125/1000018788_spgndy.png" alt="LOGO" className="h-6" />
        </div>
        {/*Logout logo*/}
        <div className="relative">
          <img
            src="/Users/sheik/OneDrive/Desktop/Project/header/src/assets/admin.png"
            alt="User Avatar"
            className="h-8 w-8 rounded-full cursor-pointer"
            onClick={() => setShowLogout(!showLogout)}
          />
          {showLogout && (
            <button
              className="absolute w-24 right-0 mt-3 bg-white border border-gray-300 px-4 py-2 shadow-md rounded-md"
            >
              Log Out
            </button>
          )}
        </div>
      </div>

      {/* Banner Section */}
      <div className="bg-yellow-500 py-10 font-serif text-center text-3xl font-semibold text-black">
        Admin Portal
      </div>
    </div>
  );
}

