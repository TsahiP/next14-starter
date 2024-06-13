import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
const getPost = async (slug) => {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  // console.log(posts);
  if (!posts.ok) {
    throw new Error("Error fetching posts");
  }
  return posts.json();
};
const SinglePostPage = async ({params}) => {
  // console.log(params.slug);
  const post = await getPost(params.slug);
  console.log(post);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          fill
          src={
            "https://images.pexels.com/photos/20899827/pexels-photo-20899827/free-photo-of-casa-islamica-antigua.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="image"
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            width={50}
            height={50}
            src={
              "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="image"
          />
          <PostUser userId={post.userId}/>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
          <div className={styles.content}>
            {post.body}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
