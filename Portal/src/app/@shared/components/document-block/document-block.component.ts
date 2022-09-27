import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-document-block',
  templateUrl: './document-block.component.html',
  styleUrls: ['./document-block.component.scss']
})
export class DocumentBlockComponent implements OnInit {

  @Input() document:any

  youtube:string = ''

  constructor() { }

  ngOnInit(): void {
    if (this.document.lcb_typedocument == 'Video'){
      let youtubeID = this.document.lcb_youtubeurl.split('/').pop()
      this.youtube = "https://www.youtube.com/embed/9i1lJfaITW8" + youtubeID
      console.log(this.youtube)
    }

  }

}
