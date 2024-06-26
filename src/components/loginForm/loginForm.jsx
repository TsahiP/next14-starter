"use client";
import {useFormState} from "react-dom";
import styles from './loginForm.module.css'
import { login } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
const LoginForm = () => {
    const [state,formAction] = useFormState(login,undefined);
    const router = useRouter();
    // useEffect(() => {
      
    //     state?.success && router.push('/blog')
    // },[state?.success,router])

  return (
    
    <form className={styles.form} action={formAction}>
        
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <button>Login with Credentials </button>
          {state?.error}
          <Link href="/register">Don&apos;t have an account? <b>Register</b></Link>
        </form>
    
  )
}

export default LoginForm