import { FormGroup } from '@angular/forms';
export class Reserver {
    public dateReservation : Date;
    public dateRetour : Date;
    public withdriver : boolean;
   // public numpermis ?: number;
    public datenaissance ?: Date;
    //public datepermis ?: Date;
    public cli: number;
    public c ?: number;
    public v: number;
    public tarif : number;
    public lieudisposition : string;

    constructor(clientForm: FormGroup){
        this.dateReservation = clientForm.value['datereservation'];
        this.dateRetour = clientForm.value['dateretour'];
        this.withdriver = clientForm.value['withdriver'];
        //this.client = clientForm.value['client'];
        //this.chauffeur = clientForm.value['chauffeur'];
        //this.chauffeur = 1;
        //this.voiture = clientForm.value['voiture'];
        this.tarif = clientForm.value['tarif'];
        this.lieudisposition = clientForm.value['lieudispo'];
       /* if(this.withdriver == false){
            this.datenaissance = clientForm.value['datenaissance'];
            this.datepermis = clientForm.value['datepermis'];
            this.numpermis = clientForm.value['numpermis'];
        }*/
    }
}
