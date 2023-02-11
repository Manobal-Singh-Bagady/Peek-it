import { useEffect, useState } from 'react'

export default function Emission() {
	const [pageEmission, setPageEmission] = useState(0)

	useEffect(() => {
		fetch('https://api.websitecarbon.com/site?url=https%3A%2F%2Fwww.github.com')
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setPageEmission(data.statistics.energy)
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<div className='Emission'>
			<div className='container-fluid'>
				<b className=''>Carbon Emissions :</b>
				<div className='grid'>
					<article>
						<header>
							<span className='small'>Emissions on this page:</span>
						</header>
						Energy Consumed: <span style={{ color: 'red' }}>{pageEmission}</span> KW
					</article>
					<article>
						<header>
							<span className='small'>Emissions by you till now:</span>
						</header>
						000
					</article>
				</div>
			</div>
		</div>
	)
}
