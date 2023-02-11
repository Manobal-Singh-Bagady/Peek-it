import { useEffect, useState } from 'react'

export default function Emission() {
	const [pageEnergy, setPageEnergy] = useState(0)
	const [pageCO2, setPageCO2] = useState(0)
	const [pageColor, setPageColor] = useState('')
	useEffect(() => {
		fetch('https://api.websitecarbon.com/site?url=https%3A%2F%2Fwww.github.com')
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				setPageEnergy(data.statistics.energy)
				setPageCO2(data.statistics.co2.grid.grams)
				if (data.statistics.co2.grid.grams < 1.1) {
					setPageColor('green')
				} else if (data.statistics.co2.grid.grams < 2.05) {
					setPageColor('yellow')
				} else {
					setPageColor('red')
				}
			})
			.catch((err) => console.log(err))
	}, [])

	return (
		<div className='Emission'>
			<div className='container-fluid'>
				<b className=''>Carbon Emissions :</b>
				<article style={{ backgroundColor: pageColor }}>
					This page is <span>{pageColor}</span>.
				</article>
				<div className='grid'>
					<article>
						<header>
							<span className='small'>Emissions on this page:</span>
						</header>
						Energy Consumed: <span style={{ color: 'red' }}>{pageEnergy}</span> KW
						<br />
						CO2 Emissions: <span style={{ color: 'red' }}>{pageCO2}</span> g
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
