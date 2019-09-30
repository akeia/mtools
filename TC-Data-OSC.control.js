loadAPI(7);

host.setShouldFailOnDeprecatedUse(true);
host.defineController("AK", "TC-Data-OSC", "0.1", "6e43f030-e2cd-11e9-aaef-0800200c9a66", "AK");
// host.defineMidiPorts(1, );

var connection = null;
var port = 8000;
var voices = 8;
var MAX_VALUE = 1024;

function init()
{
   var oscModule = host.getOscModule ();
   var addressSpace = oscModule.createAddressSpace ();
   addressSpace.setShouldLogMessages (false);
   addressSpace.registerDefaultMethod (function (source, message)
   {
      url = message.getAddressPattern();
      url_segments = url.split('/');

      switch(String(url_segments[1])) {
        case "uparams" :
          arguments = message.getArguments();
          url = message.getAddressPattern();
          value = Math.round( arguments[0]);
          voice = Math.round( arguments[1]);
          device = Math.round(url_segments[2]);
          currentVoice = voice+((device-1)*voices);
        	userControls.getControl(currentVoice).value().set(value, MAX_VALUE);
          break;
        default:
          println ("Unmatched OSC URL: " + url);
      }
   });
   oscModule.createUdpServer (port, addressSpace);
   userControls = host.createUserControls(128);
}

function flush()
{
}

function exit()
{
}
