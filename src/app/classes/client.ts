import { FormGroup } from '@angular/forms';
export class Client {
    private prenom : string;
    private nom : string;
    private civilite : string;
    private dateNaissance : Date;
    private lieuNaissance : string;
    private tel : string;
    private numPermis : string;
    private email : string;
    private userName : string;
    private password : string;
    private adresse : string;
    // private profil: File
    constructor(clientForm: FormGroup){
        this.prenom = clientForm.value['prenom'];
        this.nom = clientForm.value['nom'];
        this.civilite = clientForm.value['civilite'];
        this.dateNaissance = clientForm.value['datenaissance'];
        this.lieuNaissance = clientForm.value['lieunaissance'];
        this.tel = clientForm.value['tel'];
        this.numPermis = clientForm.value['numpermis'];
        this.email = clientForm.value['email'];
        this.userName = clientForm.value['username'];
        this.password = clientForm.value['password'];
        this.adresse = clientForm.value['adresse'];
        // this.profil = clientForm.value['profil'];
    }
}
