import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert',
    template: `
        <div class="row">
            <div class="col">
                <div class="warning-alert">This is a WARNING alert!!</div>
            </div>
        </div>
    `,
    styles: [`
        .warning-alert {
            color: black;
            background-color: red;
        }
    `]
})
export class WarningAlertComponent {

}