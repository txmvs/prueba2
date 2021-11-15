import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  usuario:String;
  choferes:any[]=[
    {
      id: 1,
      name: 'RODRIGO IGNACIO ARCE ARELLANO',
      email: 'R.ARCE@duocuc.cl',
      car: 'Dodge Charger 1970',
      image: '',
    },
    {
      id: 2,
      name: 'CRISTOBAL IVAN ARROYO DIAZ',
      email: 'C.ARROYOD@duocuc.cl',
      car: 'Nissan Skyline R34 GT-R',
      image: '',
    },
    {
      id: 3,
      name: 'CRISTOBAL IVAN ARROYO DIAZ',
      email: 'C.ARROYO@duocuc.cl',
      car: 'Nissan Skyline R34 GT-R',
      image: '',
    },
    {
      id: 4,
      name: 'MISAEL EDUARDO CONTRERAS MOLINA',
      email: 'MIS.CONTRERAS@duocuc.cl',
      car: 'Acura NSX',
      image: '',
    },
    {
      id: 5,
      name: 'PAOLO ALEXANDER DOVERI CIFUENTES',
      email: 'P.DOVERI@duocuc.cl',
      car: '',
      image: '',
    },
   {
      id: 6,
      name: 'LUCIANO CHRISTIAN GAJARDO CORTEZ',
      email: 'LUC.GAJARDO@duocuc.cl',
      car: 'Honda S2000',
      image: '',
    },
    {
      id: 7,
      name: 'GONZALO IGNACIO GALDAMES QUINTANILLA',
      email: 'GO.GALDAMESQ@duocuc.cl',
      car: 'Toyota Supra Mark IV',
      image: '',
    },
    {
      id: 8,
      name: 'MARCELO PABLO GODOY MORA',
      email: 'MARC.GODOYM@duocuc.cl',
      car: 'Mazda RX-7 FD',
      image: '',
    },
    {
      id: 9,
      name: 'WIDO ANDRES LABARCA PORMA',
      email: 'W.LABARCA@duocuc.cl',
      car: 'RB-Swapped 1967 Ford Mustang',
      image: '',
    },
    {
      id: 10,
      name: 'CRISTOBAL ALEJANDRO MARTINEZ MURUA',
      email: 'CRIST.MARTINEZM@duocuc.cl	',
      car: 'Chevrolet Yenko Camaro 1969',
      image: '',
    },
    {
      id: 11,
      name: 'GUILLERMO IGNACIO MORALES VARGAS',
      email: 'GU.MORALESV@duocuc.cl',
      car: 'Buick GNX 1987',
      image: '',
    },
    {
      id: 12,
      name: 'NICOLAS ALFREDO PAGE VILLALOBOS',
      email: 'N.PAGE@duocuc.cl',
      car: 'F-Bomb Chevrolet Camaro',
      image: '',
    },
    {
      id: 13,
      name: 'DEBORA ALONDRA QUINTERO NAHUEL',
      email: 'DE.QUINTERO@duocuc.cl',
      car: 'Ford GT40',
      image: '',
    },
    {
      id: 14,
      name: 'BASTIAN ALEXIS	 TORO ROJAS',
      email: 'BAS.TORO@duocuc.cl',
      car: 'Dodge Charger Daytona 1969',
      image: '',
    },
    {
      id: 15,
      name: 'ANDRES ALEJANDRO EZRA VASQUEZ VASQUEZ',
      email: 'ANDRE.VASQUEZV@duocuc.cl',
      car: 'Nissan Skyline 2000 GT-R 1971',
      image: '',
    },
    {
      id: 16,
      name: 'NOEMI BELEN VERGARA CONTRERAS',
      email: 'NOE.VERGARA@duocuc.cl',
      car: 'Chevrolet Chevelle SS 1970',
      image: '',
    }


  ]
  viaje:any={
    nombre:"",
    apellido:"",
    monto:"",
    destino:"",
    lugar:"",
    personas:"",
    hora:"",
    chofer:"",
    fecha:""
  };


  constructor(public alertController: AlertController) {

  }
  pedir(){
    (this.viaje.nombre!="" && this.viaje.apellido!="") && 
    this.presentAlert("Usuario","Su viaje fue confirmado Sr(a) "+this.viaje.nombre+" "+this.viaje.apellido+" el valor de su viaje es de $10.000 CLP");
  }

  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
