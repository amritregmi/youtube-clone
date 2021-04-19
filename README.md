# App Detail
    React app that uses Youtube public api to fetch videos and play videos

## Technology
    React, Youtube Api (App, SearchBar, VideoList, VideoItem, VideoDetail)

## Installation 
    1. Clone the app 
    2. npm install 
    3. Update the public api key (see below step)
    4. npm start 

    ### 
        1. $ mkdir src/api
        2. $ cd src/api
        3. $ touch youtube.js

        4. paste following code
```
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
```


    
### Creator 
    copyright Amrit Regmi 
