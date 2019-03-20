import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';
import { TYPED_NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  constructor() {
    
   }

  ngOnInit() {
    const options = {
      stringsElement: '#typed-strings',
      strings: ['Training banking juros amigo', 'Peça a portabilidade e venha ser Training Bankinhg hoje mesmo', 'Inovavor digital e seguro'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
      };
      
  }
  


}
