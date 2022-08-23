import { Component } from '@angular/core';

@Component({
  template: `
    <div class="header">
      <h1>Calculate!</h1>

      <div class="input">
        <div class="input-group mb-3">
          <input
            id="inputOne"
            class="form-control"
            type="text"
            placeholder="first number"
          />
        </div>
        <div class="input-group mb-3">
          <input
            id="inputTwo"
            class="form-control"
            type="text"
            placeholder="second number"
          />
        </div>
      </div>
    </div>
    <!-- -------buttons------- -->
    <div
      class="operations d-grid gap-2 d-md-block d-md-flex justify-content-md-center"
    >
      <button
        type="button"
        class="btn btn-primary btn-lg"
        data-operation="add"
        data-type="button"
      >
        +
      </button>
      <button
        type="button"
        class="btn btn-primary btn-lg"
        data-operation="sub"
        data-type="button"
      >
        -
      </button>
      <button
        type="button"
        class="btn btn-primary btn-lg"
        data-operation="mult"
        data-type="button"
      >
        x
      </button>
      <button
        type="button"
        class="btn btn-primary btn-lg"
        data-operation="div"
        data-type="button"
      >
        /
      </button>
    </div>
  `,
  selector: 'calculator',
})
export class CalculatorComponent {

  

}
