import Loader from './componenets/Loader'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Emission() {
	const [url, setUrl] = useState('')

	useEffect(() => {
		chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			setUrl(tabs[0].url || 'Default URL')
		})
	}, [])

	const encodedURL = encodeURIComponent(url)

	console.log(`https://api.websitecarbon.com/site?url=${encodedURL}`)

	const [pageEnergy, setPageEnergy] = useState(0)
	const [pageCO2, setPageCO2] = useState(0)
	const [pageColor, setPageColor] = useState('')
	const [loading, setLoading] = useState(false)
	axios
		.get(`https://api.websitecarbon.com/site?url=${encodedURL}`)
		.then((res) => {
			// console.log(res.data)
			setPageEnergy(res.data.statistics.energy)
			setPageCO2(res.data.statistics.co2.grid.grams)
			if (res.data.statistics.co2.grid.grams < 0.58) {
				setPageColor('green')
			} else if (res.data.statistics.co2.grid.grams < 1.0) {
				setPageColor('yellow')
			} else {
				setPageColor('red')
			}
			setLoading(true)
		})
		.catch((err) => {
			console.log(err)
		})

	return (
		<div className='Emission'>
			{loading ? <span></span> : <Loader />}
			{url}
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
					{/* <article>
						<header>
							<span className='small'>Emissions by you till now:</span>
						</header>
						000
					</article> */}
				</div>
			</div>
		</div>
	)
}
