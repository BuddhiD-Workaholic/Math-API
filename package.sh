#!/bin/bash

node --version | grep "v" &> /dev/null 
if [ $? == 0 ]; then 
 echo "======== Node Installed! ========"
else 
 echo "======== Node is not installed! ========" 
 exit 1;
fi

#Enter the names of the packages to the array --> declare -a pkgNames=("express" "cheerio")
declare -a pkgNames=("express")


for package in ${pkgNames[@]}; do
    if [ `npm list | grep -c $package` -eq 0 ]; then
        echo "-------- Package "\"$package\"" is installing! --------"    
        npm install $package --no-shrinkwrap
    else 
        echo "Package "\"$package\"" is already installed!"    
    fi
done

echo "======== Script executions is complted! ========"