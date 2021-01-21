import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ap-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  @Input() hasMore: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
