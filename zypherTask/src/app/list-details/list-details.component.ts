import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../general.service';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {

  constructor(private gs: GeneralService, private route: ActivatedRoute) { }
  id: number;
  private sub: any;
  itemDetails: any;
  gId: any;

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
    });
    this.showListDetails();
  }

  showListDetails() {
    debugger;
    this.gs.getData().subscribe( res => {
      
    })
  }
}
