import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { LapTopComponent } from './lap-top/lap-top.component';
import { ModalComponent } from './modal/modal.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SmartPhoneComponent } from './smart-phone/smart-phone.component';



@NgModule({
  declarations: [TrangChuComponent, CarouselComponent, HeaderComponent, LapTopComponent, ModalComponent, ProductItemComponent, PromotionComponent, SmartPhoneComponent],
  imports: [
    CommonModule
  ],
  exports:[TrangChuComponent,CarouselComponent,HeaderComponent,LapTopComponent,ModalComponent,ProductItemComponent,PromotionComponent,SmartPhoneComponent]
})
export class TrangChuModule { }
