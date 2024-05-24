'use client'

import Link from "next/link";
import { useState } from "react";

function Login() {
    const [login, setLogin] = useState(false);
    
    return (
        <div>
            {login &&   (<div className="flex flex-row gap-1">
                            <button onClick={()=>{setLogin(false)}}>Logout</button>
                            <Link href={"/cupons"}>Cupons</Link>
                        </div>)
            }
            {!login && <button onClick={()=>{setLogin(true)}}>Login</button>}
        </div>
    )
}

export default Login