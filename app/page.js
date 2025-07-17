'use client';

import { useSession } from 'next-auth/react';
import styles from './page.module.css';
import Navbar from '../component/Navbar';

export default function Home() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <div className={styles.page}>
      <Navbar />
      {session ? (
        <>
          <p>Welcome, <strong>{session.user.name}</strong>!</p>
          <p>home page with protected Route
</p>
        </>
      ) : (
        <p>Login by signing in with GitHub.</p>
      )}
    </div>
  );
}
