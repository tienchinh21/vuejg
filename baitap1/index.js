
let button = document.getElementById('timnghiem');
button.addEventListener('click',function(){
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value

    if(a== "" || b =="") {
        alert("Vui lòng nhập dữ liệu");
    } else if (a != Number(a) || b != Number(b)) {
        alert("Vui lòng nhập lại giá trị")
    } else {
        a = Number(a);
        b = Number(b);
        giaiptbacnhat(a, b);
    }
    function giaiptbacnhat(a,b) {
        if (a == 0) return {
            title:'phương trình vô nghiệm',
        }; else {
            const x = -b/a;
            return {
                title:'Phương trình có 1 nghiệm',
                x:x,
            }
        }       
    }
    console.log(giaiptbacnhat(a,b));
});