$(document).ready(function(){

$("#perfil").click(function(){
    limpiar();
    $('#informacion').css('display','block');
  
 $("#informacion").html('<h1>Perfil Profesional</h1><br><p>Especialista en procesos de creación de sistemas de información, con objetivos enfocados en analizar recursos, crear soluciones según especificaciones dadas por el cliente. Con conocimientos en áreas de programación, redes y soporte de aplicaciones según el mercado laboral. Altas competencias comunicativas en la elaboración de trabajos de equipo.</p>')

    
});
$("#experiencia").click(function(){
    var sysman={
        area:'Profesional de infraestructura',
        fecha:'Stefanini Sysman | 27 de Noviembre 2017 - 30 de Julio 2020',
        tarea:'• Encargado del soporte tecnico en equipos de computo.<br> • Soporte tecnico a entidad via presencial y remota',
        imagen:'https://media.licdn.com/dms/image/C4D0BAQGNvfCWcwYZJQ/company-logo_200_200/0/1648155720668/sysman_s_a_s__logo?e=1711584000&v=beta&t=vtq5goZ0_D5U0N-olPNJ3HK3ZNVVcx8dULoJhdRnQVI'
    }

    var sistemas={
        area:'Aprendiz en prácticas',
        fecha:'Sistemas GyG S.A  | 03 de Marzo 2022 - 30 de Agosto 2022',
        tarea:'• Resolucion de Tickets mesa de ayuda',
        imagen:'https://media.licdn.com/dms/image/C4D0BAQFOJhSWFRXP7g/company-logo_200_200/0/1630537420814/sistemas_gyg_s_a_logo?e=1711584000&v=beta&t=t8YcZTipl8icqY_4NSjMss6lUKPfWnMTo9aNkTnEQWo'

    }
    
    plasmar(sysman,sistemas);
   
       
   });

function plasmar(experiencia1,experiencia2){
    limpiar();
    $('#informacion').css('display','flex');
    $('#informacion').css('flex-wrap','wrap');

    //alert(experiencia.imagen);
    for(var i=0;i<2;i++){
        
        
        $("#informacion").append("<div id='pr"+i+"'><div id='img"+i+"'> <img id='emp"+i+"' src='' alt='' srcset=''> </div> <div id='task"+i+"'></div> </div>")       

        

    }
    $('#pr0').css('display','flex');
    $('#img0').css('height','100%');
    $('#img0').css('width','30%');
    $('#task0').css('height','100%');
    $('#task0').css('width','70%');
    $('#emp0').attr('src',experiencia1.imagen);
    $('#emp0').css('padding','20px');
    $('#task0').append('<h1>'+experiencia1.area+'</h1><br> <p>'+experiencia1.fecha+'<br>'+experiencia1.tarea+'</p>');
    $('#task0').css('padding','20px');

    $('#pr1').css('display','flex');
    $('#img1').css('height','100%');
    $('#img1').css('width','30%');
    $('#task1').css('height','100%');
    $('#task1').css('width','70%');
    $('#emp1').attr('src',experiencia2.imagen);
    $('#emp1').css('padding','20px');
    $('#task1').append('<h1>'+experiencia2.area+'</h1><br> <p>'+experiencia2.fecha+'<br>'+experiencia2.tarea+'</p>');
    $('#task1').css('padding','20px');
         

}

function limpiar(){
    $("#informacion").html('');
   

}   


});
