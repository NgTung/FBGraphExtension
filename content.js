function fireEvent(obj, event){
	var fireOnThis = obj;

	if( document.createEvent ) {
		var evObj = document.createEvent('MouseEvents');

		evObj.initEvent(event, true, false);
		fireOnThis.dispatchEvent(evObj);
	}
}

function splitString (string, pattern) {
	return string.split(pattern);
}

chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
	var dataArr = splitString(data, '&');

	//reset post var fields
	document.getElementById('postvar_list').innerHTML = '';

	for (var i = 0; i < dataArr.length; i++) {
		//add new post var field
		fireEvent(document.getElementById('postvar_add'), 'click');

		// set value
		var postVarWrapper = document.getElementsByClassName('mts postvar');
		var keyField = postVarWrapper[i].getElementsByTagName('input');
		var valueField = postVarWrapper[i].getElementsByTagName('textarea');
		var dataFields = splitString(dataArr[i], '=');

		keyField[0].value = dataFields[0];
		valueField[0].value = dataFields[1];
	}
});