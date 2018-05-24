# BlurAdmin Angular admin panel front-end framework

Admin template adapted from blur-admin's https://akveo.github.io/blur-admin/

Uploaded single ASPX page to SharePoint on-premises or Office 365
* script and link tags reference files on localhost

This modified blur-admin template
* Enable CORS
* Ensure that ASPX uploaded to SharePoint during DEV phase
    * retrieves .html view templates via XHR from localhost
    * .PNG and .SVG are from localhost

## Development
1. Start DEV server ```gulp serve```
2. Navigate to localhost:3000
    * Copy ```index.html``` to clipboard
3. Upload this page to document library
4. Perform Replace operation on ```index.html```
   *  | Before                     | After                                        |
      | -------------              |---------------                               | 
      | src="app/                 | src="http:localhost:3000/app/               |
      | href="assets/              | href="http:localhost:3000/assets/            |
      | src="../bower_components/    | src="http:localhost:3000/bower_components/  |


## Production
1. Build the project ```gulp build --prod```
2. Copy files from release folder to document library in SP2013
3. Open index.html
    * Modify variable in global namespace
        * ```window.environmentSettings.type = 'PRODUCTION';```

