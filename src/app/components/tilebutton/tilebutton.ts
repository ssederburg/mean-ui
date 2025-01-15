import { Component, Input } from "@angular/core";

import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button'
import { MatChipsModule } from '@angular/material/chips'
import { MatBadgeModule } from '@angular/material/badge'

@Component({
    selector: 'tile-button',
    standalone: true,
    imports: [CommonModule, MatIconModule, MatBadgeModule, MatChipsModule, MatButtonModule, MatCardModule],
    providers: [],
    templateUrl: './tilebutton.html'
})
export class TileButton {
    @Input() title: string = ''
    @Input() subTitle: string = ''
    @Input() imagePath: string = ''
}
