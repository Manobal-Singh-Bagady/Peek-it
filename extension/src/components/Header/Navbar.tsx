import { FiExternalLink } from 'react-icons/fi'

export default function Navbar() {
	return (
		<>
			<nav>
				<ul>
					<li>
							<img src='/logo.png' alt='logo' width={40} />
					</li>
				</ul>
				<ul>
					<li>
						<kbd>Peek it</kbd>
					</li>
				</ul>
				<ul>
					<li>
						<a title='Website' href='https://peek-it.vercel.app/' target='_blank' className='secondary'>
							<FiExternalLink />
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}
