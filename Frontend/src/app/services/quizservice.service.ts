import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

getScore(): number | undefined {
  throw new Error('Method not implemented.');
}
resetQuiz() {
  throw new Error('Method not implemented.');
}
getQuestions(): any[] {
  throw new Error('Method not implemented.');
}


baseurl= 'http://localhost:3000'

  private questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Rome', 'Berlin'],
      answer: 'Paris'
    },
    {
      question: 'Which planet is known as the red planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
      answer: 'Mars'
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Cu', 'Fe'],
      answer: 'Au'
    }
  //   // Add more questions as needed
  ]
}