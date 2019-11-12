import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import Response from '../Response';
import { RecordsHolder } from '../RecordsHolder';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {
  constructor(private rs: RecordsService, public rh: RecordsHolder) { }

  ngOnInit() {
    this.rs.getRecords().subscribe((data: Response) => {
      this.rh.records = data._embedded.records;
    });
  }

  deleteRecord(url) {
    this.rs.deleteRecord(url).subscribe(res => {
      this.rh.records = this.rh.records.filter(record => record._links.self.href != url);
    });
  }
}
