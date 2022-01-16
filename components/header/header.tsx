import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import logo from '../../public/yhr.png';
import classes from './header.module.css';

const Header: React.FC = () => {
	const router = useRouter();
	const currentPath = router.pathname;

	return (
		<header className={classes.container}>
			<Link href='/'>
				<a className={classes.logoContainer}>
					<Image
						src={logo}
						alt='Author Initials'
						blurDataURL='Logo'
						placeholder='blur'
					/>
				</a>
			</Link>
			<ul className={classes.nav}>
				<li className={classes.link}>
					<Link href='/about'>
						<a>About</a>
					</Link>
				</li>
				<li className={classes.link}>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
