export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    email: string;
    telefono: string;
    ubicacion: string;
    img: string;
    imgp: string

    constructor(nombre: string,apellido: string, descripcion:string,email: string,telefono: string,ubicacion:string, img: string, imgp: string){
       this.nombre = nombre;
       this.apellido = apellido;
       this.descripcion = descripcion;
       this.email = email;
       this.telefono = telefono;
       this.ubicacion = ubicacion;
       this.img = img;
       this.imgp = imgp;
        
    }

}