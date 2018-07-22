import { Component } from "@angular/core";

@Component({
    selector: 'app-warning-alert-bs',
    template: `
        <div class="row">
            <div class="col">
                <div class="alert alert-warning" role="alert">This is a WARNING alert using Bootstrap styling!!</div>
            </div>
        </div>
    `
})
export class WarningAlertBSComponent {

}