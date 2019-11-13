#!/bin/bash

# terminate on failure
set -e

resourceGroup=report-Inspection-Resources
webappname=inspection-report-app

echo Creating a resource group called $resourceGroup.
az group create --location westeurope --name $resourceGroup
echo ------------------------------resource group created-------------------------------

echo Create an App Service plan in FREE tier.
az appservice plan create --name $webappname --resource-group $resourceGroup --sku FREE
echo ------------------------------plan created-----------------------------------------

echo Creating a web app called $webappname. With local git deployment enable to allow Travis CI to connect.
az webapp create --name $webappname --resource-group $resourceGroup --plan $webappname --deployment-local-git
echo ------------------------------webapp created---------------------------------------

echo Copy the following url into your browser:
echo http://$webappname.azurewebsites.net

echo -----------------------------------------------------------------------------------
echo To connect Azure with Travis you need to:

echo "* set your webapp deployment creddentials"
echo "Use this command: az webapp deployment user set --user-name <username> --password <password>"
echo
echo "* set your webapp deployment creddentials as Environment Variables in GitHub"



