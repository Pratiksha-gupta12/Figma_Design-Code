// // import { useState } from "react";
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";

// // export default function DateButton() {
// //   const [selectedDate, setSelectedDate] = useState(new Date()); // Default to today
// //   const [open, setOpen] = useState(false); // Toggle calendar

// //   // Format date to "MM-DD-YYYY"
// //   const formatDate = (date) => {
// //     return date.toLocaleDateString("en-US", {
// //       month: "2-digit",
// //       day: "2-digit",
// //       year: "numeric",
// //     });
// //   };

// //   return (
// //     <div className="relative inline-block">
// //       {/* Date Button */}
// //       <button
// //         onClick={() => setOpen(!open)}
// //         className="flex items-center gap-2 bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
// //       >
// //         {formatDate(selectedDate)} {/* Show formatted date */}
// //         {/* <CalendarIcon className="w-5 h-5 text-gray-600" /> */}
// //       </button>

// //       {/* Calendar Popup */}
// //       {open && (
// //         <div className="absolute top-12 left-0 z-10 bg-white border border-gray-300 shadow-lg p-2 rounded-lg">
// //           <DatePicker
// //             selected={selectedDate}
// //             onChange={(date) => {
// //               setSelectedDate(date);
// //               setOpen(false); // Close calendar after selection
// //             }}
// //             dateFormat="MM-dd-yyyy" // Ensures proper display
// //             inline // Show calendar inside div
// //           />
// //         </div>
// //       )}
// //     </div>
// //   );
// // }





// import  { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
// import { CalendarIcon } from "@heroicons/react/24/solid";
// import "./datepicker.css"; // Import custom styles

// export default function DateButton() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const formattedDate = format(selectedDate, "dd-MM-yyyy");

//   return (
//     <div className="relative flex flex-col items-center space-y-2">
//       {/* Date Button */}
//       <button
//         onClick={() => document.getElementById("datepicker").focus()}
//         className="flex items-center px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-md space-x-2"
//       >
//         <span>{formattedDate}</span>
//         <CalendarIcon className="w-5 h-5 text-gray-500" />
//       </button>

//       {/* Date Picker */}
//       <DatePicker
//         id="datepicker"
//         selected={selectedDate}
//         onChange={(date) => setSelectedDate(date)}
//         dateFormat="dd-MM-yyyy"
//         className="absolute top-full left-0 mt-2"
//         popperClassName="custom-datepicker"
//         calendarClassName="custom-calendar"
//         popperPlacement="bottom"
//       />
//     </div>
//   );
// }



// import { format } from "date-fns";
// import { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import "./datepicker.css"; // Import custom styles

// export default function DateButton() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [open, setOpen] = useState(false); // Manage calendar visibility
//   const formattedDate = format(selectedDate, "dd-MM-yyyy");

//   return (
//     <div className="relative inline-block ">
//       {/* Date Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex items-center px-3 py-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-lg space-x-2"
//       >
//         <span>{formattedDate}</span>
//         {/* <CalendarIcon className="w-10 h-2 text-gray-500" /> */}
//       </button>

//       {/* Calendar Popup (conditionally rendered) */}
//       {open && (
//         <div className="absolute top-full left-0 mt-2 z-10 bg-white border border-gray-300 shadow-lg p-2 rounded-lg ">
//           <DatePicker
//             selected={selectedDate}
//             onChange={(date) => {
//               setSelectedDate(date);
//               setOpen(false); // Close calendar after selection
//             }}
//             dateFormat="dd-MM-yyyy"
//             inline // Ensure it appears only once
//           />
//         </div>
//       )}
//     </div>
//   );
// }








import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export default function DateButton() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [open, setOpen] = useState(false); // Manage calendar visibility
  const formattedDate = format(selectedDate, "dd-MM-yyyy");

  return (
    <div className="relative inline-block">
      {/* Green Date Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center px-3 py-1 text-green-800 bg-green-300 border-green-400  rounded-lg shadow-md shadow-color-gray-100 space-x-2 transition"
      >
        <span>{formattedDate}</span>
       
      </button>

      {/* Calendar Popup */}
      {open && (
        <div className="absolute top-full left-0 mt-2 z-10 bg-white border  border-gray-300 bg-green-800 shadow-lg p-2 rounded-lg ">
          <DatePicker 
           
            selected={selectedDate}
            onChange={(date) => {
              setSelectedDate(date);
              setOpen(false); // Close calendar after selection
            }}
            dateFormat="dd-MM-yyyy"
            inline
            // calendarClassName="bg-green-500 text-white"
          />
        </div>
      )}
    </div>
  );
}







