import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api';
@Component({
  selector: 'app-upload-demo',
  templateUrl: './upload-demo.component.html',
  styleUrls: ['./upload-demo.component.css']
})
export class UploadDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  msgs: Message[];

  uploadedFiles: any[] = [];

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

}
