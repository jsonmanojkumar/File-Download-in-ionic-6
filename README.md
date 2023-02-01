# File-Download-in-ionic-6
How to download file in ionic 6

#1: Install Plugin

    A. ionic cordova plugin add cordova-plugin-file-transfer
    B. npm install --save @ionic-native/file-transfer
    
#2: Import file and filetransfer plugin in app.Module.ts file.

    import { File } from '@ionic-native/file/ngx';
    import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
    
    providers: [
    File,
    FileTransfer,
    ]
 #3: import in your component also.
 
     A. import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
     B. import { ToastController } from '@ionic/angular';
     C. import { Component, NgZone, OnInit } from '@angular/core';
     
#5: then build your app using this cmd.

    ionic cordova build android
    
 #6 If you got Error whitelist plugin in filetransfer.java file change these lines Whitelist to AllowList.
 
      // replace
     import org.apache.cordova.Whitelist;

     import org.apache.cordova.AllowList;

    // Replace
    Whitelist whitelist = (Whitelist)gwl.invoke(webView);
    shouldAllowRequest = whitelist.isUrlWhiteListed(source); 

    AllowList whitelist = (AllowList)gwl.invoke(webView);
    shouldAllowRequest = whitelist.isUrlAllowListed(source); 
#7: and then Remove plateform and then add.
    then it's work fine 
#8: then build your app using this cmd.
    ionic cordova build android

