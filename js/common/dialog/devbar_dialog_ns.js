
(function () {
	
	function Dialog(disp) {
		this.constructor.prototype.browseForOpen = function(title, filterText, filter, onSelectHandler) { return disp.browseForOpen(title, filterText, filter, onSelectHandler); };
		this.constructor.prototype.browseForSave = function(title, onSelectHandler) { return disp.browseForSave(title, onSelectHandler); };
	}
	
	blackberry.Loader.javascriptLoaded("blackberry.devbar.dialog", Dialog);
})();
