


import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Navbardropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "Kaushik khandelwal - Clinic Vivo",
    "John Doe - Smile Care",
    "Jane Smith - Dental Hub",
  ];

  return (
    <div className="relative flex flex-col items-start w-72">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full pr-40 py-2 "
      >
        
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
        <span className="text-lg font-medium">New Orders</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
            >
              <input
                type="radio"
                id={`option-${index}`}
                name="orders"
                value={option}
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
                className="mr-2 cursor-pointer"
              />
              <label
                htmlFor={`option-${index}`}
                className={`cursor-pointer ${
                  selectedOption === option ? "line-through text-gray-500" : ""
                }`}
              >
                {option}
                
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbardropdown;



// import { useState } from "react";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// const Navbardropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = [
//     "Kaushik khandelwal - Clinic Vivo",
//     "John Doe - Smile Care",
//     "Jane Smith - Dental Hub",
//   ];

//   return (
//     <div className="relative w-full">
//       {/* Dropdown Header */}
//       <div className="px-1 py-2 flex items-center w-40 h-10 border border-gray-300 rounded-3xl">
        
//         {/* Clickable Arrow Icon */}
//         {isOpen ? (
//           <KeyboardArrowUpIcon
//             className="text-gray-600 cursor-pointer"
//             onClick={() => setIsOpen(false)}
//           />
//         ) : (
//           <KeyboardArrowDownIcon
//             className="text-gray-600 cursor-pointer"
//             onClick={() => setIsOpen(true)}
//           />
//         )}
//         <span className="text-lg font-semibold">New Orders</span>
//       </div>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <ul className="absolute left-0 w-124 bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
//           {options.map((option, index) => (
//             <li
//               key={index}
//               className="flex items-center px-4 py-2 hover:bg-gray-200 cursor-pointer"
//             >
//               <input
//                 type="radio"
//                 id={`option-${index}`}
//                 name="orders"
//                 value={option}
//                 checked={selectedOption === option}
//                 onChange={() => setSelectedOption(option)}
//                 className="mr-2 cursor-pointer"
//               />
//               <label
//                 htmlFor={`option-${index}`}
//                 className={`cursor-pointer ${
//                   selectedOption === option ? "line-through text-gray-500" : ""
//                 }`}
//               >
//                 {option}
//               </label>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Navbardropdown;
