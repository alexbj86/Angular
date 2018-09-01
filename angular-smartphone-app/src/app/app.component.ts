import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Device} from "../model/device";
import {NgForm} from "@angular/forms";

const INITIAL_STATE = {label: null, os: null};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  devices: Device[];
  active: Device = INITIAL_STATE;

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll() {
    this.http.get<Device[]>('http://localhost:3000/devices')
      .subscribe(result => this.devices = result);
  }

  setActive(device: Device) {
    this.active = device;
  }

  delete(event: MouseEvent, device: Device) {
    event.stopPropagation()
    this.http.delete<any>(`http://localhost:3000/devices/${device.id}`)
      .subscribe(
        () => {
          const index = this.devices.indexOf(device)
          this.devices.splice(index, 1);
        }
      )
  }

  save(form: NgForm) {
    if(this.active.id){
      this.edit(form.value);
    }else {
      this.add(form.value)
      form.reset();
    }
  }

  private add(device: Device) {
    this.http.post<Device>(`http://localhost:3000/devices`, device)
      .subscribe(res => {
        this.devices.push(res)
        this.reset();
      })
  }

  private edit(device: Device) {
    const newDevice = Object.assign(
      {},
      this.active,
      device
    );

    this.http.patch<Device>(`http://localhost:3000/devices/${newDevice.id}`, newDevice)
      .subscribe(
        res => {
          const index = this.devices.findIndex(device => device.id === newDevice.id);
          this.devices[index] = newDevice;
        }
      )
  }

  private reset() {
    this.active = INITIAL_STATE;
  }
}
