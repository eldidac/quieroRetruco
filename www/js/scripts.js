$(document).ready(function() {
/*      VARIABLES GLOBALES      */
var aCuanto = '';
var puntajeEq1 = 0;
var puntajeEq2 = 0;
var e1c1 = 0;
var e1c2 = 1;
var e2c1 = 0;
var e2c2 = 1;

fnIniciaVariables();


/*      EVENTOS PANTALLA INICIO     */
$('#a24').on('click', function(){
    fnACuanto(this.value);
});
$('#a30').on('click', function(){
    fnACuanto(this.value);
});
$('#iniciar').on('click', fnInicia);


/*      EVENTOS PANTALLA ANOTADOR       */
$('#sumaEq1').on('click', function(){
    fnSuma(this.id);
});
$('#sumaEq2').on('click', function(){
    fnSuma(this.id);
});
$('#restaEq1').on('click', function(){
    fnResta(this.id)});
$('#restaEq2').on('click', function(){
    fnResta(this.id)});
$('#fin').on('click', fnFin);


/*      FUNCIONES       */
function fnIniciaVariables(){
    $('#eq1').val('');
    $('#eq2').val('');
    aCuanto = '';
    $('#aCuanto').val(aCuanto);
    $('#nombreEq1').val('');
    $('#nombreEq2').val('');
    puntajeEq1 = 0;
    puntajeEq2 = 0;
    $('#puntajeEq1').val(puntajeEq1);
    $('#puntajeEq2').val(puntajeEq2);
    if ($('#a24').hasClass('botonActivo')) {
        $('#a24').removeClass('botonActivo').addClass('botonInactivo');
    }
    if ($('#a30').hasClass('botonActivo')) {
        $('#a30').removeClass('botonActivo').addClass('botonInactivo');
    }
    for (var i=1;i<3;i++){
        for (var j=1;j<7;j++){
            $('#f'+i+j).attr('src', 'img/0.png');
        }
    }
    e1c1 = 0;
    e1c2 = 1;
    e2c1 = 0;
    e2c2 = 1;
}

function fnACuanto(val) {
    aCuanto = val;
        //console.log('aCuanto: '+aCuanto);
    switch (aCuanto) {
        case 'a 24':
                //console.log('case a24')
            if ($('#a24').hasClass('botonInactivo')) { 
                    //console.log('IF a 24');
                $('#a24').removeClass('botonInactivo').addClass('botonActivo');
            }
            if ($('#a30').hasClass('botonActivo')) {
                    $('#a30').removeClass('botonActivo').addClass('botonInactivo');
            }
            break

        case 'a 30':    
            if ($('#a30').hasClass('botonInactivo')) { 
                    //console.log('IF a 30');
                $('#a30').removeClass('botonInactivo').addClass('botonActivo');
            }
            if ($('#a24').hasClass('botonActivo')) {
                $('#a24').removeClass('botonActivo').addClass('botonInactivo');
            }
            break
    }
}

function fnConvierteACuanto(){
    aCto = aCuanto;
    aCto = aCto.replace('a ', '');
    aCto = parseInt(aCto);
    return aCto;
}

function fnInicia() {
    $('#nombreEq1').val($('#eq1').val());
    $('#nombreEq2').val($('#eq2').val());
    $('#aCuanto').val(aCuanto);
    $('#inicio').removeClass('pantallaVisible').addClass('pantallaOculta')
    $('#anotador').removeClass('pantallaOculta').addClass('pantallaVisible')
}

function fnSuma(id){
        //console.log(id);
    var aCto1 = fnConvierteACuanto();
        //console.log('aCto1 '+aCto1)
    if (puntajeEq1<aCto1 && puntajeEq2<aCto1) {
        switch (id) {    
            case 'sumaEq1':
                    //console.log('entra en eq1');
                puntajeEq1++;
                $('#puntajeEq1').val(puntajeEq1);
                    //console.log('puntaje: '+puntajeEq1)
                fnFosforoMas(id, aCto1);
                break

            case 'sumaEq2':
                    //console.log('entra en if sumaEq2, id: '+id)
                puntajeEq2++;
                $('#puntajeEq2').val(puntajeEq2);
                fnFosforoMas(id, aCto1);
                break
        }
    }

    aCto1--;
    if (puntajeEq1>aCto1) {
            //console.log('gana eq 1')
        $('#puntajeEq1').addClass('ganador');
        $('#nombreEq1').addClass('ganador');
        alert("¡Ganó el equipo "+$('#nombreEq1').val()+"!");
        $('#fin').removeClass('botonInactivo').addClass('parpadeo');
    } else if ((puntajeEq2>aCto1)){
            //console.log('gana eq 2');
        $('#puntajeEq2').addClass('ganador');
        $('#nombreEq2').addClass('ganador');
        alert("¡Ganó el equipo "+$('#nombreEq2').val()+"!");
        $('#fin').removeClass('botonInactivo').addClass('parpadeo');
    }
     
}

function fnResta (id) {
    var aCto2 = fnConvierteACuanto();
    if (puntajeEq1<aCto2 && puntajeEq2<aCto2) {
        if (id == 'restaEq1' && puntajeEq1 > 0) {
            puntajeEq1--;
            $('#puntajeEq1').val(puntajeEq1);
            fnFosforoMenos(id, aCto2);
        } else if (id == 'restaEq2' && puntajeEq2 > 0) {
            puntajeEq2--;
            $('#puntajeEq2').val(puntajeEq2);
            fnFosforoMenos(id, aCto2);
        }
    }
}

function fnFosforoMas(id, aCto3) {
    var aCto3 = aCto3 / 6;
        //console.log('FOSFORO MAS aCto: '+aCto3+' id: '+id);
    switch (id) {
        case 'sumaEq1':
            if (e1c1 < aCto3) {
                e1c1++;
                $('#f1'+e1c2).attr('src', 'img/'+e1c1+'.png');
                    //console.log('IF FOSF SUMA e1c1: '+e1c1+' e1c2: '+e1c2);
            } else {
                e1c2++;
                e1c1 = 1;
                $('#f1'+e1c2).attr('src', 'img/'+e1c1+'.png');
                    //console.log('ELSE FOSF RESTA e1c1: '+e1c1+' e1c2: '+e1c2);
            }
            break

        case 'sumaEq2':
            if (e2c1 < aCto3) {
                e2c1++;
                $('#f2'+e2c2).attr('src', 'img/'+e2c1+'.png');
                    //console.log('IF e1c1: '+e1c1+' e1c2: '+e1c2);
            } else {
                e2c2++;
                e2c1 = 1;
                $('#f2'+e2c2).attr('src', 'img/'+e2c1+'.png');
                    //console.log('ELSE e1c1: '+e1c1+' e1c2: '+e1c2);
            }
            break
    }
}

function fnFosforoMenos(id, aCto4) {
    var aCto4 = aCto4 / 6;
        //console.log('FOSFORO MENOS aCto: '+aCto+' id: '+id);
    switch (id) {
        case 'restaEq1':
            if (e1c1 <= aCto4 && e1c1 > 0) {
                e1c1--;
                $('#f1'+e1c2).attr('src', 'img/'+e1c1+'.png');
                    //console.log('IF FOSF MEN e1c1: '+e1c1+' e1c2: '+e1c2);
            } else {
                e1c2--;
                e1c1 = 4;
                $('#f1'+e1c2).attr('src', 'img/'+e1c1+'.png');
                    //console.log('ELSE FOSF MEN e1c1: '+e1c1+' e1c2: '+e1c2);
            }
            break

        case 'restaEq2':
            if (e2c1 <= aCto4 && e2c1 > 0) {
                e2c1--;
                $('#f2'+e2c2).attr('src', 'img/'+e2c1+'.png');
                    //console.log('IF e1c1: '+e1c1+' e1c2: '+e1c2);
            } else {
                e2c2--;
                e2c1 = 4;
                $('#f2'+e2c2).attr('src', 'img/'+e2c1+'.png');
                    //console.log('ELSE e1c1: '+e1c1+' e1c2: '+e1c2);
            }
            break
    }
}

function fnFin() {
    $('#anotador').removeClass('pantallaVisible').addClass('pantallaOculta')
    $('#inicio').removeClass('pantallaOculta').addClass('pantallaVisible')
    if ($('#puntajeEq1').hasClass('ganador')) {
        $('#puntajeEq1').removeClass('ganador');
        $('#nombreEq1').removeClass('ganador');
    }
    if ($('#puntajeEq2').hasClass('ganador')) {
        $('#puntajeEq2').removeClass('ganador');
        $('#nombreEq2').removeClass('ganador');
    }
    $('#fin').removeClass('parpadeo').addClass('botonInactivo');
    fnIniciaVariables();
}

})