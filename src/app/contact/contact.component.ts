import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  address: string = "No.(499) Sakawar Road, Pathein, Ayeyarwady";
  email: string = "ehderlel@gmail.com";
  phone: string = "+959 799623994";

  constructor() { }

  ngOnInit(): void {
  }

}
