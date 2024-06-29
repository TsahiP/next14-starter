import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";

import { getPost } from "@/lib/data";
// const getPost = async (slug) => {
//   const posts = await fetch(`${process.env.BASE_URL}/api/blog/${slug}`);
//   // const posts = await fetch(`https://tpnext-six.vercel.app/api/blog/${slug}`);
//   // console.log(posts);
//   if (!posts.ok) {
//     throw new Error("Error fetching posts");
//   }
//   return posts.json();
// };

// export const generateMetadata = async ({params}) => {
//   const {slug} = params;
//   const post = await getPost(params.slug);
//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };




const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  // console.log(params.slug);
  const post = await getPost(slug);



  // console.log(post);
  return (
    <div className={styles.container}>
      {post?.img &&
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
        <h1 className={styles.title}>{post?.title}</h1>

        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post?.userId} />
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
