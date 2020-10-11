import { NgModule } from "@angular/core";

import { AgGridModule } from 'ag-grid-angular';
import { Routes, RouterModule } from '@angular/router';
import { MaincategoryListComponent } from './maincategory.list.component';
import { CommonModule } from '@angular/common';
import { ActionComponent } from 'src/app/utils/action.component';
import { ActionParentComponent } from 'src/app/utils/action.parent.component';
import { MaincategoryService } from 'src/app/core/services/maincategory.service';

const routes: Routes = [{ path: '', component: MaincategoryListComponent, data: { title: 'Maincategorys' } }]

@NgModule({
    entryComponents: [ActionParentComponent],
    declarations: [MaincategoryListComponent, ActionComponent, ActionParentComponent],
    imports: [
        CommonModule,
        AgGridModule.withComponents([]),
        RouterModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ActionComponent, ActionParentComponent, MaincategoryService]

})
export class MaincategoryModule {

}