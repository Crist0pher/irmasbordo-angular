import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-midia',
  templateUrl: './midia.component.html',
  styleUrls: ['./midia.component.css']
})
export class MidiaComponent implements OnInit {

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
