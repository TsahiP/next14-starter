import { handleGithubLogin, login } from "@/lib/actions";
import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/loginForm";
import { auth } from "@/lib/auth";
// import { useRouter } from "next/router";
const LoginPage =  () => {
  // const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <h1>Login</h1>
      <LoginForm/>
      <form className={styles.form} action={handleGithubLogin}>
        <button>login with github</button>
      </form>
      </div>
    </div>
  );
};

export default LoginPage;
