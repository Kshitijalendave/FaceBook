import './OnlineFriends.css'

function OnlineFriends({user}) {
  return (
    <>
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
    </>
  )
}

export default OnlineFriends












// import './onlineFriends.css'

// function onlineFriends({user}) {
//   return (
//     <>
//     <li className='rightbarFriend'>
//       <div className='rightbarProfile'>
//         <img src='' alt='' className='rightbarProfileImg'/>
//         <span className='rightbarOnline'></span>
//       </div>
//       <span className='rightbarUsernam'>{user.username}</span>
//     </li>
//     </>
//   )
// }

// export default onlineFriends