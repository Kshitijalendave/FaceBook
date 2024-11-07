import {RssFeed, Chat,PlayCircleFilledOutlined,Group,Bookmark, HelpOutline,WorkOutline, Event,School}
from '@mui/icons-material';
import './Sidebar.css'
import {Users} from '../../Dummy';
import CloseFriends from '../closeFriends/closeFriends';

function Sidebar(){
    return(
       <>
       <div className='sidebar'>
        <div className='sidebarWrapper'>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
                    <RssFeed/>
                    <span className='sidebarListItemText'>Feed</span>
                </li>
                <li className='sidebarListItem'>
                    <Chat/>
                    <span className='sidebarListItemText'>Chats</span>
                </li>
                <li className='sidebarListItem'>
                    <PlayCircleFilledOutlined/>
                    <span className='sidebarListItemText'>PlayCircleFilledOutlined</span>
                </li>
                <li className='sidebarListItem'>
                    <Group/>
                    <span className='sidebarListItemText'>Group</span>
                </li>
                <li className='sidebarListItem'>
                    <Bookmark/>
                    <span className='sidebarListItemText'>Bookmark</span>
                </li>
                <li className='sidebarListItem'>
                    <HelpOutline/>
                    <span className='sidebarListItemText'>HelpOutline</span>
                </li>
                <li className='sidebarListItem'>
                    <WorkOutline/>
                    <span className='sidebarListItemText'>WorkOutline</span>
                </li>
                <li className='sidebarListItem'>
                    <Event/>
                    <span className='sidebarListItemText'>Event</span>
                </li>
                <li className='sidebarListItem'>
                    <School/>
                    <span className='sidebarListItemText'>School</span>
                </li>
            </ul>
            <button className='sidebraButton'>Show More</button>
            <hr className='sidebarHr'/>
            <ul className='sidebatFriendList'>
            {Users.map((user)=>(
          <CloseFriends key={user.id} user={user}/>
        ))}      
        <h3> Close Friends </h3>
                <li className='sidebarFriend'>
                    <img src="src/assets/assets/person/2.jpg" alt=""
                    className='sidebarFriendImg'/>
                    <span className='sidebarFriendName'>Rutuja</span>
                </li>
                <li className='sidebarFriend'>
                    <img src="src/assets/assets/person/3.jpg" alt=""
                    className='sidebarFriendImg'/>
                    <span className='sidebarFriendName'>shreya</span>
                </li>
                <li className='sidebarFriend'>
                    <img src="src/assets/assets/person/4.jpg" alt=""
                    className='sidebarFriendImg'/>
                    <span className='sidebarFriendName'>Harshali</span>
                </li>
                <li className='sidebarFriend'>
                    <img src="src/assets/assets/person/5.jpg" alt=""
                    className='sidebarFriendImg'/>
                    <span className='sidebarFriendName'>Pratik</span>
                </li>
                </ul>

        </div>
       </div>
       </>
    )
}
export default Sidebar