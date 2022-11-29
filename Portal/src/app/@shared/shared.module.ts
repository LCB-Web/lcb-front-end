import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
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

import { NewReadsComponent } from './components/new-reads/new-reads.component';
import { VideoSliderComponent } from './components/video-slider/video-slider.component';
import { WhitepaperSliderComponent } from './components/whitepaper-slider/whitepaper-slider.component';
import { EventComponent } from './components/event/event.component';
import { BlogComponent } from './components/blog/blog.component';

import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';




@NgModule({
  declarations: [
    NieuwsBlockComponent,
    ThemaBlockComponent,
    SafeHtmlPipe,
    SplitLastPipe,
      RemoveWhiteSpacePipe,
      ProjectenBlockComponent,
      DocumentBlockComponent,
      BusinesscardComponent,

      NewReadsComponent,
      VideoSliderComponent,
      WhitepaperSliderComponent,
      EventComponent,
      BlogComponent,

      FilterPanelComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule,
  ],
  exports: [
    NieuwsBlockComponent,
    ThemaBlockComponent,
    ProjectenBlockComponent,
    DocumentBlockComponent,
    SafeHtmlPipe,
    RemoveWhiteSpacePipe,
    SplitLastPipe,
    BusinesscardComponent,

    NewReadsComponent,
    VideoSliderComponent,
    WhitepaperSliderComponent,
    EventComponent,
    BlogComponent,

    FilterPanelComponent

  ]
})
export class SharedModule { }
