export default async function getSingleBlog(id){
    const response = await fetch(`https://basic-blog.teamrabbil.com/api/post-details/${id}`)

    if(!response.ok){
        throw new Error('Error fetching posts')

    }else{
        return response.json()
    }
}