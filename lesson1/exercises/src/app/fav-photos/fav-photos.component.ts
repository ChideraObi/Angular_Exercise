import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://ixxidesign.azureedge.net/media/2401862/ixxi-sacre-e-frangine_coussi-cousine.jpg?width=498';
  image3 = 'https://www.stylerave.com/wp-content/uploads/2020/06/sacree_frangine_79378803_109790670389136_8378056134395888714_n.jpg';

  constructor() { }

  ngOnInit() {
  }

}