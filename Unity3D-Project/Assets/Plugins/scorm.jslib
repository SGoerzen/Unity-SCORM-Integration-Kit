var ScormWebGL = {

   wgldebugPrint : function (str) 
   {
    DebugPrint(Pointer_stringify(str));
   },

   wgldoIsScorm2004 :  function (objectname,callbackname,randomnumber) 
   {
    doIsScorm2004(Pointer_stringify(objectname),Pointer_stringify(callbackname),randomnumber);
   },

   wgldoGetValue :  function (identifier,CallbackObjectName,CallbackFunctionName,key) 
   {
    doGetValue(Pointer_stringify(identifier),Pointer_stringify(CallbackObjectName),Pointer_stringify(CallbackFunctionName),key);
   },

   wgldoSetValue :  function (identifier,value,CallbackObjectName,CallbackFunctionName,key) 
   {
    doSetValue(Pointer_stringify(identifier),Pointer_stringify(value),Pointer_stringify(CallbackObjectName),Pointer_stringify(CallbackFunctionName),key);
   },

   wgldoCommit : function () 
   {
    doCommit();
   },

   wgldoTerminate : function () 
   {
    doTerminate();
   },

};

mergeInto(LibraryManager.library, ScormWebGL);