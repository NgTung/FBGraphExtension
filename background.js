chrome.extension.onMessage.addListener(function(message, sender, sendResponse) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, message.data);
	});
});