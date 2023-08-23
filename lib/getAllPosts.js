export default async function getAllPosts(){

    const response = await fetch('https://basic-blog.teamrabbil.com/api/post-newest')

    if(!response.ok){
        throw new Error("Error fetching posts ")
    }else{
        return response.json()
    }

    
}