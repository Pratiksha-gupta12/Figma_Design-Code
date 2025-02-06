
import BarChartIcon from '@mui/icons-material/BarChart';import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import ListIcon from '@mui/icons-material/List';import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';



const Sidebar = () => {
  return (
    
      <div className=' bg-green-100 w-15 h-full rounded-md fixed '>
      <div className='pt-76 pl-4 '><BarChartIcon  style={{ fontSize: 28 }}/></div>
       
        <div className='pt-3 pl-4'><LocalHospitalOutlinedIcon/></div>
        <div className='pt-3 pl-4'><ListIcon /></div>
        <div className='pt-90 pl-4'><LoginOutlinedIcon/></div>
        <div className='pt-2 pl-4'><SettingsOutlinedIcon/></div>
      </div>

    
  )
}

export default Sidebar;
