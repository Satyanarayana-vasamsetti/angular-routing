import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  cards = [
    {
      src : "https://oasis.opstatics.com/content/dam/oasis/page/2023/global/product/vitamin/vitamin-spec-black.png",
      alt : "No internet",
      title : "OnePlus Nord 3 5G",
      price : 23999,
      button : "Book now"
    },
    {
      src : "https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1665298408489/3338fee278fbdae4ac648bbf47524c56.png",
      alt : "No internet",
      title : "Vivo Y35",
      price :15999,
      button : "Book now"
    },
    {
      src : "https://image01-in.oneplus.net/media/202407/09/64d7f106899b3244dec3d4da7c443ba8.png?x-amz-process=image/format,webp/quality,Q_80",
      alt : "No internet",
      title : "Oneplus Nord 4 5G",
      price :29999,
      button : "Book now"
    }
  ]
}
