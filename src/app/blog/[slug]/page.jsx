import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";
// const getPost = async (slug) => {
//   const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   // console.log(posts);
//   if (!posts.ok) {
//     throw new Error("Error fetching posts");
//   }
//   return posts.json();
// };
const SinglePostPage = async ({ params }) => {
  // console.log(params.slug);
  const post = await getPost(params.slug);
  console.log("here");
  console.log(post.createdAt);
  return (
    <div className={styles.container}>
      {post.img &&
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill
            src={
              post?.img
            }
            alt="image"
          />
        </div>
      }
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.detail}>
          {/* <Image
            className={styles.avatar}
            width={50}
            height={50}
            src={
              "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="image"
          /> */}
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
              </span>
          </div>
          <div className={styles.content}>
            {post?.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
