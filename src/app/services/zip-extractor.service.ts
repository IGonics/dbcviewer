import { Injectable } from '@angular/core';
import *  as zip from '@zip.js/zip.js';

import { DbcFile, DbcFileEntry } from '../entities/dbc-file';


@Injectable({
  providedIn: 'root'
})
export class ZipExtractorService {

  constructor() { 

  }

  protected extractFromReader(myReader : zip.Reader, name:string)  : Promise<DbcFile> {
     
    const reader = new zip.ZipReader(myReader);
    var dbcFile = new DbcFile();
    dbcFile.name = name;
    dbcFile.size = myReader.size;
    return reader.getEntries().then((allEntries: zip.Entry[]) => {
      const entries = allEntries.filter(entry => !entry.directory || entry.filename[entry.filename.length-1] != '/' );
      const entriesData = entries
        .map(entry => entry.getData(
          // writer
          new zip.TextWriter(),
          // options
          {
            onprogress: (index, max) => {
              // console.log("getting data from "+entry.filename+" : "+(index/max * 100)+"%")
              // onprogress callback
            }
          }
        ));
      return Promise.all(entriesData).then((entriesDataAsText: string[]) => {
        for (var i = 0; i < entries.length; i++) {
          const entry = entries[i];
          // console.log("Debug Entry",entry)
          var dbcFileEntry = new DbcFileEntry();
          dbcFileEntry.base64encoded = btoa(entriesDataAsText[i]);
          dbcFileEntry.name = entry.filename;
          dbcFileEntry.path = entry.filename;
          dbcFile.entries[entry.filename] = dbcFileEntry;

        }
        return dbcFile;
      })




    });
  }

  

  extractFromBlob(blob : Blob): Promise<DbcFile> {
     return this.extractFromReader(new zip.BlobReader(blob),null);
  }
}
