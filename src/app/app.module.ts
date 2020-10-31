import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { SharedModule } from './shared/shared.module';
import { AnswerCardComponent } from './components/answer-card/answer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionCardComponent,
    AnswerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
