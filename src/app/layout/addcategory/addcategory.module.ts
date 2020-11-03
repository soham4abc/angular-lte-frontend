import { NgModule } from "@angular/core";

import { AgGridModule } from 'ag-grid-angular';
import { Routes, RouterModule } from '@angular/router';
import { AddcategoryListComponent } from './addcategory.list.component';
import { CommonModule } from '@angular/common';
import { ActionComponent } from 'src/app/utils/action.component';
import { ActionParentComponent } from 'src/app/utils/action.parent.component';
import { AddcategoryService } from 'src/app/core/services/addcategory.service';

const routes: Routes = [{ path: '', component: AddcategoryListComponent, data: { title: 'addcategorys' } }]

@NgModule({
    entryComponents: [ActionParentComponent],
    declarations: [AddcategoryListComponent, ActionComponent, ActionParentComponent],
    imports: [
        CommonModule,
        AgGridModule.withComponents([]),
        RouterModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ActionComponent, ActionParentComponent, AddcategoryService]

})
export class AddcategoryModule {

}