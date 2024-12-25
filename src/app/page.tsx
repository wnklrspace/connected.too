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
					<div className={styles['text-container']}>
						<p
							className={`${font.paragraph} ${font.center} ${font['color-white']} ${font['hover-animation']}`}>
							c<span className={font.transparent}>onnected</span> t
							<span className={font.transparent}>oo</span>
						</p>

						<p
							className={`${font.paragraph} ${font.center} ${font['color-white-25']}`}>
							Establishing connection ...
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
