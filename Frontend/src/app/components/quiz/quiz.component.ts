import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quizservice.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions: any[]=[] ;
  currentQuestion: any;
  selectedOption: string | undefined;
  score!: number;
  quizCompleted: boolean | undefined;

  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.questions = this.quizService.getQuestions();
    this.currentQuestion = this.questions[0];
    this.score = 0;
    this.quizCompleted = false;
  }

  nextQuestion() {
    if (this.selectedOption === this.currentQuestion.answer) {
      this.score++;
    }

    const currentIndex = this.questions.indexOf(this.currentQuestion);
    if (currentIndex < this.questions.length - 1) {
      this.currentQuestion = this.questions[currentIndex + 1];
      this.selectedOption = '';
    } else {
      this.quizCompleted = true;
    }
  }
}