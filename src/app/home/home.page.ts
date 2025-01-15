import { Component, OnInit } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { TileButton } from "../components/tilebutton/tilebutton";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
    standalone: true,
    selector: 'home-page',
    imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, TileButton],
    providers: [HttpClient],
    templateUrl: './home.page.html'
})
export class HomePage implements OnInit {

    tables: any[] = []
    fields: any[] = []
    collections: any[] = []

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        //this.fetchPostgres()
        //this.fetchMongo()
    }

    fetchPostgres() {
        this.tables = []
        this.fields = []
        this.http.get('/api/postgres/tables', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).subscribe({
            next: (s: any) => {
                console.dir(s)
                if (s && s.rows && s.fields) {
                    this.fields = [...s.fields]
                    this.tables = [...s.rows]
                }
            },
            error: (err) => {
                console.error(err)
            }
        })
    }

    fetchMongo() {
        this.collections = []
        this.http.get('/api/mongodb/collections', {
            headers: {
                'Content-Type': 'application/json'
            }
        }).subscribe({
            next: (s: any) => {
                console.dir(s)
                this.collections = [...s]
            },
            error: (err) => {
                console.error(err)
            }
        })
    }

}