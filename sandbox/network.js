function netGet(){
    var result = {}
    $.get('http://myfpapi.herokuapp.com/api/pets',function(data){
        result = data;
        console.log(data);
    });
    return result;
}