import Feed from '../../Components/feed/Feed'
import Rightbar from '../../Components/rightbar/rightbar'
import Sidebar from '../../Components/sidebar/sidebar'
import Topbar from '../../Components/topbar/Topbar'
import './Profile.css'

function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img src="src/assets/assets/person/download (1).jpeg" alt="" className="profileCoverImg" />
            <img src="src/assets/assets/person/download.jpeg" alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">kshitija</h4>
            <span className="profileInfoDesc">Hello! My Friends</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed/>
          <Rightbar profile/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Profile














// import './profile.css'
// import Sidebar from '../../Components/sidebar/sidebar'
// import Topbar from '../../Components/topbar/topbar'
// import Rightbar from '../../Components/rightbar/rightbar'
// import { Feed } from '@mui/icons-material'
// function profile() {
//   return (
//     <>
//     <Topbar/>
//     <div className='profile'>
//       <Sidebar/>
//       <div className="profileRight">
//         <div className="profileRightTop">
//           <div className="profileCover">
//             <img src='src/assets/assets/person/10.jpg' alt='' className='profileCoverImg'/>
//             <img src='src/assets/assets/person/1.jpg' alt='' className='profileUserImg'/>
//           </div>
//           <div className="profileInfo">
//             <h4 className='profileInfoName'>Mine</h4>
//             <span className='profileInfoDesc'>Hello my Friends</span>

//           </div>
//           <div className="profileRightBotton">
//             <Feed/>

//           <Rightbar/>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   )
// }

// export default profile