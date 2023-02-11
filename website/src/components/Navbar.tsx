import { FaGithub, FaHome } from 'react-icons/fa'

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
						<kbd>Peek it</kbd>
					</li>
				</ul>

				<ul>
					<li>
						<a
							href='https://github.com/Manobal-Singh-Bagady/TRINIT-No_Clue.inc-DEV02.git'
							className='secondary'>
							<FaGithub />
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}
