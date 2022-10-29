let buttonEl = document.getElementById('timnghiem');
let numberAEl = document.getElementById('a');
let numberBEl = document.getElementById('b');

/**
 * bool
 * true:
 * false: false, null, undefined, "", 0
 */

buttonEl.addEventListener('click', function() {
    let numberAValue = numberAEl.value;
    let numberBValue = numberBEl.value;

    console.log({
        numberAValue,
        numberBValue,
    })

    /**
     * numberAValue = 'sdsd';
     * numberBValue = 'sdsdsd';
     *
     *
     * if (true || true) {
     * }
     *
     *
     * if (!numberAValue || !numberBValue) {
     *   // chay
     * }
     */

    // !false        || !false
    if (!numberAValue || !numberBValue) {
        // alert("Error: Vui lòng nhập dữ liệu");
        showAlert('error', 'Vui lòng nhập dữ liệu');
    } else {
        numberAValue = +(numberAValue);
        numberBValue = +(numberBValue);
        const result = giaiptbacnhat(numberAValue, numberBValue);
        console.log(result);
        // alert("Success: Tính toán thành công");
        showAlert('success', 'Tính toán thành công');
    }
});

/**
 * toUpperCase: chuyển chữ viết thường thành chữ viết hoa -> String
 * toLowerCase: chuyển chữ cái viết hoa thành viết thường. -> String
 * toCapitalize
 *
 * const number = {};
 * number.methodName = function() {
 * }
 *
 * Đối với Đối tượng mặc định của javascript thì mình cần làm như sau
 * Number, Object, String, Array, Function
 * .prototype.methodName = function() {
 * }
 */

/**
 *         0 1 2 3
 * string: t y p e
 * string[0] = t
 * t.toUpperCase() => T
 *
 *         0 1 2 3 4 5 6
 * string: t y p e         => endIndex = 3, length = 4 - 1
 * string: s u c c e s s   => endIndex = 6, length = 7 - 1
 * - Trích xuất một phần của chuỗi
 * - Chỉ mục bắt đầu: vị trí index mà muốn bắt đầu lấy
 * - Chỉ mục kết thúc: muốn lấy tới vị trí index nào
 *
 * - Muốn lấy: ype, startIndex = 1, endIndex = 3
 * string.slice(1, string.length - 1) (1, 6)
 * string.slice(firstIndex, length) [)
 *
 *         0 1 2 3
 * string: t y p e
 * lấy: ype (1, 4) -> 1-2
 */
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

function giaiptbacnhat(a, b) {
    if (a == 0) {
        return {
            title:'phương trình vô nghiệm',
        }
    } else {
        const x = -b/a;
        return {
            title:'Phương trình có 1 nghiệm',
            x:x,
        }
    }
}

/**
 * home -> ptb1, click timnghiem
 * login -> ptb1, click timnghiem
 * register -> ptb1, click timnghiem
 */
