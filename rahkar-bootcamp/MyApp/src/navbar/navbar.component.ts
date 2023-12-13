import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule ,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router : Router){

  }
  search='';
  ngDoCheck(){
    console.log(1);
  }
  MainMenu: any[] = [
    {
    title:'Home',
    link:''},
    {
    title:'Users',
    link:''},
    {
    title:'About us',
    link:''}
  ];
  }