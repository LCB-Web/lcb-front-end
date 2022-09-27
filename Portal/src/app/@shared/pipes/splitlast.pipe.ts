import {Pipe, PipeTransform} from "@angular/core";

@Pipe({ name: 'splitLast' })
export class SplitLastPipe implements PipeTransform {
  transform(value:string, [separator]:[any]):string {
    let splits:any = value.split(separator);
    if(splits.length > 1) {
      return splits.pop();
    } else {
      return '';
    }
  }
}
