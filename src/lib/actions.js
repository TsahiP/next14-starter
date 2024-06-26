"use server"; // This line is a directive for the server to handle this code.
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
/**
 * Adds a new post to the database.
 * @param {Object} formData - The form data containing the post details.
 * @returns {Object} - An object indicating success or failure.
 */
export const addPost = async (prevState,formData) => {
  const { title, desc, slug, userId, img } = Object.fromEntries(formData); // Destructuring the formData object to get the title, desc, slug, and userId properties.

  // console.log(title, desc, slug, userId); // Logging the values of title, desc, slug, and userId to the console.

  try {
    connectToDb(); // Connecting to the database.

    const newPost = new Post({
      // Creating a new Post object with the provided properties.
      title,
      desc,
      slug,
      userId,
      img,
    });

    await newPost.save(); // Saving the new post to the database.

    revalidatePath("/blog"); // Revalidating the /blog path to update the list of posts on the blog page.
    revalidatePath("/admin");//=||=
    console.log("Post added successfully"); // Logging a success message to the console.
  } catch (e) {
    console.log(e); // Logging any errors that occur during the process.

    return { error: "Something went wrong. Please try again later." }; // Returning an error object if an error occurs.
  }
};

export const deletePost = async (id) => {
  try {
    connectToDb();
    await Post.findOneAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong. Please try again later." };
  }
};



// admin use 

export const addUser = async (prevState, formData) => {
  const { 
    username,
    email,
    password,
    img
   } = Object.fromEntries(formData); // Destructuring the formData object to get the title, desc, slug, and userId properties.

  // console.log(title, desc, slug, userId); // Logging the values of title, desc, slug, and userId to the console.

  try {
    connectToDb(); // Connecting to the database.

    const newUser = new User({
      // Creating a new Post object with the provided properties.
      username,
      email,
      password,
      img
    });

    await newUser.save(); // Saving the new post to the database.

    revalidatePath("/admin"); // Revalidating the /blog path to update the list of posts on the blog page.

    console.log("Post added successfully"); // Logging a success message to the console.
  } catch (e) {
    console.log(e); // Logging any errors that occur during the process.

    return { error: "Something went wrong. Please try again later." }; // Returning an error object if an error occurs.
  }
};

export const deleteUser = async (id) => {
  try {
    connectToDb();
    await Post.deleteMany({userId: id});
    await User.findOneAndDelete(id);
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong. Please try again later." };
  }
};

// ===================

export const handleGithubLogin = async () => {
  "use server";

  await signIn("github");
};

export const handleGithubSignOut = async () => {
  "use server";

  await signOut();
};

export const register = async (previousState, formData) => {
  console.log(formData);
  const { username, password, rePassword, img, email } =
    Object.fromEntries(formData);
  // console.log(username, password, rePassword, img, email);
  if (password !== rePassword) {
    return { error: "password do not match" };
  }

  try {
    connectToDb();
    // check if username exists
    const user = await User.findOne({ username: username });
    // console.log(user);
    if (user) {
      // console.log("exist try other name");
      return { error: "user already exists" };
    }
    // hash pass
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (e) {
    // console.log(error);
    return { error: "Somethink went wrong!" };
  }
};

export const login = async (previousState, formData) => {
  console.log("here");
  console.log(formData);
  const { username, password } = Object.fromEntries(formData);
  try {
    connectToDb();
    // check if username exists
    console.log(username, password);
    await signIn("credentials", { username, password });

    return { success: true };
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignis")) {
      return { error: "Invalid Credentials" };
    }


    throw error;
  }
};
