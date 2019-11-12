import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { RecordsService } from '../records.service'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private rs: RecordsService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      engWord: ['', Validators.required ],
      rusWord: ['', Validators.required ]
    });
  }

  addRecord(engWord, rusWord, glossary) {
    this.rs.addRecord(engWord, rusWord, glossary);
    this.angForm.reset();
  }

  ngOnInit() {
  }

}
