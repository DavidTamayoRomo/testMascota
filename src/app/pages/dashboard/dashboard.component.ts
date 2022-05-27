import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PetService } from '../services/pet.service';
//import Swal from 'sweetalert2';
//const Swal = require('sweetalert2');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  public invetario: any;
  public arrayValores: any = [];
  public tags: any = [];
  public petCreados: any = [];
  public mostraModal: boolean = true;
  public mostraModal1: boolean = true;
  public mascotaSeleccionada: any;
  public index: any;

  dropdownList = [];
  selectedItems = [];
  public dropdownSettings: IDropdownSettings = {};
  public registerForm = this.fb.group({
    category: [''],
    name: [''],
    tags: [this.tags],
    status: ['available']
  });

  @ViewChild('nombre') nombre: ElementRef;
  @ViewChild('estado') estado: ElementRef;
  @ViewChild('quantity') cantidad: ElementRef;

  constructor(
    private fb: FormBuilder,
    private petService: PetService
  ) { }

  ngOnInit() {
    this.petService.getInventory().subscribe((resp: any) => {
      this.invetario = resp;
      console.log(this.invetario);
      let arregloDeClavesYValores = Object.entries(this.invetario);
      console.log(arregloDeClavesYValores);
      this.arrayValores = arregloDeClavesYValores;
    });

    this.dropdownList = [
      { id: 1, name: 'Mascota' },
      { id: 2, name: 'Perro' },
      { id: 3, name: 'Gato' },
      { id: 4, name: 'Raza grande' },
      { id: 5, name: 'Raza mediana' }
    ];
    this.selectedItems = [
      { id: 4, name: 'Raza grande' },
      { id: 5, name: 'Raza mediana' }
    ];
    this.dropdownSettings = {
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
    this.tags.push(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  crear() {
    this.registerForm.value.category = { id: 1, name: this.registerForm.value.category };
    console.log(this.registerForm.value);
    this.petService.createPet(this.registerForm.value).subscribe((resp: any) => {
      console.log(resp);
      this.petCreados.push(resp);
    });
  }

  abrirModal() {

  }

  cerrarModal() {
    this.mostraModal = true;
  }
  cerrarModal1() {
    this.mostraModal1 = true;
  }

  editar(id: any, index: any) {
    this.mostraModal = false;
    console.log(id);
    console.log(index);
    this.nombre.nativeElement.value = this.petCreados[index].name;
    this.estado.nativeElement.value = this.petCreados[index].status;
    this.index = index;

  }

  editarMascota() {

    this.petCreados[this.index].name = this.nombre.nativeElement.value;
    this.petCreados[this.index].status = this.estado.nativeElement.value;

    this.mascotaSeleccionada = this.petCreados[this.index];
    this.petService.updatePet(this.mascotaSeleccionada).subscribe((resp: any) => {
      console.log(resp);
      this.cerrarModal();
    });
  }

  comprar(id: any, index: any) {
    this.mostraModal1 = false;
    this.mascotaSeleccionada = this.petCreados[index];
  }

  guardarCompra() {
    let objeto = {
      "petId": this.mascotaSeleccionada.id,
      "quantity": this.cantidad.nativeElement.value,
      "shipDate": new Date(),
      "status": "placed",
      "complete": true
    }
    this.petService.comprarPet(objeto).subscribe((resp: any) => {
      console.log(resp);
      this.cerrarModal1();
      /* Swal.fire(
        'Genial!',
        'Su compra se realizo correctamente!',
        'success'
      ) */
    });
  }
}


