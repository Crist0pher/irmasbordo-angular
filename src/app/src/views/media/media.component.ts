import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {

  constructor() { }
  files: any = [1];
  ngOnInit(): void {
    console.log(this.files)
  
  }

  onFileSelected(event: any) {

    this.files = event.target.files
    console.log(this.files)

  }


}
