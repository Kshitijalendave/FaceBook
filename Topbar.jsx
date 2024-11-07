import './Topbar.css'
import {Search, Person , Chat,Notifications } from '@mui/icons-material'
function Topbar() {
  return (
    <>
    <div className='topbarContainer'> 
      <div className="topbarLeft">
        {/* <span className="logo"><img src="https://i.ibb.co/Dz1m7Dn/logo.png" alt="" /></span> */}
        <span className="logo"><img src="src/assets/assets/person/logo.png" alt="" /></span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className='searchIcon'/>
          <input placeholder='Search for Friends, post or Video' className='searchInput'/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">HomePage</span>
          <span className="topbarLinks">Posts</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">4</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">5</span>
          </div>
        </div>
        <img src='src/assets/assets/person/1.jpg' alt='' className='topbarImg'/>
      </div>
    </div>
    </>
  )
}

export default Topbar