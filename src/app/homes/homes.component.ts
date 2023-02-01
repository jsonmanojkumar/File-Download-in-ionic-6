import { Component, NgZone, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss'],
})
export class HomesComponent implements OnInit {
  public progress: any = 0;
  progressBar: boolean = false;
  constructor(
    private file: File,
    private fileTransfer: FileTransfer,
    public _zone: NgZone,
    private toastController: ToastController
  ) {

  }

  ngOnInit(): void {

  }

  downloadApp() {
    const fileTransfer = this.fileTransfer.create();
    var path = this.file.externalRootDirectory + '/Download/';
    var url = "https://online.futuregenerali.in/DSR/FgBancaConnectMain.zip";

    fileTransfer.onProgress((progressEvent: ProgressEvent) => {
      this._zone.run(() => {
        if (progressEvent.lengthComputable) {
          let lp = progressEvent.loaded / progressEvent.total * 100;
          this.progress = Math.round(lp * 100) / 100;
        }
      });
      // this.l(this.progress);
      console.log("progress:" + this.progress);
      if (this.progress > 0) {
        this.progressBar = true;
      }
    });

  
    // genrate date and random number rename for file save
    let d = new Date();
    let currentDate = `${d.getFullYear()}-${d.getMonth() + 1}-D-${d.getDate()}-H-${d.getHours()}-M-${d.getMinutes()}-S-${d.getSeconds()}`;
    let random = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;

    fileTransfer.download(url, path + `file${currentDate}.zip`).then((theFile) => {
      console.log("download complete: " + theFile.toURI());
      // alert("File downloaded to " + path);
      if (this.progress == 100) {
        this.presentToast("Download Complete"); 
        this.progress="Download Complete"
        setTimeout(()=>{
          this.progressBar = false;
        },3000)
      }

    }, (err) => {
      alert("Download error " + JSON.stringify(err));
    })

  }


  async presentToast(per) {
    const toast = await this.toastController.create({
      message: per,
      duration: 3000,
      position: 'bottom'
    });
    await toast.present();
  }
}


