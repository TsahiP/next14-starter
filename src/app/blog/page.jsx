import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
// import { getPosts } from "@/lib/data";


const getData = async () => {
  
  const res = await fetch("https://tpnext-six.vercel.app/api/blog",{next: {revalidate:3600}});
  // const res = await fetch(`${process.env.BASE_URL}/api/blog`,{next: {revalidate:3600}});
  if (!res.ok) {
    console.log(res);
    throw new Error("Something went wrong");
  }

  return res.json() ;
};

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  // const posts = await getPosts();
  const posts = await getData();
  console.log(posts);

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post}  />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
