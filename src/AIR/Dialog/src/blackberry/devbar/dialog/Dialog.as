package blackberry.devbar.dialog
{        
	import flash.events.Event;
	import flash.utils.*;
	import flash.filesystem.*;
	import flash.net.FileFilter;

    import webworks.extension.DefaultExtension;
	
	public class Dialog extends DefaultExtension
	{
				
		public function Dialog() {
			
			super();
		}

		override public function getFeatureList():Array {
			return new Array ("blackberry.devbar.dialog");

		}
		
		public function browseForOpen(title:String, filterText:String, filter:String, eOnSelect:String):void{
			var file:File = new File();				
			var fileFilter:FileFilter = null;
			
			if(filterText && filterText.length > 0){
				file.browseForOpen(title,[new FileFilter(filterText, filter)]);					 
			}else{
				file.browseForOpen(title);
			}			
			
			file.addEventListener(Event.SELECT,function(event:Event):void{
				var selectedFile:File = event.target as File;
				var array:Array = new Array();					
				
				array[0] = selectedFile.nativePath;
				evalJavaScriptEvent(eOnSelect, array);
			});
		}
		
		public function browseForSave(title:String, eOnSelect:String):void{
			var file:File = new File();				
			
			file.browseForSave(title);
			
			file.addEventListener(Event.SELECT,function(event:Event):void{
				var selectedFile:File = event.target as File;
				var array:Array = new Array();					
				
				array[0] = selectedFile.nativePath;
				evalJavaScriptEvent(eOnSelect, array);
			});
		}
	}
}