import Post from '../post/post'
import Share from '../share/Share'
import './Feed.css'
import { Posts } from '../../Dummy'
function Feed() {
  return (
    <>
    <div className="feed">
      <div className="feedWrapper">
      <Share/>
      {Posts.map((p)=>(
         <Post key={p.id} post={p}/>
      ))}
      </div>
    </div>
    </>
  )
}

export default Feed