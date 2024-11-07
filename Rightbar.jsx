import './Rightbar.css'
import { Users } from '../../Dummy';
import OnlineFriends from '../onlineFriends/onlineFriends';
function Rightbar({profile}) {
  let HomeRightbar = () =>{
    return (
      <>
      <div className="birthdayContainer">
        <img src="src\assets\gift.png" alt="" className='birthdayImg'/>
        <span className="birthdayText">
          <b>mine and</b> and <b>5 other friends</b> have a birthday today.
        </span>
      </div>
      <img src="src\assets\person\3.jpg" alt="" className='rightbarAd'/>
      <h4 className='rightbarTitle'>Onilne Friends</h4>
      <ul className="rightbarFriendList">
      {Users.map((user)=>(
        <OnlineFriends key={user.id} user={user}/>
      ))}
      </ul>
      </>
    )
  }
  let ProfileRightbar =() =>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">City:</span>
          <span className="rightbarInfoValue">Pune</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">From:</span>
          <span className="rightbarInfoValue">Sangola</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">RelationShip:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="src/assets/assets/person/1.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">shreya</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/assets/person/2.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Rutuja</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/assets/person/3.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">pratik</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/assets/person/4.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">harshali</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/assets/person/5.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Arati</span>
          </div>
          <div className="rightbarFollowing">
            <img src="src/assets/assets/person/6.jpg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Sanika</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
    <div className="rightbar">
    <div className="rightbarWrapper">
      {profile ? <ProfileRightbar/> : <HomeRightbar/>}
    </div>
    </div>
    </>
  )
}

export default Rightbar









