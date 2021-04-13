import axios from 'axios'
const KEY = 'AIzaSyAg31uIyEcO0UReD-qBhAD38w1T-oTF1c4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})
