WebWorks-Devbar-FileDialog
===============

This is an extension for Blackberry WebWorks written in ActionScript. You can trigger a FileDialog for opening or saving files from JavaScript. This extension will work with Blackberry Playbook and (maybe) with Blackberry OS 10.

How to use
---------------
1. Copy the whole tree of the project to <SDK-Directory>\ext\blackberry.devbar.dialog (i.g. D:\SDK\BlackBerry WebWorks SDK for TabletOS 2.2.0.5\bbwp\ext\blackberry.devbar.dialog)
2. Append the corresponding feature id to the config.xml of your project
```xml
<feature id="blackberry.devbar.dialog" />
```

3. Allow your application to access local filesystem
```xml
<rim:permissions>
  ...
  <rim:permit>access_shared</rim:permit>
  ...
</rim:permissions>
```

4. Trigger from code
```javascript
blackberry.devbar.dialog.browseForOpen("Select Image", "Images", "*.jpg;*.png;*.bmp;*.gif", function (data) {
  alert(data); // show url to file
});
```

Happy Coding!
