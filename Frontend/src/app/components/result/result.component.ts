import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quizservice.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent  implements OnInit {
  score: number | undefined;
  totalQuestions: any[] | undefined;


  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.score = this.quizService.getScore();
    this.totalQuestions = this.quizService.getQuestions();
  }

  resetQuiz() {
    this.quizService.resetQuiz();
  }
}