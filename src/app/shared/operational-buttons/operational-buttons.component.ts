import { Component, OnInit, Input} from '@angular/core';
import { CalculatePointService } from 'src/app/services/calculate-point.service';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-operational-buttons',
  templateUrl: './operational-buttons.component.html',
  styleUrls: ['./operational-buttons.component.scss']
})
export class OperationalButtonsComponent implements OnInit {

  @Input() num;
  saveFocus = false;
  last:number;

  constructor(
    private questionsService:QuestionsService,
    private calculateService: CalculatePointService
  ) {
    this.last = this.questionsService.getLastQuestion()-1;
    
   }

  ngOnInit(): void {
    
    console.log(`El num es ${this.num}`)
    this.questionsService.$lastQuestion.subscribe(res => {
      console.log(`La respuesta es ${res}`)
      if(res){
        if(this.calculateService.isAllAnswered(this.num+1)){
          this.saveFocus=true;
        }
      }
    })
  }

  back(){
    this.questionsService.$num.emit(false);
  }

  next(){
    this.questionsService.$num.emit(true);
  }

  save(){
    setTimeout(() => this.calculateService.$save.emit(true), 300 );
  }

}
