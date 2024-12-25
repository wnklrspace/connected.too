import { FC } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Image
				src='/ctoo_logo.png'
				alt=''
				width={30}
				height={30}
			/>
		</header>
	);
};

export default Header;
