// Bài tập 1
function calcAreaGrade (khuvuc){
    switch (khuvuc){
        case 'A':
            return 2;
        case 'B':
            return 1;
        case 'C':
            return 0.5;
        default:
            return 0
    }
}
function calcTypeGrade (doituong){
    switch (doituong){
        case 1:
            return 2.5;
        case 2:
            return 1.5;
        case 3:
            return 1;
        default:
            return 0 
    }
}
function ex1() {
    //code
    let diemchuan = +document.getElementById('diemchuan').value;
    let diem1 = +document.getElementById('diem1').value;
    let diem2 = +document.getElementById('diem2').value;
    let diem3 = +document.getElementById('diem3').value;
    let khuvuc = document.getElementById('khuvuc').value;
    let doituong = +document.getElementById('doituong').value;
    let totalGrade = 0;
    let diemkhuvuc = calcAreaGrade(khuvuc);
    let diemdoituong = calcTypeGrade(doituong);

    
    

    totalGrade = diem1 + diem2 + diem3 + diemkhuvuc + diemdoituong;
    if(
        diem1 > 0 &&
        diem2 > 0 &&
        diem3 > 0 &&
        totalGrade >= diemchuan
    ) {
        document.getElementById('ketqua').innerHTML = " " + totalGrade + " điểm." + " Bạn đã đậu !!!"
    }else {
        document.getElementById('ketqua').innerHTML = " " + totalGrade + " điểm." + " Bạn đã rớt !!!"
    }
}

// Bài tập 2   
document.getElementById('btntinhtiendien').onclick = function(){
    let hoten1 = document.getElementById('hoten1').value;
    let soKw = +document.getElementById('soKw').value
    let tongtien;

    if(soKw < 50){
        tongtien = 500 * soKw
    }else if(soKw <= 100){
        tongtien = 50 * 500 + ( soKw - 50) * 650;
    }else if(soKw <= 200){
        tongtien = 500 * 50 + 50 * 650 + (soKw - 100) * 850;
    }else if(soKw <= 350){
        tongtien = 500 *50 + 50 * 560 + 100 * 850 + (soKw - 200) * 1100;
    }else{
        tongtien = 500 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300;
    }
    document.getElementById('tongTien').innerHTML = " Họ tên:          " + hoten1 + ";      " + " Tiền điện:   " + tongtien.toLocaleString() + "đ.";
}

