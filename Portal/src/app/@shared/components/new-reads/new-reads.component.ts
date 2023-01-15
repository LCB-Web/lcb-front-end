import { Component, OnInit, ViewEncapsulation } from '@angular/core';
// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { DataService } from 'src/app/data.service';

// install Swiper modules
SwiperCore.use([Navigation, Scrollbar, A11y]);

@Component({
  selector: 'app-new-reads',
  templateUrl: './new-reads.component.html',
  styleUrls: ['./new-reads.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewReadsComponent implements OnInit {
  title = 'blog';
  data: any;



 

  config: SwiperOptions = {
    slidesPerView: 2.5,
    effect: 'fade',
    spaceBetween: 30,
    navigation: false,
    pagination: { 
      type: 'bullets',
      clickable: true 
    },
    scrollbar: { draggable: true },
  };
  onSwiper(e:any) {
    console.log(e);
  }
  onSlideChange() {
    console.log('slide change');
  }
  constructor(private user:DataService) {

    data!: Data[]
    dataSelected: string  

    this.user.getData().subscribe(data=> {
      console.warn(data)
      this.data = data
    })
   }
  
  ngOnInit(): void {
    this.fetchData();
  }

  private fetchData () {
this.Datasevice.getData().subscribe(data =>)
this.data = data
  }

}
