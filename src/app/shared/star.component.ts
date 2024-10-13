import { Component, Input, input, OnChanges, EventEmitter, Output } from "@angular/core";
@Component({
    selector: 'star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges
{
    @Input() rating: number = 3;
    cropWidth: number = 75;

    @Output() starClicked: EventEmitter<string> = 
    new EventEmitter<string>();

 ngOnChanges(): void {
     this.cropWidth = this.rating * 75/5;
 }
 
 onClick():void{
    this.starClicked.emit(`The rating ${this.rating} was clicked`);
 }
}