import React from 'react'
import VideoItem from './VideoItem'

/**
 * @RESPONSIBLE to display list of video 
 * @USES Video Item component 
 */
const VideoList = ({ videos, onVideoSelect }) => {
    const rederedList = videos.map(video => {
        return <VideoItem key={ video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    })

    return (
        <div className="ui relaxed divided list">
            {rederedList}
        </div>
    )
}

export default VideoList
