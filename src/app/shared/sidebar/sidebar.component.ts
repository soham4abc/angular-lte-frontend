import { Component, AfterViewInit, OnInit, AfterContentInit } from "@angular/core";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})

export class SidebarComponent implements OnInit {

    ngOnInit() {
        // $(document).ready(() => {
        //     const trees: any = $('[data-widget="tree"]');
        //     trees.tree();
        // });

    }
    routeCat() {
        console.log('test');
        window.location.href = '/layout/categorymanagement';
        // this.router.navigateByUrl('/layout/employees');
    }
    routeDash() {
        console.log('test');
        window.location.href = '/layout/dashboard';
        // this.router.navigateByUrl('/layout/employees');
    }
    routeUser() {
        console.log('test');
        window.location.href = '/layout/profile/user';
        // this.router.navigateByUrl('/layout/employees');
    }
    routeCom() {
        console.log('test');
        window.location.href = '/layout/profile/company';
        // this.router.navigateByUrl('/layout/employees');
    }routePswd() {
        console.log('test');
        window.location.href = '/layout/profile/update-password';
        // this.router.navigateByUrl('/layout/employees');
    }routeOut() {
        console.log('test');
        window.location.href = '/login';
        // this.router.navigateByUrl('/layout/employees');
    }
}
