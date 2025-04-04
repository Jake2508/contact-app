import axios from 'axios';


export default axios.create({
    // We can change URL to use an actual server (instead of local)
    baseURL:"http://localhost:3006/",
})