import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y]);

@Component({
  selector: 'app-new-reads',
  templateUrl: './new-reads.component.html',
  styleUrls: ['./new-reads.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewReadsComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 2.5,
    spaceBetween: 30,
    navigation: false,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };
  onSwiper(e:any) {
    console.log(e);
  }
  onSlideChange() {
    console.log('slide change');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
