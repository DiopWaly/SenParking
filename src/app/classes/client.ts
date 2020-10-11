import { FormGroup } from '@angular/forms';
export class Client {
    private prenom : string;
    private nom : string;
    private civilite : string;
    private datenaissance : Date;
    private lieunaissance : string;
    private tel : string;
    private numpermis : string;
    private email : string;
    private username : string;
    private password : string;
    constructor(clientForm: FormGroup){
        this.prenom = clientForm.value['prenom'];
        this.nom = clientForm.value['nom'];
        this.civilite = clientForm.value['civilite'];
        this.datenaissance = clientForm.value['datenaissance'];
        this.lieunaissance = clientForm.value['lieunaissance'];
        this.tel = clientForm.value['tel'];
        this.numpermis = clientForm.value['numpermis'];
        this.email = clientForm.value['email'];
        this.username = clientForm.value['username'];
        this.password = clientForm.value['password'];
    }
}
