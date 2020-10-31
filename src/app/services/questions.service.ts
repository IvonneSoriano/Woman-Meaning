import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  

  /*
  En el caso que se emita un TRUE, significa que le suma uno
  Caso contrario, es una resta
   */
  $num = new EventEmitter<boolean>(true);

  constructor() {
   }
  private points:number[] = [
    1,2,3,4,5,6,7,8,9,10
  ];
  private questions: string[] = [
    "Tengo una vida gratificantes fuera de mi trabajo",
    "Tengo algo por qué vivir cada día",
    "Aparto y me comprometo a pasar tiempo con mis amigos"
  ];

  getQuestions(){
    return this.questions;
  }

  getLastQuestion(){
    return this.questions.length-1;
  }

  getPoints(){
    return this.points;
  }
}
