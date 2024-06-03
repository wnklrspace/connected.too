import Image from 'next/image';
import font from './typography.module.css';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.shadow} />
			<div className={styles['video-view']}>
				<div className={styles.container}>
					<div className={styles.rotationContainer}>
						<Image
							src='/ctoo_logo.png'
							alt=''
							width={20}
							height={20}
						/>
					</div>
					<p
						className={`${font.paragraph} ${font.center} ${font['color-white']}`}>
						creative collective in the making. <br /> shaping art and culture.
						<br />
						coming soon.
					</p>
				</div>
			</div>
		</main>
	);
}
