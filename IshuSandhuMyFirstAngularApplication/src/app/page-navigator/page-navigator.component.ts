import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-page-navigator',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './page-navigator.component.html',
  styleUrl: './page-navigator.component.scss'
})
export class PageNavigatorComponent {
  carForm: FormGroup;
  constructor(private fb: FormBuilder, private routrs: Router) {
    this.carForm = this.fb.group({
      action: ['']
    });
  }
  onSubmit(){
    const action =this.carForm.get('action')?.value;
    if(action=='buy'){
      this.routrs.navigate(['/buy'])
    }
    else if(action=='sell'){
      this.routrs.navigate(['/sell'])
    }
  }

}
