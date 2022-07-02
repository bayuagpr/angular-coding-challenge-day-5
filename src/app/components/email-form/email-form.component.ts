import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.initializeForm();
  }

  private initializeForm() {
    // initialize the form builder and validator here
  }

  public submitMessage() {
    // print the form submission to the console.log()
  }
}
