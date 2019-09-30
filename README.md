# mtools
Scripts and snippets for music tools and automation

## TC-Data-OSC.controls.js Module
Bitwig OSC script for using the [TC-Data](https://bitshapesoftware.com/instruments/tc-data/) iOS controller app with channels. Script needs to go into Bitwig "Controller Scripts" directory. The OSC URL /uparams/{1-8} [(float)value (float)channel{1-8}] (f.e. /uparam/1 [400.0 0.0]) will be automatable as Bitwig user parameters. Different finger touches will be recognized as different automation parameters. 
