const nome = "Felipe";
const sexo = "F";
const idade = 54;
const contri = 29;
const tempo = (contri+idade)

if(sexo == 'M'){
    if(contri >= 35 || tempo >= 95){
        console.log(`${nome}, você pode se aposentar`)
    }if(contri<35 && tempo < 95){
        console.log(`${nome}, você NÃO pode se aposentar`)
    }
}if(sexo == 'F'){
    if(contri>=30 ||  tempo>= 85){
        console.log(`${nome}, você pode se aposentar`)
    }if(contri<30 && tempo<85){
        console.log(`${nome}, você NÃO pose se aposentar`)
    }
}