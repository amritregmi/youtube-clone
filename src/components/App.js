import React from 'react'
import youtube from './apis/youtube'
import SearchBar from '../components/SearchBar'
import VideoList from '../components/VideoList'
import VideoDetail from '../components/VideoDetail'

class App extends React.Component{
    state = { videos: [], selectedVideo: null }

    /**
     * @Runs when the app is mounted
     * Default Search term is provided initially.
     */
    componentDidMount() {
        this.onTermSubmit('pink floyd')
    }
    /**
     * @THIS guy gets the serch term and makes api call to Youtube
     * @AFTER data is received, it is then added to the state system.
     * @BASED on this state system other components are rendered. 
     * @PARAM serch term
     */
    onTermSubmit = async term => { 
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState(
            {
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            }
        )
    }
    /**
     * @When the video is selected, it updates the state
     * @Based on the state, Video is displayed.
     * @param video object 
     */
    onVideoSelect = (video) => {
        this.setState({ selectedVideo:video})
    }

    render() { 
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video = {this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect = {this.onVideoSelect}
                            />
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default App 