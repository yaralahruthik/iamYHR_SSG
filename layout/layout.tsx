import Link from 'next/link';

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<ul>
				<li>
					<Link href='/'>
						<a>Home</a>
					</Link>
				</li>
				<li>
					<Link href='/about'>
						<a>About</a>
					</Link>
				</li>
				<li>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>
				</li>
			</ul>
			<>{children}</>
			<div>Footer</div>
		</>
	);
};

export default Layout;
