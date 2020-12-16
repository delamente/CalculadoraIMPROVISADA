let scren = document.querySelect('"sreen-result');

funtion getData(ref){
    let value = ref.value;
    screen.value += value;   
}

function clean(){
    screen.value = '';
}
funtion calculate(){
    try{
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
        setTimeout(() => {
            clean();
        }, 500);
    }
}