import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: ` <h1>
                {{name}}
                </h1>
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
                <form (submit)="addHobbiy(hobbby.value)">
                    <label> Add Hobbis : </label> <br/>
                    <input type="text" #hobbby/> <br/>
                </form>
                </div>
                <hr/>
                <h3> Edit User </h3>
                <form>
                    <label> Name : </label> <br/>
                    <input type="text" name="name" [(ngModel)]="name"/> <br/>
                    <label> Email : </label> <br/>
                    <input type="text" name="email" [(ngModel)]="email"/> <br/>
                    <label> City : </label> <br/>
                    <input type="text" name="address.city" [(ngModel)]="address.city"/> <br/>
                    <label> State : </label> <br/>
                    <input type="text" name="address.state" [(ngModel)]="address.state"/> <br/>
                    <label> Street : </label> <br/>
                    <input type="text" name="address.pinCode" [(ngModel)]="address.pinCode"/> <br/>
                </form>
             `,
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

    addHobbiy(hobby){
        this.habbies.push(hobby);
    }
}


interface address {
    city: string;
    state: string;
    pinCode: string;
}