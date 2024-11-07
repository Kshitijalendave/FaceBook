import './closeFriends.css'

function closeFriends({user}) {
  return (
    <>
    <li className='sidebarFriend'>
      <img src={user.profilePicture} alt='' className='sidebarFriendImg'/>
      <span className='sidebarFiendName'>{user.username}</span>
    </li>
    </>
  )
}

export default closeFriends