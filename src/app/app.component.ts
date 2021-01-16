import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos = [{
    url: 'https://rd1.com.br/wp-content/uploads/2020/11/20201110-mandalorian.jpg',
    description: 'The Mandalorian'
  },{
    url: 'https://s2.glbimg.com/AN4Gw4fFNwjVdzG_oRCYN_-cvXI=/512x320/smart/e.glbimg.com/og/ed/f/original/2020/11/30/baby-yoda.jpg',
    description: 'Bebe Yoda - The Mandalorian'
  }]
}
