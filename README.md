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

- Step 12 - Replace "vendor" word in project to actual vendor name or a placeholder name value.

Note: Vendor is a namespace qualifier, this ensures that artifacts duch as java classes amd the archives in which they are packaged are globally unique.

- Step 13 - Select Edit on the menu

- Step 14 - In the drop down menu from Edit select Replace in Files

- Step 15 - Replace "vendor" to your actual vendor name value or a place holder  
e.g. sapdmc

- Step 16 - Click on Replace All icon. It should replace occurrences in all files. Click OK

- Step 17 - Go to the root components.js file to determine which plugin (e.g. /exampleViewPlugin or /viewPluginTemplate) 
e.g. /projects/test7podplugin/podplugins/webapp/designer/components.json  

```
{
    "components" : [
        {
           "id": "vendorViewPlugin",
           "type": "VIEW_PLUGIN",
           "allowMultipleInstances": false,
           "name": "vendor.ext.viewplugins.exampleViewPlugin",
           "propertyEditor": "vendor.ext.viewplugins.exampleViewPlugin.builder.PropertyEditor",
           "i18n": "vendor.ext.viewplugins.exampleViewPlugin.i18n.i18n",
           "productionProcessEnabled": true,
           "productionProcessTitle": "Example View Plugin",
           "supportedPodTypes": ["WORK_CENTER","OPERATION", "ORDER", "OTHER", "MONITOR"]
        }
    ]
}
```

- Step 17 - Open mta.yaml file and replace <DMC_HOST1> with the host name where POD is located  
e.g. dmc-az-cons-training.test.execution.eu20.dmc.cloud.sap

- Step 18 - Right-click the mta.yaml file and choose Build MTA Project

- Step 19 - The mta_archives folder is created by the Build command

- Step 20 - A mtar file inside mta_archives folder is created by the Build command  
e.g. ExampleViewPluginsMTA_0.0.1.mtar

- Step 21 - The node_modules folder is created with all required dependencies

- Step 22 - Right-click on the generated mtar file and choose Deploy MTA Archive  
e.g. ExampleViewPluginsMTA_0.0.1.mtar

- Step 23 - After deployment is done, your application should be available in your Cloud Foundry space 

- Step 24 - The deployment will generate a link for your live plugin: Application "sapdmc-viewplugin" started and available at "digital-manufacturing-cloud-internal-tenants-dmc-az-###########.######.eu20.hana.ondemand.com"

- Step 25 - To access your application, go to your space in the SAP Cloud Platform cockpit and select Applications from the side menu  
e.g. Digital Manufacturing Cloud Internal Tenants/DMC-AZ-CONSULTING-TRAINING/DMC_DEV/sapdmc-viewplugin

- Step 26 - 

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
i.e. https://digital-manufacturing-cloud-internal-tenants-dmc-az-con3d7b0ede.cfapps.eu20.hana.ondemand.com

- Step 41 - Enter Namespace  
i.e. sapdmc/ext/viewplugins

Note: replace “vendor” for Namespace definition with vendor value you used to “find and replace all”
in SAP Business Application Studio

- Step 42 - Enter Path  
i.e. /podplugins

- Step 43 - select Enable for the Status

- Step 44 - Click Create button and verify that the service was created with correct settings

- Step 45 - Open POD Designer application and choose DEFAULT_WC_POD POD name

- Step 46 - Create a copy of the POD  
i.e. WC_POD_COPY

- Step 47 - Select Activities

- Step 48 - Drag and drop the Action Button from the Controls>Layout menu ################

- Step 49 - Select Configuration by Right clicking the Action Button #############

- Step 50 - Enter Text  ##################
i.e. Start/Complete

- Step 51 - Select icon  ##############
i.e. sap-icon://Action

- Step 52 - Click on Assign Applications #############

- Step 53 - Click on Add #############

- Step 54 - Select the plugin from the Type Definition box

- Step 55 - Click Create

- Step 56 - Close prior window

- Step 57 - Click Save

- Step 58 - Click the Preview  button (eye glasses icon)

- Step 59 - Select PRINTER_A under resource

- Step 60 - Select DMC_PRIN under Work center

- Step 61 - Click on the SFC text box and clcik the Go button to populate Work List

- Step 62 - Select any FSC

- Step 63 - You will be back in the POD viewing your selction

- Step 64 - Click on Example View Plugin



(Optional) Step 65 - If you do not see any changes to the plugin after re-building and re-deploying it this may be do to the browser cache. Clearing it will solved this or adding the following code in your index.html  
```
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Expires" content="0" />
```