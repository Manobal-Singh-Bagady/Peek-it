// Estimate the carbon footprint of a website based on its size and usage
function estimateCarbonFootprint(websiteSize, usageTime) {
	// Assume that the energy consumption of the website is proportional to its size
	var energyConsumption = websiteSize * 0.001 // in kWh

	// Assume that the energy consumption of the website results in a certain amount of CO2 emissions
	var carbonFootprint = energyConsumption * 0.5 // in kg CO2

	return carbonFootprint
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.type === 'calculateCarbonFootprint') {
		// Calculate the carbon footprint of the current website
		var websiteSize = request.websiteSize
		var usageTime = request.usageTime
		var carbonFootprint = estimateCarbonFootprint(websiteSize, usageTime)

		// Send the result back to the popup
		sendResponse({ carbonFootprint: carbonFootprint })
	}
})
