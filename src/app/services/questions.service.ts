import { Injectable, EventEmitter } from '@angular/core';
import { Question, questions } from '../model/question';
import { types } from '../model/type';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  

  /*
  En el caso que se emita un TRUE, significa que le suma uno
  Caso contrario, es una resta
   */
  $num = new EventEmitter<boolean>(true);

    /*
   Para poder saber si es la última pregunta*/
   $lastQuestion = new EventEmitter<boolean>(false);

  constructor() {
   }


  /*El tipo 1 es creencias
  El tipo 2 es Cuerpo
  3 seres queridos
  4 Mejores Amigas
  5 Presupuesto
  6 Ocupación
  7 Renovarse */

  private questions: Question[] = questions;

  getQuestions(){
    this.questions.sort((a,b) => a.id - b.id )
    //Para test
    //console.log(this.questions)
    return this.questions;
  }

  getLastQuestion(){
    console.log(`La cantidad de preguntas son ${this.questions.length}`);
    return this.questions.length;
  }

  getType(id:number){
    let type = this.questions.find( q => q.id == id)["type"];
    // let typeString = types.find(t => t.id == type);
    // console.log(typeString);
    return type;
  }

  getTypeString(){
    let aux = [];
    types.forEach(t => aux.push(t.type));
    console.log(aux);
    return aux;
  }
  countQuestionXType(){
    let cant = [0,0,0,0,0,0,0];
    questions.forEach(q =>{
      switch(q.type){
        case 1:
          cant[0]+=1;
          break;
          case 2:
          cant[1]+=1;
          break;
          case 3:
          cant[2]+=1;
          break;
          case 4:
          cant[3]+=1;
          break;
          case 5:
          cant[4]+=1;
          break;
          case 6:
          cant[5]+=1;
          break;
          case 7:
          cant[6]+=1;
          break;
          default:
            console.log("No tiene tipo");
            break;
      }
    });
    console.log(cant);
  }
}
