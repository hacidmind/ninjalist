import Link from 'next/link'
import {useEffect} from 'react'
// import {useRouter} from 'next/router'


export default function NotFound() {

    // const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    return (
        <div className="not-found">
            <h1>Ooooops....</h1>
            <h2>The page can not be found</h2>
            <p>Go back to <Link href="/"><a>Home</a></Link></p>
        </div>
    )
}
