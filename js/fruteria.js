let kilograms=prompt("¿Cuantos kilos desea comprar?");
let kilo=2000

    if (kilograms<=2) {
        let resul=kilo*kilograms;
        let resuli="0%";
        let resulT=resul-0;
        document.write("<h1>El valor fue: "+resul+"<br>"+"Su descuento fue de: "+resuli+
                        "<br>"+"El valor total a pagar es: "+resulT+"</h1>");
    } else if(kilograms>=2,01 && (kilograms<=5)){
        let resul=kilo*kilograms;
        let discount="10%";
        let resuli=resul*0.10;
        let resulT=resul-resuli;
        document.write("<h1> El valor fue: "+resul+"<br>"+"El descuento es de: "+discount+"<br>"+"Que equivale a: "
                        +resuli+"<br>"+"El valor total de la compra fue: "+resulT+"</h1>"); 
    } else if(kilograms>=5,01 && (kilograms<=10)){
        let resul=kilo*kilograms;
        let discount="15%";
        let resuli=resul*0.15;
        let resulT=resul-resuli;
        document.write("<h1> Su total sin descuento fue: "+resul+"<br>"+
                        "El descuento es de: "+discount+"<br>"+
                        "Que Equivale a: "+resuli+"<br>"+
                        "Para un total de: "+resulT+"</h1>");
    } else if(kilograms>10.01){
        let resul=kilo*kilograms;
        let discount="20%";
        let resuli=resul*0.20;
        let resulT=resul-resuli;
        document.write("<h1> El valor total de su compra sin descuento fue: "+resul+"<br>"+
                        "El descuento de esta compra es del: "+discount+"<br>"+"Que equivale a: "
                        +resuli+"<br>"+"Para un total de: "+resulT+"</h1>");
};