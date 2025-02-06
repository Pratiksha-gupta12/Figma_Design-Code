


// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// const marks = [
//   {
//     value:"Placed",
//     label: 'Placed',
//   },
//   {
//     value: "Shipped",
//     label: '20°C',
//   },
//   {
//     value: 37,
//     label: '37°C',
//   },
//   {
//     value: 100,
//     label: '100°C',
//   },
// ];

// function valuetext(value) {
//   return `${value}°C`;
// }

// export default function SLider() {
//   return (
//     <div>
//     <div className='border w-207 ml-155 h-40 flex  '>
//     <Box sx={{ width: 300 }}>
//       <Slider
//         aria-label="Restricted values"
//         defaultValue={20}
//         getAriaValueText={valuetext}
//         step={null}
//         valueLabelDisplay="auto"
//         marks={marks}
//       />
//     </Box>
//     </div>
//     </div>
//   );
// }



import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import img from "../assets/robot.gif"

const marks = [
  {
    value: 0,    
    label: 'Placed',
  },
  {
    value: 33,   
    label: 'Shipped',
  },
  {
    value: 66,   
    label: 'Out for Delivery',
  },
  {
    value: 100,  
    label: 'Delivered',
  },
];

function valuetext(value) {
  return `${value}%`;
}

export default function OrderStatusSlider() {
  return (
    <div className="border w-2-0 h-40 items-center justify-center content-start rounded-2xl bg-blue-50 border-none grid">
      <Box sx={{ width: 700 }}>  {/* Increased width for better spacing */}
        <Slider   sx={{ width: 700, color: 'success.main' }}className="'medium' justify-center  "
          aria-label="Order Status"
          defaultValue={0}   // Default to "Placed"
          getAriaValueText={valuetext}
          step={null}       // Prevents unwanted intermediate steps
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Box>
     {/* <span className='flex item'> <img className="w-20 bg-blue-50 justify-end content-end mt-4 " src={img} alt="robot img"/> </span>
     <span className='flex-inline'>Let&apos;s work on it</span> */}
     <div className="flex items-center space-x-4 ">
  {/* Image */}
  <img className="w-20 bg-blue-50 mt-4" src={img} alt="robot img"/>

  {/* Text */}
  <span className="text-2xl text font-large
font-serif text-gray-500 ">Let&apos;s work on it</span>
</div>

    
    </div>
  );
}
