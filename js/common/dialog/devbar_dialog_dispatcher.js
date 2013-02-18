/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
(function () {
	var DIALOG_FILE_API_URL = "blackberry/devbar/dialog";
	
	var ARGS_TITLE = "title";
	var ARGS_FILTER_TEXT = "filterText";
	var ARGS_FILTER = "filter";
	
	var ARGS_ON_SELECT_HANDLER_ID = "eOnSelect";
	
	function validateRequiredParameters(title) {
		if(!title) {
			throw new Error("Required argument missing: title.");
		}		
	}	
	
	function generateRequestSave(title, onSelectId) {
		var remoteCall = new blackberry.transport.RemoteFunctionCall(DIALOG_FILE_API_URL + "/browseForSave");
		remoteCall.addParam(ARGS_TITLE, title); 
		remoteCall.addParam(ARGS_ON_SELECT_HANDLER_ID, onSelectId);
				
	    return remoteCall;
	}
	
	function generateRequestOpen(title, filterText, filter, onSelectId) {
		var remoteCall = new blackberry.transport.RemoteFunctionCall(DIALOG_FILE_API_URL + "/browseForOpen");
		remoteCall.addParam(ARGS_TITLE, title); 
		remoteCall.addParam(ARGS_FILTER_TEXT, filterText);
		remoteCall.addParam(ARGS_FILTER, filter);
		remoteCall.addParam(ARGS_ON_SELECT_HANDLER_ID, onSelectId);
				
	    return remoteCall;
	}
	
	function requestDialogSave(title, onSelectHandler) {
		validateRequiredParameters(title);
		
		var onSelectId = blackberry.events.registerEventHandler("onSelectSave", onSelectHandler);
		
		return generateRequestSave(title, onSelectId);
	}
	
	function requestDialogOpen(title, filterText, filter, onSelectHandler) {
		validateRequiredParameters(title);
		
		var onSelectId = blackberry.events.registerEventHandler("onSelectOpen", onSelectHandler);
		
		return generateRequestOpen(title, filterText, filter, onSelectId);
	}
	
	function Dialog() {
	}
	
	Dialog.prototype.browseForOpen = function(title, filterText, filter, onSelectHandler) {		
		requestDialogOpen(title, filterText, filter, onSelectHandler).makeSyncCall();
	};
	
	Dialog.prototype.browseForSave = function(title, onSelectHandler) {		
		requestDialogSave(title, onSelectHandler).makeSyncCall();
	};

	blackberry.Loader.javascriptLoaded("blackberry.devbar.dialog", Dialog);	
})();