#!/bin/bash
reference="reference/"
cypressScreen="cypress/screenshots/watchdog.js"
error="error/"
compare="./Script/compare.sh"

#Run cypress
cypress="./node_modules/.bin/cypress run --browser chrome"
eval $cypress

#!isExist folder reference
if [ ! -d "$reference" ]; then
    mv $cypressScreen $reference
    echo "You don't have reference folder in your project, we created it for you and copied cypress's result inside"
    echo "You will need to relaunch watchdog for check CSS comparison"
else
    #delete folder error if exist
    if [ -d "$error" ]; then
        rm -r error
    fi

    #run comparison and create folder error if needed
    output=$($compare $cypressScreen $reference)
    output=${output//"*"/"\n"}

    #new reference
    rm -r $reference
    mv $cypressScreen $reference

    #output
    echo -e $output
fi
