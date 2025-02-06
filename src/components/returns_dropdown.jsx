
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Returnsdropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "Kaushik khandelwal - Clinic Vivo",
    "John Doe - Smile Care",
    "Jane Smith - Dental Hub",
  ];

  return (
    <div className="absolute w-130 "> {/* Make width dynamic */}
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 bg-blue-100 shadow-md rounded-lg border border-blue-300"
      >
        <span className="text-lg font-semibold">New Orders</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-10">
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

export default Returnsdropdown;


