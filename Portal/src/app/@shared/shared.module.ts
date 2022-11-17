import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NieuwsBlockComponent } from './components/nieuws-block/nieuws-block.component';
import { RouterModule } from "@angular/router";
import { ThemaBlockComponent } from './components/thema-block/thema-block.component';
import { SafeHtmlPipe } from "./pipes/safe-html.pipe";
import { RemoveWhiteSpacePipe } from "./pipes/removeWhiteSpaces.pipe";
import { ProjectenBlockComponent } from './components/projecten-block/projecten-block.component';
import { DocumentBlockComponent } from './components/document-block/document-block.component';
import { SplitLastPipe} from "./pipes/splitlast.pipe";
import { BusinesscardComponent } from './components/businesscard/businesscard.component';



@NgModule({
  declarations: [
    NieuwsBlockComponent,
    ThemaBlockComponent,
    SafeHtmlPipe,
    SplitLastPipe,
      RemoveWhiteSpacePipe,
      ProjectenBlockComponent,
      DocumentBlockComponent,
      BusinesscardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
      NieuwsBlockComponent,
      ThemaBlockComponent,
      ProjectenBlockComponent,
    DocumentBlockComponent,
      SafeHtmlPipe,
      RemoveWhiteSpacePipe,
    SplitLastPipe,
    BusinesscardComponent
  ]
})
export class SharedModule { }
