
// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import { Slider } from "@mui/material";

// const orders = [
//   {
//     id: 1,
//     name: "Kaushik Khandelwal",
//     clinic: "Clinic Vivo",
//     progress: ["Placed", "Fabrication", "Shipped", "Delivery"],
//     status: [true, true, true, false],
//     placedDate: "12 Nov",
//     fabricationDate: "15 Nov",
//     shippedDate: "16 Nov",
//     deliveryDate: "20 Nov",
//   },
//   {
//     id: 2,
//     name: "Kaushik Khandelwal",
//     clinic: "Clinic Vivo",
//     progress: ["Placed", "Fabrication", "Shipped", "Delivery"],
//     status: [true, true, false, false],
//     placedDate: "12 Nov",
//     fabricationDate: "15 Nov",
//     shippedDate: "16 Nov",
//     deliveryDate: "20 Nov",
//   },
// //   {
// //     id: 3,
// //     name: "Kaushik Khandelwal",
// //     clinic: "Clinic Vivo",
// //     progress: ["Placed", "Fabrication", "Shipped", "Delivery"],
// //     status: [true, true, false, false],
// //     placedDate: "12 Nov",
// //     fabricationDate: "15 Nov",
// //     shippedDate: "16 Nov",
// //     deliveryDate: "20 Nov",
// //   },
// //   {
// //     id: 4,
// //     name: "Kaushik Khandelwal",
// //     clinic: "Clinic Vivo",
// //     progress: ["Placed", "Fabrication", "Shipped", "Delivery"],
// //     status: [true, true, false, false],
// //     placedDate: "12 Nov",
// //     fabricationDate: "15 Nov",
// //     shippedDate: "16 Nov",
// //     deliveryDate: "20 Nov",
// //   },
// ];

// export default function Ongoing_dropdown() {
//   const [open, setOpen] = useState(false);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   return (
    
//     <div className="w-full mt-6 p-1">
//       {/* Dropdown Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex pl-4  w-full bg-green-100 text-black-800 font-semibold py-3 "
//       >
        
//         {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
//         On going
//       </button>

//       {/* Dropdown Content */}
//       {open && (
//         <div className="mt-2 bg-white border rounded-lg shadow-md overflow-hidden">
//           {orders.map((order) => (
//             <div key={order.id} className="border-b last:border-0">
//               <div
//                 className={`p-4 cursor-pointer ${
//                   selectedOrder === order.id ? "bg-green-50" : "hover:bg-gray-50"
//                 }`}
//                 onClick={() => setSelectedOrder(order.id)}
//               >
//                 <h3 className="text-lg font-semibold">{order.name}</h3>
//                 <p className="text-sm text-gray-500">{order.clinic}</p>

//                 {/* Progress Bar */}
//                 <div className="flex items-center mt-2 space-x-2">
//                   {/* {order.progress.map((step, index) => (
//                     <div
//                       key={index}
//                       className={`flex-1 h-2 rounded-full ${
//                         order.status[index] ? "bg-green-500" : "bg-gray-300"
//                       }`}
//                     ></div>
//                   ))} */}
//                   <Slider/>
//                 </div>

//                 {/* Dates */}
//                 <div className="flex justify-between text-xs text-gray-500 mt-1">
//                   <span>{order.placedDate}</span>
//                   <span>{order.fabricationDate}</span>
//                   <span>{order.shippedDate || "--"}</span>
//                   <span>{order.deliveryDate || "--"}</span>
//                 </div>
//               </div>

//               {/* Order Details */}
//               {/* {selectedOrder === order.id && (
//                 <div className="p-4 bg-gray-50">
//                   <p className="text-sm font-medium">Order Details:</p>
//                   <p className="text-xs text-gray-600">
//                     <strong>Patient:</strong> {order.name}
//                   </p>
//                   <p className="text-xs text-gray-600">
//                     <strong>Doctor:</strong> Dr. Kaushik
//                   </p>
//                   <p className="text-xs text-gray-600">
//                     <strong>Item:</strong> Crown 28
//                   </p>
//                   <p className="text-xs text-gray-600">
//                     <strong>Material:</strong> Zirconia Monolithic
//                   </p>
//                 </div>
//               )} */}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }





import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Ongoingdropdown = () => {
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

export default Ongoingdropdown;


