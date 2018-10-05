import { Cliente } from "./cliente";
import { Producto } from "./producto";
enum EstatusPago {Pendiente, Pagado, Cancelado}
export class Factura {
    fecha: Date;
    cliente: Cliente;
    productos: Producto[];
    subtotal: number;
    impuestos: number;
    total:number;
    pagado: EstatusPago; // Pendiente:d; Pagado:p; Cancelado:c
    entregado: boolean; // Entregado: true; No entregadi:false;
}
