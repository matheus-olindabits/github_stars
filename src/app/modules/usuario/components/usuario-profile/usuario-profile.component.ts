import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-profile',
  templateUrl: './usuario-profile.component.html',
  styleUrls: ['./usuario-profile.component.css']
})
export class UsuarioProfileComponent implements OnInit {

  @Input() usuario: any= {};

  constructor() { }

  ngOnInit(): void {}

}
