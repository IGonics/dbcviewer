import { Injectable } from '@angular/core';
import *  as zip from '@zip.js/zip.js';

import { DbcFile, DbcFileEntry } from '../entities/dbc-file';


@Injectable({
  providedIn: 'root'
})
export class ZipExtractorService {

  constructor() { 
    
    zip.configure({
      useWebWorkers: false,
      
    });
  }

  extractFromUrl(url): Promise<DbcFile> {
    const httpReader = new zip.HttpReader(url);
    const reader = new zip.ZipReader(httpReader);
    var dbcFile = new DbcFile();
    dbcFile.name = url;
    dbcFile.size = httpReader.size;
    return reader.getEntries().then((entries: zip.Entry[]) => {
      const entriesData = entries.filter(entry => !entry.directory)
        .map(entry => entry.getData(
          // writer
          new zip.TextWriter(),
          // options
          {
            onprogress: (index, max) => {
              // onprogress callback
            }
          }
        ));
      return Promise.all(entriesData).then((entriesDataAsText: string[]) => {
        for (var i = 0; i < entries.length; i++) {
          const entry = entries[i];
          console.log("Debug Entry",entry)
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
}
