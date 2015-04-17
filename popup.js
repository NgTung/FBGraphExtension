function click (e) {
	var error = document.getElementById('error');
	var inputText = document.getElementById('str').value;

	if (inputText.trim() == '') {
		error.innerHTML = 'Please input correct string';
		error.style.display = "block";
	} else {
		chrome.extension.sendMessage(null, {
            data: formatString(inputText)
        });

	  	window.close();
	}
}

function formatString (string) {
	return string.replace(/'/g, '"');
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('submit').addEventListener('click', click);
});