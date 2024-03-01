import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [GoogleMapsModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.sass'
})
export class ProyectoFinalComponent {
  list: any = [];
  form: any = {
    id: null,
    name: '',
    description: '',
    extraInfo: '',
    position: {
      lat: '',
      lng: ''
    }
  }
  UserSelected: any = null;

  cleanForm() {
    this.form = ({
      name: '',
      description: '',
      extraInfo: '',
      position: {
        lat: '',
        lng: ''
      }
    })
  }

  addUser() {
    this.list.push(this.form);
    this.cleanForm();
  }

  deleteUser(id: number) {
    const userSelected = this.list.findIndex((user: { id: number; }) => user.id === id)
    if (userSelected !== -1) {
      this.list.splice(id, 1)
    }
  }

  editUser(id: number) {
    const userSelected = this.list.find((user: { id: number; }) => user.id === id)
    if (userSelected !== -1) {
      this.form = ({
        name: userSelected.name,
        description: userSelected.description,
        extraInfo: userSelected.extraInfo,
        position: {
          lat: userSelected.position.lat,
          lng: userSelected.position.lng
        }
      })
      this.UserSelected = userSelected.id
      console.log(this.UserSelected)
    }
  }

  confirmEdit(id: number) {
    const userSelected = this.list.find((user: { id: number; }) => user.id === id)
    if (userSelected !== -1) {
      this.list[this.UserSelected] = this.form;
      this.UserSelected = null;
    }
  }

  submitForm() {
    if (this.UserSelected !== null) {
      this.confirmEdit(this.UserSelected)
    } else {
      this.addUser()
    }
  }

  display: any;
  center: google.maps.LatLngLiteral = {
    lat: 25.792210473581857,
    lng: -108.98726465332138
  };
  zoom = 13;

  centerMapUserSelected(id: number) {
    const userSelected = this.list.find((user: { id: number; }) => user.id === id)
    if (userSelected !== -1) {
      this.UserSelected = userSelected.id;
      this.center = userSelected.position;
    }
  }

  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }

  dropMarker(event: any) {
    let obj = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()

    }
    this.form.position = obj;
  }

  eventHandler(event: any, name: string) {
    if (name === 'mapClick') {
      this.dropMarker(event)
    }
  }


}
