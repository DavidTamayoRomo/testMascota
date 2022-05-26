import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  public dropdownSettings: IDropdownSettings = {};
  public registerForm = this.fb.group({
   
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dropdownList = [
      { id: 1, item_text: 'Mascota' },
      { id: 2, item_text: 'Perro' },
      { id: 3, item_text: 'Gato' },
      { id: 4, item_text: 'Raza grande' },
      { id: 5, item_text: 'Raza mediana' }
    ];
    this.selectedItems = [
      { id: 4, item_text: 'Raza grande' },
      { id: 5, item_text: 'Raza mediana' }
    ];
    this.dropdownSettings= {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  crear(){

  }

}
