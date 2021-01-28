import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dbcview',
  templateUrl: './dbcview.component.html',
  styleUrls: ['./dbcview.component.scss']
})
export class DbcviewComponent implements OnInit {

  dbcViewForm = this.formBuilder.group({
    url:''
  });

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit() {
  }

  onChangeUrl() : void{
    console.warn('Your order has been submitted', this.dbcViewForm.value);
    console.log(this.dbcViewForm.value["url"]);
    this.dbcViewForm.reset();
  }

}
