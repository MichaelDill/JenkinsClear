// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg === 'cleanSlate') {
		document.querySelectorAll('.setting-input')
		.forEach(function(item){item.value = ""});
    }
});