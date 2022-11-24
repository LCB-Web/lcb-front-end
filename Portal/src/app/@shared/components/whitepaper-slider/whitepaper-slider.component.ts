import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y]);

@Component({
  selector: 'app-whitepaper-slider',
  templateUrl: './whitepaper-slider.component.html',
  styleUrls: ['./whitepaper-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WhitepaperSliderComponent implements OnInit {
  config: SwiperOptions = {
    slidesPerView: 5,
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
