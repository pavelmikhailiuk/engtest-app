import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordsService } from '../records.service';
import { RecordsHolder } from '../RecordsHolder';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  angForm: FormGroup;
  record: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private rs: RecordsService, private fb: FormBuilder, public rh: RecordsHolder) {
      this.createForm();
 }

  createForm() {
    this.angForm = this.fb.group({
      engWord: ['', Validators.required ],
      rusWord: ['', Validators.required ],
      glossary: ['', Validators.required ]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.rs.editRecord(params['id']).subscribe(res => {
          this.record = res;
      });
    });
  }

  updateRecord(engWord, rusWord, glossary) {
    this.route.params.subscribe(params => {
      this.rs.updateRecord(engWord, rusWord, glossary, params.id);
      let index = this.rh.records.findIndex(elem => elem.id == params.id);
      let record = this.rh.records[index];
      record.engWord = engWord;
      record.rusWord = rusWord;
      record.glossary = glossary;
      this.router.navigate(['records']);
    });
  }
}
