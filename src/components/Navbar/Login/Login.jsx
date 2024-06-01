'use client'

import Link from "next/link";
import { useState } from "react";

function Login() {
    const [login, setLogin] = useState(true);
    
    return (
        <div>
            {login &&   (<div className="flex flex-col sm:flex-row gap-1">
                            <button onClick={()=>{setLogin(false)}}>Logout</button>
                            <Link href={"/cupons"}>Cupons</Link>
                        </div>)
            }
            {!login && <Link href={"/login"}>Login</Link>}
        </div>
    )
}

export default Login