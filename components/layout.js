import Head from 'next/head';
import Link from 'next/link';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

const name = 'Metabee';
export const siteTitle = 'First Next Last Amen';

export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="desciption"
                    content="It's a website made of code."
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}/>
            {home ? (
                <>
                    <img
                        priority
                        src="/images/profile.jpeg"
                        className={utilStyles.borderCircle}
                        height={144}
                        width={144}
                        alt="profile pic"
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
                ) : (
                <>
                    <Link href="/">
                    <img
                        priority
                        src="/images/profile.jpeg"
                        className={utilStyles.borderCircle}
                        height={108}
                        width={108}
                        alt="profile pic"
                    />
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                    <Link href="/" className={utilStyles.colorInherit}>
                        {name}
                    </Link>
                    </h2>
                </>
            )}
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                <Link href="/">← Back to home</Link>
                </div>
            )}
        </div>
    );
}