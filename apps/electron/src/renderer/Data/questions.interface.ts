export interface Question {
  text: string;
  answers: string[];
  correct: number;
}

export interface Questions {
  questions: PreparedQuestion[];
}

export interface Answer {
  id: number;
  text: string;
}

export interface PreparedQuestion {
  text: string;
  answers: Answer[];
  correct: number;
}
