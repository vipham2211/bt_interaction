import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {

  data:any;

nhanThongTin(event){
      this.data= event;
}



  constructor() { }

  ngOnInit() {
    
  }

}
