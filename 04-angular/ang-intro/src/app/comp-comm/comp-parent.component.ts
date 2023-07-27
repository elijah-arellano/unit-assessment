import { Component } from "@angular/core";

@Component({
    selector : 'app-parent',
    template : `
        <h3>Parent</h3>
        <div>X : {{x}}</div>
        <app-child [data]="x" (reset)="onClear()"></app-child>
    `
})
export class ComponentParent{
    x : number = 2000;

    onClear(){
        this.x = 0;
    }
    
}