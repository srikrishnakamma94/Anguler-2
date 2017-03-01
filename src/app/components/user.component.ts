import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl : `user.component.html`,
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