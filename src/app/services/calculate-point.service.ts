import { Injectable, EventEmitter } from '@angular/core';
import { types } from '../model/type';

@Injectable({
  providedIn: 'root'
})
export class CalculatePointService {

  constructor() { }


  private points: object[] = [];

  
  /*
  En este caso, cuando queremos guardar y ver el resultado mandamos el valor de TRUE*/
  $save = new EventEmitter<boolean>(false);

  getPointXQuestions(){
    return this.points;
  }

  setPointXQuestion(question, point, type){
    let grade = {
      question: question,
      grade: point,
      type: type
    }
    console.log(grade);
    this.points.push(grade);

  }

  isAllAnswered(total:number){
    console.log(total);
    console.log(this.points.length)
    return total === this.points.length && this.points.every(p => p["grade"]!=null) ? true : false;
  }

  getPointsByType(){
    let aux = [];
    types.forEach(t => {
      console.log(`Valor de t ${t.type}`)
      let arr = this.points.filter(p => p["type"]== t["id"]);
      if(arr.length != 0){
        console.log(arr);
        let newAux = [];
        arr.forEach(ar => newAux.push(ar["grade"]));
        console.log(newAux);
        aux.push(newAux.reduce((acum, current) => acum + current));
        console.log(aux);
      }
      else{
        console.log("Este no tiene nada");
        aux.push(0);
      }
     
    })
    console.log(aux);
    return aux;
  }


  
}
