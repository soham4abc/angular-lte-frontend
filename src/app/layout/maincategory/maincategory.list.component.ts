import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { ActionParentComponent } from 'src/app/utils/action.parent.component';
import { MaincategoryService } from 'src/app/core/services/maincategory.service';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/core/constants';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import {ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-maincategory-list',
    templateUrl: 'maincategory.list.component.html'
    
})

export class MaincategoryListComponent implements OnInit {

    addForm: FormGroup;
    rows: FormArray;
    itemForm: FormGroup;
   public id:1
   public category:any
   public category_SKU:any
   public submitPayload: any = [];
   
    public categories: any[] = [{
        id: 1,
        category: '',
       category_SKU: '',
       
      }];

    
    

    @ViewChild('agGrid') agGrid: AgGridNg2;
    public context = {};
    gridOptions = { rowHeight: 50 };

    columnDefs = [
        { headerName: 'Image', field: '', cellRenderer: this.customCellRendererFunc },
        { headerName: 'maincategory Name', field: 'fullName' },
        { headerName: 'Email ID', field: 'email' },
        { headerName: 'Mobile Number', field: 'mobileNumber' },
        { headerName: 'Category', field: 'category' },
        {
            headerName: 'Action', field: 'name',
            cellRendererFramework: ActionParentComponent,
        }
    ];

    rowData: any;

    
    
    constructor(private maincategoryService: MaincategoryService,
        private toastrService: ToastrService,
        private fb: FormBuilder) {
            
        this.addForm = this.fb.group({
        items: [null, Validators.required],
        items_value: ['no', Validators.required]
      });
        this.rows = this.fb.array([]);

        this.context = { componentParent: this };
    }

    ngOnInit() {
        this.getmaincategoryList();
        this.addForm.get("items").valueChanges.subscribe(val => {
            if (val === true) {
              this.addForm.get("items_value").setValue("yes");
      
              this.addForm.addControl('rows', this.rows);
            }
            if (val === false) {
              this.addForm.get("items_value").setValue("no");
              this.addForm.removeControl('rows');
            }
        });
    }

    addCategory() {
        this.categories.push({
          id: this.categories.length + 1,
          category: '',
          category_SKU: '',         
        });
      }
    
      removeCategory(i: number) {
        this.categories.splice(i, 1);
      }

      logValue() {
        console.log(this.categories);
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