// import { Grid2 } from "@mui/material";

// import Sidebar from "./sidebar";
// import React fom 'react'
import budLeaf from "../assets/budLeaf.svg";
import DateButton from "./datebutton";
import Search from "./search";
// import SLider from "./slider";
// import CustomizedMenus from "./dropdown";

// import Dropdown from "../components/dropdown";


function Navbar() {
  return (
    <div>
    <nav className="bg-green-100 px-5 py-2  ml-19 mt-4 flex rounded-md w-343 h-20  ">
      <div className=" flex size-12 justify center mt-1 ">
        <img src={budLeaf} alt="budLeaf" />
        <div className="text-green-700 whitespace-nowrap pt-2 font-extrabold text-3xl pl-3 font-serif">Hi, Kaushik,</div>
        <div className="text-green-700  pt-3.5 text-xl whitespace-nowrap pt-1  ">welcome back</div>
      </div>
      <div className="justify-center flex text-center pl-230">
      {/* <CustomizedMenus/> */}
      </div>
      <div className="justify-center text-black flex text-center pl-25 pt-4">
        <DateButton/>
        
      </div>
      <div className="justify-center text-black flex text-center pl-2 pt-4">
        <DateButton/>
        
      </div>
    {/* <button className="bg-blue-500 text-white px-4 py-2 rounded"><DateButton/></button> */}



    </nav>
    {/* <div className=" w-60 pl-20 mt-5 ">
    <div className="text-4xl text-black pl-20 w-80 h-10 border rounded-md">Hello</div>
    </div> */}

<Search/>
{/* <SLider /> */}

    </div>
  );
}

export default Navbar;
