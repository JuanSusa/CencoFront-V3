export type adminTypePopUp = 'crear' | 'editar';//^1
export type adminPopUp<T> = {tipo: adminTypePopUp, campo?: T}//^2



/**
 * ^1 => tipo de dato con dos opciones, como guia para administrar las ventanas emergentes (pop up)
 * ^2 => Objeto utilizado para asocias la informacion de una ventana emergente (pop up), cuenta con dos propiedades
 *       tipo: de tipo adminTypePopUp y campo que recibe un valor especifico
 */