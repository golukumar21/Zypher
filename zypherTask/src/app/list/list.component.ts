import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private gs: GeneralService) { }
  list: any;

  ngOnInit() {
    this.showList();
  }
  checkboxEvent(e) {
    if (e.currentTarget.checked == true) {
      this.gs.getData().subscribe(res => {
        this.list = res['themes'].filter(function (item) {
          if (item['inHomePage'] == true) {
            return res['themes'];
          }
        })
      });
    } else {
      this.showList();
    }
  }
  showList() {
    this.gs.getData().subscribe(res => {
      this.list = res['themes'];
    });
  }
  itemDetails(e) {
    console.log(e.currentTarget.id);
  }
}
