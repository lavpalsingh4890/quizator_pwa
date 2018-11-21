export class session {
    login_type: string;
    email: string;
    name: string;
    image_url: string;
    bday: string;
    gender: string;
    state: string;
   constructor(name,email,imageurl,login_type,bday,gender){
        this.name = name;
        this.email =email;
        this.image_url = imageurl;
        this.login_type =login_type;
        this.bday =bday;
        this.gender = gender;
    }
    
  }