# WatchDog

Welcome to the watchdog readme

To run watchdog you will need to do this next steps : 

1: make a "npm install" from folder racine
2: run watchdog with "./Script/watchdog.sh" (always from folder racine)
3: If you have comparison CSS error watchdog create a folder "error" from project racine

Note : If you run watchdog for the first time you will need to run it a second time before you can perform a comparison

Explenation : 
- On the first run watchdog launch cypress and copy his screenshot folder into a new folder "reference".
- On the second run watchdog can make comparison between cypress screenshot and reference folder

Have fun