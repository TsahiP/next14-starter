import styles from "./postUser.module.css";


const getAuthor = async (userId) => {
    const posts = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    // console.log(posts);
    if (!posts.ok) {
      throw new Error("Error fetching posts");
    }
    return posts.json();
  };


const PostUser = async ({userId}) => {
    const author = await getAuthor(userId);
    console.log(author);
    console.log(userId);
  return (
    <div className={styles.container}>
    <span className={styles.title}>Author</span>
    <span className={styles.username}>{author.username}</span>
  </div>
  )
}

export default PostUser