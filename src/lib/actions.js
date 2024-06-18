"use server"; // This line is a directive for the server to handle this code.
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";

/**
 * Adds a new post to the database.
 * @param {Object} formData - The form data containing the post details.
 * @returns {Object} - An object indicating success or failure.
 */
export const addPost = async (formData) => {

    const { title, desc, slug, userId,img } = Object.fromEntries(formData); // Destructuring the formData object to get the title, desc, slug, and userId properties.

    // console.log(title, desc, slug, userId); // Logging the values of title, desc, slug, and userId to the console.

    try {
        connectToDb(); // Connecting to the database.

        const newPost = new Post({ // Creating a new Post object with the provided properties.
            title,
            desc,
            slug,
            userId,
            img
        });

        await newPost.save(); // Saving the new post to the database.

        revalidatePath("/blog"); // Revalidating the /blog path to update the list of posts on the blog page.
        
        console.log("Post added successfully"); // Logging a success message to the console.
    } catch (e) {
        console.log(e); // Logging any errors that occur during the process.

        return { error: "Something went wrong. Please try again later." }; // Returning an error object if an error occurs.
    }
}

export const deletePost = async (id) => {
    try {
      connectToDb();
      await Post.findOneAndDelete(id);
      revalidatePath("/blog");
    }
    catch (err) {
      console.log(err);
      throw new Error("Failed to delete post!");
    }
  }

  export const handleGithubLogin = async () => {
    "use server";

    await signIn("github");

  }

  export const handleGithubSignOut= async () => {
    "use server";

    await signOut();

  }