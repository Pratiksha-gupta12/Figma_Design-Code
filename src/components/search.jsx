// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
// import OrderStatusSlider from "./slider";
// // import { Slider } from '@mui/material';

// const Search = () => {
//   return (

//     <div className="flex space-x-4 items-center ">
//       <form className="w-75 mx-auto mt-5 ml-20 mb-29">
//         <label
//           htmlFor="default-search"
//           className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//         >
//           Search
//         </label>
//         <div
//           className="relative
// "
//         >
//           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//             <svg
//               className="w-4 h-4 text-gray-500 dark:text-gray-400"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 20 20"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//               />
//             </svg>
//           </div>
//           <input
//             type="search"
//             id="default-search"
//             className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  "
//             placeholder=""
//             required
//           />
//         </div>
//       </form>

//       {/* <div className="  px-5 py-2  mt-5 mr-220  flex rounded-md w-40 h-10 border   border-gray-300 rounded-full bg-gray-50  dark:bg-gray-700 ">
// <AddCircleIcon  color="disabled"/>
//     Add Patient
// </div> */}
//       <div className="px-5 py-2 mt-5 flex mb-29 items-center w-40 h-10 border border-gray-300 rounded-3xl bg-gray-50 dark:bg-gray-700 mr-2 ml-2">
//         <AddCircleIcon color="disabled" />
//         <span className="ml-2 text-gray-500 font-sans ">Add Patient</span>
//       </div>

//       <div className="px-1 py- mt-1 mb-25 flex items-center w-9  h-10 border border-gray-300  bg-yellow-100 dark:bg-gray-700 ml-2 rounded-sm border-none pl-2">
//         <FilterAltOutlinedIcon />
//       </div>
//       <div>
//         {/* <div className='ml-'>
//     <Slider/>
// </div> */}
//       </div>

//       <div className="mr-2 mt-5">
//         <OrderStatusSlider />
//       </div>

//       {/* <div className="w-full mt-4 p-5 bg-white shadow-md rounded-lg border border-gray-200">
//         <p className="text-lg font-semibold">This is your new box below the search section</p>
//       </div> */}
//     </div>

//   );
// };

// export default Search;

// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
// // import OrderStatusSlider from "./slider";

// const Search = () => {
//   return (
//     <div className="Grid2">
//     </div>

//     // <div className="flex flex-col space-y-4 items-center"> {/* flex-col for vertical stacking */}

//     //   {/* Top Section with Search, Add Patient, and Slider */}
//     //   <div className="flex space-x-4 items-center">
//     //     {/* <form className="w-75 mx-auto mt-5">
//     //       <label htmlFor="default-search" className="sr-only">
//     //         Search
//     //       </label>
//     //       <div className="relative">
//     //         <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//     //           <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//     //             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//     //           </svg>
//     //         </div>
//     //         <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50" placeholder="Search..." required />
//     //       </div>
//     //     </form> */}

//     //     {/* <div className="px-5 py-2 flex items-center w-40 h-10 border border-gray-300 rounded-3xl bg-gray-50">
//     //       <AddCircleIcon color="disabled" />
//     //       <span className="ml-2 text-gray-500">Add Patient</span>
//     //     </div> */}

//     //     {/* <div className="px-2 py-2 flex items-center w-9 h-10 bg-yellow-100 rounded-sm">
//     //       <FilterAltOutlinedIcon />
//     //     </div> */}

//     //     {/* <div className="mr-2">
//     //       <OrderStatusSlider />
//     //     </div> */}
//     //   </div>

//     //   {/* Box Below the Search Bar */}
//     //   {/* <div className="w-3/4 p-5 bg-white shadow-md rounded-lg border border-gray-200">
//     //     <p className="text-lg font-semibold">This is your new box below the search section</p>
//     //   </div> */}

//     // </div>
//   );
// };

// export default Search;

// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
// import OrderStatusSlider from "./slider";

// const Search = () => {
//   return (
//     <div className="grid grid-rows-[auto_auto] gap-4">
//       {/* First Row: Two Columns */}
//       <div className="grid grid-cols-2 gap-4 items-center">
//         {/* Left Side: Search Bar & Buttons */}
//         <div className="flex space-x-4 items-center">
//           <form className="w-75 mx-auto">
//             <label htmlFor="default-search" className="sr-only">
//               Search
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                   <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//                 </svg>
//               </div>
//               <input type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50" placeholder="Search..." required />
//             </div>
//           </form>

//           {/* Add Patient Button */}
//           <div className="px-5 py-2 flex items-center w-40 h-10 border border-gray-300 rounded-3xl bg-gray-50">
//             <AddCircleIcon color="disabled" />
//             <span className="ml-2 text-gray-500">Add Patient</span>
//           </div>

//           {/* Filter Button */}
//           <div className="px-2 py-2 flex items-center w-9 h-10 bg-yellow-100 rounded-sm">
//             <FilterAltOutlinedIcon />
//           </div>
//         </div>

//         {/* Right Side: Order Status Slider */}
//         <div className="flex justify-end">
//           <OrderStatusSlider />
//         </div>
//       </div>

//       {/* Second Row: Full-width Box */}
//       <div className="col-span-2 w-120 p-5 bg-white shadow-md rounded-lg border border-gray-200">
//         <p className="text-lg font-semibold">This is your new box below the search section</p>
//       </div>

//       <div className="col-span-2 w-120 p-5 bg-white shadow-md rounded-lg border border-gray-200">
//         <p className="text-lg font-semibold">This is your new box below the search section</p>
//       </div>
//       <div className="col-span-2 w-120 p-5 bg-white shadow-md rounded-lg border border-gray-200">
//         <p className="text-lg font-semibold">This is your new box below the search section</p>
//       </div>
//     </div>
//   );
// };

// export default Search;

// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
// import OrderStatusSlider from "./slider";

// const Search = () => {
//   return (
//     <div className="grid grid-cols-2 gap-6 p-6">
//       {/* Left Side Box */}
//       <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
//         {/* Search Bar */}
//         <form className="mb-4">
//           <label htmlFor="default-search" className="sr-only">
//             Search
//           </label>
//           <div className="relative">
//             <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//               <svg
//                 className="w-4 h-4 text-gray-500"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 20 20"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                 />
//               </svg>
//             </div>
//             <input
//               type="search"
//               id="default-search"
//               className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50"
//               placeholder="Search..."
//               required
//             />
//           </div>
//         </form>

//         {/* Buttons - Add Patient & Filter */}
//         <div className="flex items-center space-x-4 mb-4">
//           <div className="px-5 py-2 flex items-center w-40 h-10 border border-gray-300 rounded-3xl bg-gray-50">
//             <AddCircleIcon color="disabled" />
//             <span className="ml-2 text-gray-500">Add Patient</span>
//           </div>
//           <div className="px-2 py-2 flex items-center w-10 h-10 bg-yellow-100 rounded-md">
//             <FilterAltOutlinedIcon />
//           </div>
//         </div>

//         {/* Three Stacked Boxes */}
//         <div className="space-y-4">
//           <div className="p-4 bg-blue-100 shadow-md rounded-lg border border-gray-200">
//             <p className="text-lg font-semibold">Box 1</p>
//           </div>
//           <div className="p-4 bg-green-100 shadow-md rounded-lg border border-gray-200">
//             <p className="text-lg font-semibold">Box 2</p>
//           </div>
//           <div className="p-4 bg-red-100 shadow-md rounded-lg border border-gray-200">
//             <p className="text-lg font-semibold">Box 3</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side Box */}
//       <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 flex items-center justify-center">
//         <OrderStatusSlider />
//       </div>
//     </div>
//   );
// };

// export default Search;

// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
// import OrderStatusSlider from "./slider";

// const Search = () => {
//   return (
//     <div className="grid grid-cols-2 gap-4 p-1 w-300">
//       {/* Left Side Box - Search + Boxes */}
//       <div className="p-2 ms-18 bg-white shadow-md rounded-lg border border-gray-200">
//         {/* Top Bar (Search + Add Patient + Filter) */}
//         <div className="flex items-center space-x-4 mb-4">
//           {/* Search Bar */}
//           <form className="flex-grow">
//             <label htmlFor="default-search" className="sr-only">
//               Search
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg
//                   className="w-4 h-4 text-gray-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type="search"
//                 id="default-search"
//                 className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50"
//                 placeholder="Search..."
//                 required
//               />
//             </div>
//           </form>

//           {/* Add Patient Button */}
//           <div className="px-5 py-2 flex items-center w-40 h-10 border border-gray-300 rounded-3xl bg-gray-50">
//             <AddCircleIcon color="disabled" />
//             <span className="ml-2 text-gray-500">Add Patient</span>
//           </div>

//           {/* Filter Icon */}
//           <div className="px-2 py-2 flex items-center w-10 h-10 bg-yellow-100 rounded-md">
//             <FilterAltOutlinedIcon />
//           </div>
//         </div>

//         {/* Three Stacked Boxes */}
//         <div className="space-y-4">
//           <div className="p-4 bg-blue-100 shadow-md rounded-lg border border-gray-200">
//             <p className="text-lg font-semibold">Box 1</p>
//           </div>
//           <div className="p-4 bg-green-100 shadow-md rounded-lg border border-gray-200">
//             <p className="text-lg font-semibold">Box 2</p>
//           </div>
//           <div className="p-4 bg-red-100 shadow-md rounded-lg border border-gray-200">
//             <p className="text-lg font-semibold">Box 3</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side Box - Slider */}
//       <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 flex items-center justify-center">
//         <div className="w-full">
//           <OrderStatusSlider />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;

// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
// import OrderStatusSlider from "./slider";

// const Search = () => {
//   return (
//     <div className="grid grid-cols-2 gap-4 p-6 pt-1">
//       {/* Left Side Box - Search + Boxes */}
//       <div className="p-6  ms-7  border-gray-300">
//         {/* Top Bar (Search + Add Patient + Filter) */}
//         <div className="flex items-center space-x-4 mb-6 bg-white p-1">
//           {/* Search Bar */}
//           <form className="flex-grow">
//             <label htmlFor="default-search" className="sr-only">
//               Search
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
//                 <svg
//                   className="w-4 h-4 text-gray-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type="search"
//                 id="default-search"
//                 className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50"
//                 placeholder=""
//                 required
//               />
//             </div>
//           </form>

//           {/* Add Patient Button */}
//           <div className="px-2 py-2 flex items-center w-40 h-10 border border-gray-300 rounded-3xl bg-gray-50 ">
//             <AddCircleIcon color="disabled" />
//             <span className="ml-2 text-gray-500 font-semibold">Add Patient</span>
//           </div>

//           {/* Filter Icon */}
//           <div className="p-2 flex items-center w-10 h-10 bg-yellow-200 rounded-md hover:bg-yellow-300">
//             <FilterAltOutlinedIcon />
//           </div>
//         </div>

//         {/* Three Stacked Boxes */}
//         <div className="space-y-4">
//           <div className="p-7 bg-blue-100 shadow-md rounded-lg border border-blue-300">
//             <p className="text-lg font-semibold">Box 1</p>
//           </div>
//           <div className="p-7 bg-green-100 shadow-md rounded-lg border border-green-300">
//             <p className="text-lg font-semibold">Box 2</p>
//           </div>
//           <div className="p-7 bg-red-100 shadow-md rounded-lg border border-red-300">
//             <p className="text-lg font-semibold">Box 3</p>
//           </div>
//         </div>
//       </div>

//       {/* Right Side Box - Slider (Different Styling) */}
//       <div className="p-3 bg-white shadow-lg rounded-lg border border-gray-400 flex items-center justify-start">
//         <div className="w-170">
//           <OrderStatusSlider />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;




import AddCircleIcon from "@mui/icons-material/AddCircle";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import OrderStatusSlider from "./slider";
// import Navbar_dropdown from "./navbar_dropdown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import Navbardropdown from "./navbar_dropdown";

const Search = () => {
  return (
    <div className="flex p-1">
      {/* Left Section (1/3 width) */}
      <div className="flex-1 p-1 ml-15 ">
        {/* Top Bar (Search + Add Patient + Filter) */}
        <div className=" w-132 flex items-center space-x-4 mb-3 bg-white p-3 ">
          {/* Search Bar */}
          <form className="flex-grow ">
            <label htmlFor="default-search" className="sr-only">
              Search
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50"
                placeholder="Search..."
                required
              />
            </div>
          </form>

          {/* Add Patient Button */}
          <div className="px-1 py-2 flex items-center w-40 h-10 border border-gray-300 rounded-3xl ">
            <AddCircleIcon color="disabled" />
            <span className="ml-2 font-semibold text-gray-500">
              Add Patient
            </span>
          </div>

          {/* Filter Icon */}
          <div className="p-2 flex items-center w-10 h-10 bg-yellow-200 rounded-md ">
            <FilterAltOutlinedIcon />
          </div>
        </div>

        {/* Three Stacked Boxes */}
        <div className="space-y-4">
          <div className="p-6 ml-2 bg-blue-100 shadow-md rounded-lg border border-blue-300 flex">
            {/* <Navbardropdown/> */}
            <KeyboardArrowDownIcon />
            <p className="text-lg font-semibold pl-2 ">New Orders</p>
            {/* <div className="pl-60 flex bg-blue-300 "> */}
            {/* <div>22</div>
              <div>22</div> */}
            {/* box */}
            {/* </div> */}

            {/* <NavbarDropdown/> */}

            {/* <Navbar_dropdown/> */}
            {/* <New_dropdown/> */}
          </div>
          <div className="p-6 ml-2 bg-yellow-100 shadow-md rounded-lg border border-yellow-300">
            <p className="text-lg font-semibold">Returns & Corrections</p>
          </div>
          <div className="p-6 ml-2 bg-green-100 shadow-md rounded-lg border border-green-300">
            <p className="text-lg font-semibold">On going</p>
          </div>
        </div>
      </div>

      {/* Right Side (2/3 width) - Slider Section */}
      <div className="flex-2 p-6  bg-white  flex items-center justify-start">
        <div className="w-full mb-120">
          <OrderStatusSlider />
        </div>
      </div>
    </div>
  );
};

export default Search;



// import React, { useState } from "react";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import Navbardropdown from "./navbar_dropdown"; // Make sure this is your dropdown component
// import Returnsdropdown from "./returns_dropdown";

// const Search = () => {
//   const [dropdownVisible, setDropdownVisible] = useState({
//     newOrders: false,
//     returns: false,
//     ongoing: false,
//   });

//   const toggleDropdown = (button) => {
//     setDropdownVisible((prevState) => ({
//       ...prevState,
//       [button]: !prevState[button],
//     }));
//   };

//   return (
//     <div className="flex p-1">
//       {/* Left Section (1/3 width) */}
//       <div className="flex-1 p-1 ml-15">
//         {/* Top Bar (Search + Add Patient + Filter) */}
//         <div className="w-132 flex items-center space-x-4 mb-3 bg-white p-3">
//           {/* Search Bar */}
//           <form className="flex-grow">
//             <label htmlFor="default-search" className="sr-only">
//               Search
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                 <svg
//                   className="w-4 h-4 text-gray-500"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 20 20"
//                 >
//                   <path
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                   />
//                 </svg>
//               </div>
//               <input
//                 type="search"
//                 id="default-search"
//                 className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50"
//                 placeholder="Search..."
//                 required
//               />
//             </div>
//           </form>

//           {/* Add Patient Button */}
//           <div className="px-1 py-2 flex items-center w-40 h-10 border border-gray-300 rounded-3xl">
//             <span className="ml-2 font-semibold text-gray-500">Add Patient</span>
//           </div>

//           {/* Filter Icon */}
//           <div className="p-2 flex items-center w-10 h-10 bg-yellow-200 rounded-md">
//             <KeyboardArrowDownIcon />
//           </div>
//         </div>

//         {/* Three Stacked Boxes */}
//         <div className="space-y-4">
//           <div className="p-6 ml-2 bg-blue-100 shadow-md rounded-lg border border-blue-300 relative">
//             {/* "New Orders" Button with Dropdown */}
//             <div
//               className="px-1 py-2 flex items-center w-40 h-10 border border-gray-300 rounded-3xl cursor-pointer"
//               onClick={() => toggleDropdown("newOrders")}
//             >
//               <KeyboardArrowDownIcon color="disabled" />
//               <span className="ml-2 font-semibold text-gray-500">New Orders</span>
//             </div>
//             {dropdownVisible.newOrders && (
//               <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-md rounded-md">
//                 <Navbardropdown />
//               </div>
//             )}
//           </div>

//           <div className="p-6 ml-2 bg-yellow-100 shadow-md rounded-lg border border-yellow-300 relative">
//             {/* "Returns & Corrections" Button with Dropdown */}
//             <div
//               className="px-1 py-2 flex items-center w-40 h-10 border border-gray-300 rounded-3xl cursor-pointer"
//               onClick={() => toggleDropdown("returns")}
//             >
//               <KeyboardArrowDownIcon color="disabled" />
//               <span className="ml-2 font-semibold text-gray-500">Returns & Corrections</span>
//             </div>
//             {dropdownVisible.returns && (
//               <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-md rounded-md">
//                 <Navbardropdown />
//               </div>
//             )}
//           </div>

//           <div className="p-6 ml-2 bg-green-100 shadow-md rounded-lg border border-green-300 relative">
//             {/* "On Going" Button with Dropdown */}
//             <div
//               className="px-1 py-2 flex items-center w-40 h-10 border border-gray-300 rounded-3xl cursor-pointer"
//               onClick={() => toggleDropdown("ongoing")}
//             >
//               <KeyboardArrowDownIcon color="disabled" />
//               <span className="ml-2 font-semibold text-gray-500">On Going</span>
//             </div>
//             {dropdownVisible.ongoing && (
//               <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-md rounded-md">
//                 <Returnsdropdown />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Right Side (2/3 width) - Slider Section */}
//       <div className="flex-2 p-6 bg-white flex items-center justify-start">
//         <div className="w-full mb-120">
//           {/* Slider Component */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Search;
