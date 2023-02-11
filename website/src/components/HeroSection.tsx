const HeroSection = () => {
	return (
		<div className="hero">
			<table>
				<thead>
					<tr>
						<th scope='col'>Rank</th>
						<th scope='col'>Website</th>
						
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope='row'>1</th>
						<td>Cell</td>
					</tr>
					<tr>
						<th scope='row'>1</th>
						<td>Cell</td>
					</tr>
					<tr>
						<th scope='row'>1</th>
						<td>Cell</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<th scope='col'>#</th>
						<td scope='col'>Total</td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}

export default HeroSection
