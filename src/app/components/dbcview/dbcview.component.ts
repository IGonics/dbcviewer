import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ZipExtractorService } from 'src/app/services/zip-extractor.service';
import { DbcFileEntry, DbcFile } from 'src/app/entities/dbc-file';
import { DbcPreviewService } from 'src/app/services/dbc-preview.service';

@Component({
  selector: 'app-dbcview',
  templateUrl: './dbcview.component.html',
  styleUrls: ['./dbcview.component.scss']
})
export class DbcviewComponent implements OnInit {
 
  dbcViewForm = this.formBuilder.group({
    url:'https://github.com/solliancenet/microsoft-learning-paths-databricks-notebooks/blob/master/data-engineering/DBC/01-Introduction-to-Azure-Databricks.dbc?raw=true'
  });

  constructor(
    private formBuilder : FormBuilder,
    private zipExtractorService: ZipExtractorService,
    private previewService : DbcPreviewService
  ) { }



  ngOnInit() {
  }

  files: any = [];
  entries: string[] = [];
  lastDbcFile : DbcFile;

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files=[];
      this.files.push(element.name)
      console.log(this.files)
      console.log(element);
      try{
        console.log("Extracting")
         this.zipExtractorService.extractFromBlob(element)
         .then(dbcFile=> {
           console.log(dbcFile)
           this.lastDbcFile = dbcFile;
           this.entries = [];
           this.entries = Object.keys(dbcFile.entries);
         })
         .catch(err=>{
           console.error("Error processing",err)
         })
      }catch(e){
        console.error(e)
      }
    }  
  }
  
  

  url:string="data:text/html,Choose a File to Preview";

  showNotebook(name){
    const encoded = this.lastDbcFile.entries[name].base64encoded;
    
    this.url = this.previewService.getPreviewDataUri(encoded);
    
  }

}
