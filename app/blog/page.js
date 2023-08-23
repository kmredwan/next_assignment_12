import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-2 xl:grid-cols-3 mt-20">
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`singleBlog/${post.id}`}>
              <img
                className="object-cover w-full h-[80%] mb-4 rounded-lg "
                src={post.img}
                alt=""
                srcset=""
              />
              <h2 className="mb-2 font-bold">{post.title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
