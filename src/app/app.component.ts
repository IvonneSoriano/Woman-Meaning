import { Component } from '@angular/core';
import { CalculatePointService } from './services/calculate-point.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'La Mujer y Su Significado';

  public question:boolean = true;

  constructor(private calculateService:CalculatePointService){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.calculateService.$save.subscribe(res => {
      if(res){
        this.question = false;
      }
    })
  }
}
