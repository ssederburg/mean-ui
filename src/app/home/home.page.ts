import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@Component({
    standalone: true,
    selector: 'home-page',
    imports: [CommonModule],
    providers: [HttpClient],
    templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

    items: any[] = []

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get('/api/test', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).subscribe({
            next: (s: any) => {
                console.dir(s)
                this.items = s.items.sort((a: any, b: any) => {
                    if (a.name>b.name) {
                        return 1
                    } else if (a.name<b.name) {
                        return -1 
                    } else {
                        return 0
                    }
                })
            },
            error: (err) => {
                console.error(err)
            }
        })
    }

}