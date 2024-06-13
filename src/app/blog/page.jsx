import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

const getPosts = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(posts);
  if (!posts.ok) {
    throw new Error("Error fetching posts");
  }
  return posts.json();
};

const BlogPage = async () => {
  const posts = await getPosts();
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
