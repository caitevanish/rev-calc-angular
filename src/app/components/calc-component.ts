import { Component } from '@angular/core';

@Component({
  template: `
    <div class="header">
      <h1>Calculate!</h1>

      <div class="input">
        <div class="input-group mb-3">
          <input
            [id]="inputOne"
            class="form-control"
            type="text"
            placeholder="first number"
            [(ngModel)]="inputOne"
          />
        </div>
        <div class="input-group mb-3">
          <input
            id="inputTwo"
            class="form-control"
            type="text"
            placeholder="second number"
            [(ngModel)]="inputTwo"
          />
        </div>
      </div>
    </div>
    <!-- -------buttons------- -->
    <div
      class="operations d-grid gap-2 d-md-block d-md-flex justify-content-md-center"
    >
      <button type="button" class="btn btn-primary btn-lg" (click)="add()">
        +
      </button>
      <button type="button" class="btn btn-primary btn-lg" (click)="sub()">
        -
      </button>
      <button type="button" class="btn btn-primary btn-lg" (click)="mult()">
        x
      </button>
      <button type="button" class="btn btn-primary btn-lg" (click)="div()">
        /
      </button>
    </div>

    <div class="row">
      <div class="col-md-6">
        <h3>Answer:</h3>
        <p id="answer">{{ calcAnswer }}</p>
      </div>
      <div class="history col-md-6">
        <h3>History</h3>
        <ul id="calcHist">
          <li *ngFor="let c of calcHistory">{{ c }}</li>
        </ul>
      </div>
    </div>
  `,
  selector: 'calculator',
})
export class CalculatorComponent {
  answer: string = '';
  inputOne: number = 0;
  inputTwo: number = 0;
  symbol: string = '';

  calcAnswer: number = 0;
  calcHistory: Array<string> = [];

  // this.inputOne +

  add(): void {
    this.calcAnswer = Number(this.inputOne) + Number(this.inputTwo);
    this.answer =
      this.inputOne + ' + ' + this.inputTwo + ' = ' + this.calcAnswer;
    this.calcHistory.unshift(this.answer);
  }

  sub(): void {
    this.calcAnswer = Number(this.inputOne) - Number(this.inputTwo);
    this.answer =
      this.inputOne + ' - ' + this.inputTwo + ' = ' + this.calcAnswer;
    this.calcHistory.unshift(this.answer);
  }

  mult(): void {
    this.calcAnswer = Number(this.inputOne) * Number(this.inputTwo);
    this.answer =
      this.inputOne + ' * ' + this.inputTwo + ' = ' + this.calcAnswer;
    this.calcHistory.unshift(this.answer);
  }

  div(): void {
    this.calcAnswer = Number(this.inputOne) / Number(this.inputTwo);
    this.answer =
      this.inputOne + ' / ' + this.inputTwo + ' = ' + this.calcAnswer;
    this.calcHistory.unshift(this.answer);
  }
}
