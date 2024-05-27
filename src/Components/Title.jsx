import React, { useState, useEffect } from "react";
import dashboard from "../Assests/dashboard.jpeg";

const Title = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = dateTime.toLocaleDateString("en-US", options);
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 sm:p-6 lg:px-20 lg:py-3">
      <div className="flex items-center">
        <img
          src={dashboard}
          alt="Employee"
          className="rounded-full h-12 w-12 sm:h-16 sm:w-16 m-2 sm:m-4"
        />
        <div className="font-semibold text-lg sm:text-xl">
          Employees Activity Dashboard
        </div>
      </div>
      <div className="text-center sm:text-right text-sm text-gray-600 mt-2 sm:mt-0 flex flex-col items-center sm:items-end pr-0 sm:pr-4 lg:pr-10">
        <div>{formattedDate}</div>
        <div>{formattedTime}</div>
      </div>
    </div>
  );
};

export default Title;
