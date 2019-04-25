#!/bin/bash

error="error/"
folder="folder/"
output=""
lenghtNormalMessage="47"

mkdir $folder
mkdir $error

for file in $(ls $1)
do
   DATE=`date '+%Y-%m-%d_%H-%M-%S'`
   compareOutput=$(pixelmatch $1/$file $2/$file $folder$file-$DATE 0.1)
   size=${#compareOutput}

   if (($size>$lenghtNormalMessage));
   then
       output+="Error : *"$compareOutput"*"
       mv folder/$file-$DATE $error$file-$DATE
   fi
done

rm -r $folder

echo $output
