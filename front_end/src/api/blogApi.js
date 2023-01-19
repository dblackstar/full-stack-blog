import api from '@/api/api';

const blog = {
    url1 : '',
    baseurl: {
        baseURL : 'http://localhost:5000/api/posts'
    }
}



// create a post
export const createPost = (body)=>{
    return api.post(blog.url1, body, blog.baseurl)
}


// update a post
export const updatePost = (id,body)=>{
    return api.patch('/'+id, body, blog.baseurl)
}


// delete a post
export const delPost = (id)=>{
    return api.delete('/'+id, blog.baseurl)
}


// get a post 
export const fetchPost = (id)=>{
    return api.get('/'+id, blog.baseurl)
}

// get all post
export const fetchAllPosts = ()=>{
    return api.get(blog.url1, blog.baseurl)
}










