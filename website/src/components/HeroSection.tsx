import { BsLink45Deg } from 'react-icons/bs'

const HeroSection = () => {
	return (
		<div className='hero'>
			<div className='container-fluid'>
				<h6>
					<u>The Worst websites(based on carbon emission in single visit)</u>
				</h6>
				<table>
					<thead>
						<tr>
							<th scope='col'>Rank</th>
							<th scope='col'>Website</th>
							<th scope='col'>Links</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row'>1</th>
							<td>DailyMail</td>
							<td>
								<a href='https://www.dailymail.co.uk/home/index.html'>
									<BsLink45Deg />
								</a>
							</td>
						</tr>
						<tr>
							<th scope='row'>2</th>
							<td>Reddit</td>
							<td>
								<a href='https://www.reddit.com/'>
									<BsLink45Deg />
								</a>
							</td>
						</tr>
						<tr>
							<th scope='row'>3</th>
							<td>Slack</td>
							<td>
								<a href='https://slack.com/intl/en-in'>
									<BsLink45Deg />
								</a>
							</td>
						</tr>
						<tr>
							<th scope='row'>4</th>
							<td>Brazil Government</td>
							<td>
								<a href='https://www.gov.br/en/government-of-brazil'>
									<BsLink45Deg />
								</a>
							</td>
						</tr>
						<tr>
							<th scope='row'>5</th>
							<td>Bath and body Works</td>
							<td>
								<a href='https://www.bathandbodyworks.in/'>
									<BsLink45Deg />
								</a>
							</td>
						</tr>
					</tbody>
				</table>
				<h6>
					<u>The best Websites</u>
				</h6>
				<table>
					<thead>
						<tr>
							<th scope='col'>Rank</th>
							<th scope='col'>Website</th>
							<th scope='col'>Links</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope='row'>1</th>
							<td>Instagram</td>
							<td>
								<a href='https://www.instagram.com/'>
									<BsLink45Deg />
								</a>
							</td>
						</tr>
						<tr>
							<th scope='row'>2</th>
							<td>Telegraph</td>
							<td>
								<a href='https://www.telegraphindia.com/'>
									<BsLink45Deg />
								</a>
							</td>
						</tr>
						<tr>
							<th scope='row'>3</th>
							<td>DpBoss</td>
							<td>
								<a href='https://dpboss.net/'>
									<BsLink45Deg />
								</a>
							</td>
						</tr>
						<tr>
							<th scope='row'>4</th>
							<td>Sogou</td>
							<td>
								<a href='https://www.sogou.com/'>
									<BsLink45Deg />
								</a>
							</td>
						</tr>
						<tr>
							<th scope='row'>5</th>
							<td>Uk Government</td>
							<td>
								<a href='https://www.gov.uk/'>
									<BsLink45Deg />
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default HeroSection
