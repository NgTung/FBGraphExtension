chrome.runtime.onMessage.addListener(function(data, sender, sendResponse) {
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

	var dataArr = splitString(data, '&');

	//reset post var fields
	document.getElementById('postvar_list').innerHTML = '';

	for (var i = 0; i < dataArr.length; i++) {
		//add new post var field
		fireEvent(document.getElementById('postvar_add'), 'click');

		// set value
		var postVarWrapper = document.getElementsByClassName('mts postvar');
		var key = postVarWrapper[i].getElementsByTagName('input');
		var value = postVarWrapper[i].getElementsByTagName('textarea');
		var tmpData = splitString(dataArr[i], '=');

		key[0].value = tmpData[0];
		value[0].value = tmpData[1];
	}
});