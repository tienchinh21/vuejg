let buttonEl  =document.getElementById('btn');
let numberAEl =document.getElementById('a');
let numberBEl =document.getElementById('b');
// Format lại.
let numberCEl =document.getElementById('c');

// console.log({
//     buttonEl,
//     numberAEl,
//     numberBEl,
//     numberCEl,
// });// chắc chắn dom buttonEl đã tồn tại.

/**
 * Chú ý mình có bị thiếu chữ nào không.
 * Có viết sai chính tả không
 */
// buttonEl.addEventListener('click', function() {
//     console.log('click handler');
// });

buttonEl.addEventListener('click', function() {
    let numberAValue = numberAEl.value;
    let numberBValue = numberBEl.value;
    let numberCValue = numberCEl.value;

    // console.log({
    //     numberAValue,
    //     numberBValue,
    //     numberCValue,
    // });

    if (!numberAValue || !numberBValue) {
        showAlert('error', 'Vui lòng nhập dữ liệu');
    } else {
        numberAValue = +numberAValue;
        numberBValue = +numberBValue;
        numberCValue = +numberCValue;
        const result = giaiptbac2(numberAValue, numberBValue, numberCValue);
        console.log(result);
        showAlert('success', 'Tính toán kết quả thành công');
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
    if (b != 0) {
        const x = -c/b;
        return {
            title:'Phương trình có 1 nghiệm',
            x:x,
        }
    } else {
        return{
            title: 'Phương trình vô nghiệm',
        }
    }
}

function giaiptbac2(a, b, c) {
    if (a === 0) {
        return giaiptbacnhat(b, c);
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
            x:x,
        }
    } else {
        return {
            title: 'Phương trình vô nghiệm',
        }
    }
}
