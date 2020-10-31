import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatePointService {

  constructor() { }

  private pointXQuestions: object ={
  };
  /*
  En este caso, cuando queremos guardar y ver el resultado mandamos el valor de TRUE*/
  $save = new EventEmitter<boolean>(false);

  getPointXQuestions(){
    return this.pointXQuestions;
  }

  setPointXQuestion(question, point){
    this.pointXQuestions[question]=point;
    console.log(this.pointXQuestions);
  }
  
}
