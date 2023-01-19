import api from '@/api/api';

const blog = {
    url : 'posts',
}

export const fetchPosts = ()=>{
    return api.get(blog.url, {
        baseURL : 'http://localhost:3000/'
    })
}



