import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import Response from '../Response';
import Record from '../Record';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { MustMatch } from '../MustMatch'
import { Score } from '../Score';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  records: Record[];
  angForm: FormGroup;
  record: any = {};

  constructor(private fb: FormBuilder, private rs: RecordsService, private sc: Score) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      engWord1: ['', Validators.required ],
      engWord: ['', Validators.required ]
    },
    {
      validator: MustMatch('engWord', 'engWord1')
    });
  }

  ngOnInit() {
    this.rs.getRecords().subscribe((data: Response) => {
      this.records = data._embedded.records;
      this.sc.total = this.records.length;
      this.sc.hit = 0;
      this.sc.fail = 0;
    });
  }

  ngAfterViewChecked() {
    //this doesn't work ! Use checkRecord instead!
    //document.getElementById("formField").addEventListener('onfocusout', this.handleNext.bind(this));
  }

  handleNext() {
    //this doesn't work ! Use checkRecord instead!
    if (!(this.angForm.pristine || this.angForm.invalid)) {
      this.sc.hit++;
    }
    this.angForm.reset();
  }

  checkRecord(answer: string, value: string) {
    this.sc.hit++;
    this.angForm.reset();
    // let nexts = document.getElementsByClassName('pagination-next');
    // if (nexts) {
    //   let next: HTMLElement = nexts[0] as HTMLElement;
    //   next.click();
    // }
  }

  isHidden(id) {
    return document.getElementById(id).classList.contains('hidden')
  }

  showRecord(id) {
    document.getElementById(id).classList.remove("hidden");
    this.sc.fail++;
  }
}
