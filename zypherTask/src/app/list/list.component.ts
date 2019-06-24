import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private gs: GeneralService, private router: Router) { }
  list: any;

  ngOnInit() {
    this.showList();
  }
  checkboxEvent(e: { currentTarget: { checked: boolean; }; }) {
    if (e.currentTarget.checked == true) {
      this.gs.getData().subscribe(res => {
        this.list = res['themes'].filter(function (item: { [x: string]: boolean; }) {
          if (item['inHomePage'] == true) {
            return res['themes'];
          }
        });
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
  itemDetails(e: { currentTarget: { id: any; }; }) {
    this.router.navigate(['/list_details', e.currentTarget.id]);
  }
}
