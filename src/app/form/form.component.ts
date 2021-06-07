import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.email, Validators.required
      ]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(11)])
    });
  }

  submit() {
    const formData = {...this.form.value}
    console.log(formData);
  }
}
