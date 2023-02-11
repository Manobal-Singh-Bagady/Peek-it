chrome.action.onClicked.addListener(function(tab) {
    console.log('Turning ' + tab.url + ' red!');
  });