let buttonEl =document.getElementById('btn')
btn.addEventListener('click',function(){
    let a =document.getElementById('a').value
    let b =document.getElementById('b').value
    let c =document.getElementById('c').value

    if (a == "" || b == "") {
        alert("Vui lòng nhập dữ liệu");
    } else if (a != Number(a) || b != Number(b) || c != Number(c)) {
        alert("Vui lòng nhập lại giá trị");
    }else {
        giaiptbac2(a,b,c)
    }
    function giaiptbac2(a,b,c) {
        function giaiptbacnhat(b, c){
            const x = -b/c;
            return {
                // title:'Phương trình có 1 nghiệm',
                x:x,
            }
        }
        if (a == 0) return {
            title:'Phương trình bậc 1',
            x: giaiptbacnhat(b, c),
        };

        const delta = b*b-4*a*c;

        if(delta > 0) {
            const x1 = -b + Math.sqrt(delta)/2*a;
            const x2 = -b - Math.sqrt(delta)/2*a;
            return {
                title: 'Phương trình có 2 nghiệm',
                x1: x1,
                x2: x2,
            };
        } else if (delta === 0) {
                const x =-b/2*a;
                return {
                title :'Phương trình có nghiệm kép',
                x: x,
                }
        } else {
            return {
                title: 'Phương trình vô nghiệm'
            }
        }
    }
    console.log(giaiptbac2(a,b,c));
});
