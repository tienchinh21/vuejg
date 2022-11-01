let buttonEl  =document.getElementById('btn');
let numberAEl =document.getElementById('a');
let numberBEl =document.getElementById('b');
let numberCEl =document.getElementById('c');


btn.addEventListener('click', function() {
    let numberAValue = numberAEl.value;
    let numberBValue = numberBEl.value;
    let numberCValue = numberCEl.value;


    if (!numberAValue || !numberBValue) {
        showAlert('error', 'Vui lòng nhập dữ liệu');
    } else {
        numberAValue = +(numberAValue);
        numberBValue = +(numberBValue);
        numberCValue = +(numberCValue);
        const result = giaiptbac2(numberAValue, numberBValue, numberCValue);
        console.log(result);  
        showAlert('success','Tính toán kết quả thành công');     
    }
});
String.prototype.toCapitalize = function(string) {
    let firstChar = string[0].toUpperCase();
    let newString = firstChar + string.slice(1, string.length);
    return newString;
}
function showAlert(type, message) {
    const newType = String.prototype.toCapitalize(type);
    const newAlert = newType + ": "+ message;
    alert(newAlert);
}
function giaiptbacnhat(b, c) {
    const x = -b/c;
    return {
    x:x,
    }
} 
function giaiptbac2(a, b, c) {   
    if (a == 0) {
        return {
            title:'Phương trình bậc 1',
            x: giaiptbacnhat(b, c),
        }
    }
    const delta = b*b-4*a*c;
    
    if (delta > 0) {
        const x1 = -b + Math.sqrt(delta)/2*a;
        const x2 = -b - Math.sqrt(delta)/2*a;
        return {
            title: 'Phương trình có 2 nghiệm',
            x1: x1,
            x2: x2, 
        }
    } else if (delta === 0) {
        const x =-b/2*a;
        return {
            title :'Phương trình có nghiệm kép',
            x: x,
        }
    } else {
        return {
            title: 'Phương trình vô nghiệm', 
        }
    }
}
