import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.sass']
})
export class CadUsuarioComponent implements OnInit {

  cadUsuarioForm = this.formBuilder.group({
    nome: '',
    senha: ''
  });

  constructor(private formBuilder: FormBuilder,) {
    
   }

  onSubmit(): void {
  // Process checkout data here

    console.warn('Your order has been submitted', this.cadUsuarioForm.value);
    this.cadUsuarioForm.reset();

  }

  ngOnInit(): void {

  }

}
