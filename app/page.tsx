import Image from 'next/image';
import styles from './page.module.css';
import { MastodonInfo } from './mastodonInfo';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <MastodonInfo></MastodonInfo>
      </div>
    </main>
  );
}
