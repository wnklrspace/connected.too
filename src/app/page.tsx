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
							width={30}
							height={30}
						/>
					</div>
					<p
						className={`${font.paragraph} ${font.center} ${font['color-white']}`}>
						establishing connection ...
					</p>
				</div>
			</div>
		</main>
	);
}
