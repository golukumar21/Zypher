import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeneralService } from '../../general.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss']
})
export class ListDetailsComponent implements OnInit {

  constructor(private gs: GeneralService, private route: ActivatedRoute, private spinner: NgxSpinnerService) { }
  id: number;
  private sub: any;
  itemDetails: any;
  gId: any;
  items: any;
  public loading = false;
  noDetails: boolean = false;

  ngOnInit() {
    // this.spinner.show();

    this.loading = true;

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
    });
    this.gId = this.id
    this.showListDetails(this.gId);
  }

  showListDetails(arg) {
    
    this.gs.getData().subscribe( res => {
      this.itemDetails = res['themes'].filter(function(el) {
        return el._id == arg;
      });
      if(this.itemDetails[0].books.length) {
        this.items = this.itemDetails[0].books;
      } else {
        this.noDetails = true;
      }
      this.loading = false;
    });
  }
}
