import axios from 'axios';

const KEY = 'AIzaSyDd3yXTeEXG5a8ddiquBXoRUTZJLQfr3RU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
});
