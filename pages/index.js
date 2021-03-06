// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/master/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }

import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'


export default function index() {
  return (
    <>
      <Head>
      <title>Ninja List | Home</title>
      <meta name="keyword" content="ninjas" />
      </Head>
    <div>
      <h1 className={styles.title}>HOME PAGE</h1>
      <p className={styles.text}>  To build a complete web application with React from scratch, there are many important details you need to consider:
???	Code has to be bundled using a bundler like webpack and transformed using a compiler like Babel.
???	You need to do production optimizations such as code splitting.
???	You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering.
???	You might have to write some server-side code to connect your React app to your data store.
A framework can solve these problems. But such a framework must have the right level of abstraction ??? otherwise it wont be very useful. It also needs to have great &quot;Developer Experience &quot;, ensuring you and your team have an amazing experience while writing code.
      </p>
      <p className={styles.text}>  To build a complete web application with React from scratch, there are many important details you need to consider:
???	Code has to be bundled using a bundler like webpack and transformed using a compiler like Babel.
???	You need to do production optimizations such as code splitting.
???	You might want to statically pre-render some pages for performance and SEO. You might also want to use server-side rendering or client-side rendering.
???	You might have to write some server-side code to connect your React app to your data store.
A framework can solve these problems. But such a framework must have the right level of abstraction ??? otherwise it wont be very useful. It also needs to have great &quot; Developer Experience &quot;, ensuring you and your team have an amazing experience while writing code.
      </p>
      <Link href="/ninjas">
      <a className={styles.btn}>See Ninja List</a>
      </Link>
      </div>
      </>
  )
}
