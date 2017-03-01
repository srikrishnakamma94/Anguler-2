import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
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
                    <li *ngFor="let hobby of habbies; let i = index" >
                        {{hobby}} <button (click)="delteHobby(i)"> X </button>
                    </li>
                </ul>
                <form (submit)="addHobbiy(hobbsdsddby.value)">
                    <label> Add Hobbis : </label> <br/>
                    <input type="text" #hobbsdsddby/> <br/>
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
                <hr/>
                <h3>Posts : </h3>
                <div *ngFor="let post of posts">
                    <h3> {{post.id}} : {{post.title}} </h3>
                    <p> {{post.body}} </p>
                </div>
             `,
    providers: [PostsService]
})
export class UserComponent {
    name: string;
    email: string;
    address: address;
    habbies: string[];
    showHobbs: boolean;
    posts: Post[];

    constructor(private postsService: PostsService) {
        this.name = 'Krishna';
        this.email = 'srikrishnakamma@gmail.com';
        this.address = {
            city: 'gutnur',
            state: 'ap',
            pinCode: '522616'
        };
        this.habbies = ['eating', 'reading1', 'enjoying'];
        this.showHobbs = false;
        this.postsService.getPosts().subscribe(posts => {
            this.posts = posts;
        });
    }

    toggleHobbis() {
        if (this.showHobbs) {
            this.showHobbs = false;
        } else {
            this.showHobbs = true;
        }
    }

    addHobbiy(hobbsdsddby: string) {
        this.habbies.push(hobbsdsddby);
    }

    delteHobby(i: number) {
            this.habbies.splice(i, 1);
    }
}


interface address {
    city: string;
    state: string;
    pinCode: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}