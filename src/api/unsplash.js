import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID DKM5-oW5OHeE-1YsXNVnYM5OP3hhcTav9p0zUAZqdCI'
    }
})