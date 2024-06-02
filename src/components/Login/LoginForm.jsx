
import { login } from "@/src/lib/login"

function LoginForm() {

  return (
    <section className="flex flex-col items-center">
        <h2 className="text-2xl font-bold">Login</h2>
        <div>
            <form action={login}
                    className="flex flex-col gap-1">
                <label htmlFor="">Email:
                    <input type="text" name="email" id="username"
                            className="w-full" />
                </label>
                <label htmlFor="">Password:
                    <input type="password" name="password" id="password"
                            className="w-full" />
                </label>
                <span className="text-xs text-blue-600 cursor-pointer self-end"
                        >forgot password?</span>
                <button className="btn self-center">Login</button>
            </form>
        </div>

    </section>
  )
}

export default LoginForm