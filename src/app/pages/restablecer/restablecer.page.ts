import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage{
  nueva:any={
    clave:"",
    nclave:""
  }

  constructor(public toastController: ToastController,private router: Router) {}

  ngOnInit() {}

  restablecer(){
    this.presentToast("Contaseña Restablecida")
    this.router.navigateByUrl('/restablecer')
    }

  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }

}
  


