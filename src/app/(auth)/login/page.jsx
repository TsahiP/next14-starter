import { handleGithubLogin } from "@/lib/actions";

const LoginPage = async () => {
  return (
    <div>
      <form action={handleGithubLogin}>

        <button>
          login with github
        </button>
      </form>
    </div>);
};

export default LoginPage;