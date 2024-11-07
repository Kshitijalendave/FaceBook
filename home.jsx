import { Feed } from '@mui/icons-material';
import Topbar from '../../Components/topbar/Topbar';
import Sidebar from '../../Components/sidebar/sidebar';
import Rightbar from '../../Components/rightbar/rightbar';


import './Home.css'
function Home() {
  return (
    <>
    <Topbar/>
    <div className='homeContainer'>
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </div>
    </>
  )
}

export default Home