import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ZipExtractorService } from 'src/app/services/zip-extractor.service';

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
    private formBuilder : FormBuilder,
    private zipExtractorService: ZipExtractorService
  ) { }

  ngOnInit() {
  }

  onChangeUrl() : void{
    console.warn('Your order has been submitted', this.dbcViewForm.value);
    console.log(this.dbcViewForm.value["url"]);
    try{
      console.log("Extracting")
       this.zipExtractorService.extractFromUrl(this.dbcViewForm.value["url"])
       .then(dbcFile=> console.log(dbcFile))
       .catch(err=>{
         console.error("Error processing",err)
       })
    }catch(e){
      console.error(e)
    }
    this.dbcViewForm.reset();
  }

}
