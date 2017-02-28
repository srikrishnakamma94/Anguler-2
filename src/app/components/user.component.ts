import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `<h1>
                Hello {{name}}
                <p>
                  Email {{email}}
                </p>
                <p>
                  <strong> City : </strong>{{address.city}}, <strong> City : </strong>{{address.state}}, <strong> City : </strong>{{address.pinCode}},
                </p>
                <button (click)="toggleHobbis()"> {{showHobbs ? "Hide Hobbis" : "Show Hobbis"}}</button>
                <div *ngIf="showHobbs">
                <h3>Hobbies: </h3>
                {{habbies}}

                <ul>
                    <li *ngFor="let hobby of habbies" >{{hobby}} </li>
                </ul>
                </div>
             </h1>`,
})
export class UserComponent {
    name: string;
    email: string;
    address: address;
    habbies: string[];
    showHobbs: boolean;

    constructor() {
        this.name = 'Krishna';
        this.email = 'srikrishnakamma@gmail.com';
        this.address = {
            city: 'gutnur',
            state: 'ap',
            pinCode: '522616'
        };
        this.habbies = ['eating', 'reading1', 'enjoying'];
        this.showHobbs = false;
    }

    toggleHobbis(){
        if(this.showHobbs) {
            this.showHobbs = false;
        } else {
            this.showHobbs = true;
        }
    }
}


interface address {
    city: string;
    state: string;
    pinCode: string;
}