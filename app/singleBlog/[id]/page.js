import getSingleBlog from "@/lib/getSingleBlog";

export default async function SingleBlog({ params }) {
  const id = params.id;
  const postPromise = getSingleBlog(id);
  const post = await postPromise;

  return (
    <div className="p-10 mt-20">
      <img
        className="object-cover w-full h-[80%] mb-4 rounded-lg "
        src={post.postDetails.img}
        alt=""
        srcset=""
      />
      <h2 className="mb-2 font-bold">{post.postDetails.title}</h2>
      <h2 className="mb-2 font-light">{post.postDetails.content}</h2>
    </div>
  );
}
