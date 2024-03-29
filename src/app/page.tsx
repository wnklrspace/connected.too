import Image from 'next/image';
import font from './typography.module.css';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.shadow} />
			<div className={styles['video-view']}>
				<div className={styles.container}>
					<Image
						src='./connected.too_logo.svg'
						alt=''
						width={170}
						height={27.12}
					/>
					<p
						className={`${font.paragraph} ${font.center} ${font['color-white']}`}>
						creative collective in the making. <br /> shaping art and culture.
						<br /> chapter 1 - coming soon.
					</p>
				</div>
			</div>
		</main>
	);
}
