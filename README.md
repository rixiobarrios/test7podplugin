# DMC UX UI5 BAS UC

## UX Examples and Templates for View Plugins

- Step 1 - Go to Business Application Studio (BAS)

[Your Business Application Studio environment](https://dmc-az-cons-training.eu20cf.applicationstudio.cloud.sap/index.html)

- Step 2 - Enter a new Dev Space  
e.g DMCPlugin

- Step 3 - Use example file plugin

- Step 4 - Open from local file or download from repository

- Step 5 - To download from repo select Clone from Git on Business Application Studio window  
e.g. https://github.com/SAP-samples/digital-manufacturing-extension-samples.git

- Step 6 - Enter your github credentials starting with your user name if asked

- Step 7 - Enter your github password or personal access token if asked

- Step 8 - Open new window for cloned repository

- Step 9 - Chose Files & Folders 

- Step 10 - Navigate to dm-podplugin-extensions/ViewPodPluginTemplate_And_Example/project/ViewPodPlugin/ folder and click Open button

- Step 11 - Click on podplugins folder to see the file tree inside internal

- Step 12 - Replace "sapdmc" word in project to actual sapdmc name or a placeholder name value.

Note: sapdmc is a namespace qualifier, this ensures that artifacts duch as java classes amd the archives in which they are packaged are globally unique.

- Step 13 - Select Edit on the menu

- Step 14 - In the drop down menu from Edit select Replace in Files

- Step 15 - Replace "sapdmc" to your actual sapdmc name value or a place holder  
e.g. sapdmc

- Step 16 - Click on Replace All icon. It should replace occurrences in all files. Click OK

- Step 17 - Go to the root components.js file to determine which plugin (e.g. /exampleViewPlugin or /viewPluginTemplate) 
e.g. /projects/test7podplugin/podplugins/webapp/designer/components.json  

```
{
    "components" : [
        {
           "id": "sapdmcViewPlugin",
           "type": "VIEW_PLUGIN",
           "allowMultipleInstances": false,
           "name": "sapdmc.ext.viewplugins.exampleViewPlugin",
           "propertyEditor": "sapdmc.ext.viewplugins.exampleViewPlugin.builder.PropertyEditor",
           "i18n": "sapdmc.ext.viewplugins.exampleViewPlugin.i18n.i18n",
           "productionProcessEnabled": true,
           "productionProcessTitle": "Example View Plugin",
           "supportedPodTypes": ["WORK_CENTER","OPERATION", "ORDER", "OTHER", "MONITOR"]
        }
    ]
}
```

- Step 18 - Open mta.yaml file and replace <DMC_HOST1> with the host name where POD is located  
e.g. dmc-az-cons-training.test.execution.eu20.dmc.cloud.sap

- Step 19 - Right-click the mta.yaml file and choose Build MTA Project

- Step 20 - The mta_archives folder is created by the Build command

- Step 21 - A mtar file inside mta_archives folder is created by the Build command  
e.g. ExampleViewPluginsMTA_0.0.1.mtar

- Step 22 - The node_modules folder is created with all required dependencies

- Step 23 - Right-click on the generated mtar file and choose Deploy MTA Archive  
e.g. ExampleViewPluginsMTA_0.0.1.mtar

- Step 24 - After deployment is done, your application should be available in your Cloud Foundry space 

- Step 25 - The deployment will generate a link for your live plugin: Application "sapdmc-viewplugin" started and available at "digital-manufacturing-cloud-internal-tenants-dmc-az-###########.######.eu20.hana.ondemand.com"

- Step 26 - To access your application, go to your space in the SAP Cloud Platform cockpit and select Applications from the side menu  
e.g. Digital Manufacturing Cloud Internal Tenants/DMC-AZ-CONSULTING-TRAINING/DMC_DEV/sapdmc-viewplugin

- Step 27 - Application will be available under the Application Routes as a link  
e.g. https://digital-manufacturing-cloud-internal-tenants-dmc-az-con3d7b0ede.cfapps.eu20.hana.ondemand.com

- Step 28 - Choose a sapdmc-viewplugin application to see details and status

- Step 29 - The application should have the "Started" status

- Step 30 - Click on Application Routes URL to verify that the application was deployed successfully

- Step 31 - Copy application route URL as it will be used in Manage Service Registry

- Step 32 - Login to your DMC tenants

- Step 33 - Open the Manage Service Registry application

- Step 34 - Select UI Extensions tab

- Step 35 - Select Create button

- Step 36 - Define new UI Extension with the following settings as below:

- Step 37 - Enter Name  
i.e. exampleViewPlugin

- Step 38 - Enter Description  
i.e. View POD plugin ExampleViewPlugins

- Step 39 - Select POD Plugin Type

- Step 40 - Enter URL  
i.e. digital-manufacturing-cloud-internal-tenants-dmc-az-con287e144e.cfapps.eu20.hana.ondemand.com

- Step 41 - Enter Namespace  
i.e. sapdmc/ext/viewplugins

Note: replace “sapdmc” for Namespace definition with sapdmc value you used to “find and replace all”
in SAP Business Application Studio

- Step 42 - Enter Path  
i.e. /podplugins

- Step 43 - select Enable for the Status

- Step 44 - Click Create button and verify that the service was created with correct settings

- Step 45 - Open POD Designer application and choose DEFAULT_WC_POD POD name

- Step 46 - Create a copy of the POD  
i.e. WC_POD_COPY

- Step 47 - Search under Plugins  
e.g. Example View Plugin

- Step 47 - Select Activities

- Step 48 - Drag and drop "Example View Plugin" into the plugin panel on the right

- Step 49 - Click Save

- Step 50 - Click the Preview  button (eye glasses icon)

- Step 51 - Select PRINTER_A under resource

- Step 52 - Select DMC_PRIN under Work center

- Step 53 - Click on the SFC text box and click the Go button to populate Work List

- Step 54 - Select any FSC

- Step 55 - You will be back in the POD viewing your selction

- Step 56 - Click on Example View Plugin

There should be information for the current operation in the work center.

(Optional) Step 57 - If you do not see any changes to the plugin after re-building and re-deploying it this may be do to the browser cache. Clearing it will solved this or adding the following code in your index.html  
```
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```
Note: If you are still not seeing your changes in the POD:  
a. Clear your browser's cache  
b. Open a new incognito or InPrivate window in your browser  
c. Remove your plugin from the POD, save your POD and add your plugin back, then save  
d. Try Cache Buster [here](https://help.sap.com/docs/SAP_NETWEAVER_740/468a97775123488ab3345a0c48cadd8f/91f080966f4d1014b6dd926db0e91070.html?version=7.4.23)  