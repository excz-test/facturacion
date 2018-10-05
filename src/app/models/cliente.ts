enum Provincias {Carchi, Imbabura, Pichincha, Guayas, Cotopaxi}
enum Identificaciones {C, R, P}
export class Cliente {
    nombre: string;
    apellido: string;
    direccion: string;
    ciudad: string;
    codigoPostal: string;
    provincia: Provincias;
    tipoIdentificacion: Identificaciones;
    identificacion: string;
    mail: string;
    celular: string;
    fechaNacimiento: Date;
    aceptaPublicidad: boolean;
}
