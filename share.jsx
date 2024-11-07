import './Share.css'
import {EmojiEmotions,Label, PermMedia, Room } from '@mui/icons-material'

function Share() {
  return (
    <>
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="src/assets/assets/person/download.jpeg" alt="" className='shareProfileImg'/>
                <input placeholder='What you want to post' className='shareInput'/>
            </div>
            <div className="shareHr">
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor='green'className='shareIcon'/>
                            <label className='shareOptionText'>Photo/Video</label>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor='blue'className='shareIcon'/>
                            <label className='shareOptionText'>Tag</label>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor='tomato'className='shareIcon'/>
                            <label className='shareOptionText'>Location</label>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor='goldenrod'className='shareIcon'/>
                            <label className='shareOptionText'>Feeling</label>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Share











