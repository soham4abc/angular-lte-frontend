import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { ActionParentComponent } from 'src/app/utils/action.parent.component';
import { MaincategoryService } from 'src/app/core/services/maincategory.service';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/core/constants';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';

@Component({
    selector: 'app-maincategory-list',
    templateUrl: 'maincategory.list.component.html'
})

export class MaincategoryListComponent implements OnInit {

    @ViewChild('agGrid') agGrid: AgGridNg2;
    public context = {};
    gridOptions = { rowHeight: 50 };

    columnDefs = [
        { headerName: 'Image', field: '', cellRenderer: this.customCellRendererFunc },
        { headerName: 'maincategory Name', field: 'fullName' },
        { headerName: 'Email ID', field: 'email' },
        { headerName: 'Mobile Number', field: 'mobileNumber' },
        { headerName: 'Address', field: 'address' },
        {
            headerName: 'Action', field: 'name',
            cellRendererFramework: ActionParentComponent,
        }
    ];

    rowData: any;
    constructor(private maincategoryService: MaincategoryService,
        private toastrService: ToastrService) {
        this.context = { componentParent: this };
    }

    ngOnInit() {
        this.getmaincategoryList();
    }

    public getmaincategoryList() {
        this.maincategoryService.getmaincategoryList()
            .subscribe((response: any) => {
                if (response.status)
                    this.rowData = new Promise((resolve, reject) =>
                        resolve(response.data)
                    );
            }, error => {
                this.toastrService.error(error.error.message, Constants.TITLE_ERROR);
            });
    }

    onGridReady(data) {
    }

    getSelectedRows() {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data);
        const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
        alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }

    onCellClicked(row) {
        //alert('double clicked on ' + row.data.make);
    }
    onCellDoubleClicked(row) {
        alert('double clicked on ' + row.data.make);
    }

    public customCellRendererFunc(params): string {
        return `<img height="40" width="70"
        src="http://localhost:4200/assets/dist/img/user2-160x160.jpg"/>`;
    }

    public onViewClicked(cell: any): void {
        alert("View maincategory " + JSON.stringify(cell.data));
    }

    public onEditClicked(cell: any): void {
        alert("Edit maincategory " + JSON.stringify(cell.data));
    }

    public onDeleteClicked(cell: any): void {
        alert("Delete maincategory " + JSON.stringify(cell.data));
    }



}