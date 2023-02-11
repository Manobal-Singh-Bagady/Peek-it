import { FiExternalLink } from 'react-icons/fi'

export default function Navbar() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<a href='#' className='secondary'>
							<img src='/logo.png' alt='logo' width={40} />
						</a>
					</li>
				</ul>
				<ul>
					<li>
						<strong>Peek it</strong>
					</li>
				</ul>
				<ul>
					<li>
						<a title='Website' href='#' className='secondary'>
							<FiExternalLink />
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}
