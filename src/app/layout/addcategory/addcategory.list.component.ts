import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridNg2 } from 'ag-grid-angular';
import { ActionParentComponent } from 'src/app/utils/action.parent.component';
import { AddcategoryService } from 'src/app/core/services/addcategory.service';
import { ToastrService } from 'ngx-toastr';
import { Constants } from 'src/app/core/constants';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
import {ReactiveFormsModule } from '@angular/forms'
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-addcategory-list',
    templateUrl: 'addcategory.list.component.html'
    
})

export class AddcategoryListComponent implements OnInit {   
    
    constructor() { }

  ngOnInit() {
  }



}