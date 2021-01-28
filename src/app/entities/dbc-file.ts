export class DbcFileEntry{
    path:string;
    name:string;
    base64encoded:string;
}

export class DbcFile {
    name: string;
    size: number;
    entries: {[key:string]:DbcFileEntry} = {}
}
