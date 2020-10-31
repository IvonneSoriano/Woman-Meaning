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
  last:number;

  constructor(
    private questionsService:QuestionsService,
    private calculateService: CalculatePointService
  ) {
    this.last = this.questionsService.getLastQuestion();
    
   }

  ngOnInit(): void {
  }

  back(){
    this.questionsService.$num.emit(false);
  }

  next(){
    this.questionsService.$num.emit(true);
  }

  save(){
    this.calculateService.$save.emit(true);
  }

}
