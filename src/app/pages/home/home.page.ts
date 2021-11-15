import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  login:any={
    usuario:"",
    clave:""
  }
  field:string="";

  constructor(public toastController: ToastController,private router: Router) {}
  ngOnInit() {}

  ingresar(){
    if(this.validateModel(this.login)){
      this.presentToast("Bienvenido")
      this.router.navigateByUrl('/login');
    }
    else{
      this.presentToast("Falta: "+this.field);
    }
  }
  restablecer(){
    this.router.navigateByUrl('/restablecer')
    }


  validateModel(model:any){
    for (var [key, value] of Object.entries(model)) {
      if (value=="") {
        this.field=key;
        return false;
      }
    }
    return true;
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
function contraseña() {
  throw new Error('Function not implemented.');
}

