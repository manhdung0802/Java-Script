
let i = -1;
let diem = 0;
let cauHoi = [
    "Câu hỏi 1: Ăn quả nhớ kẻ ...?",
    "Câu hỏi 2: Học ăn học nói, học gói ...?",
    "Câu hỏi 3: Môi hở răng ...?",
    "Câu hỏi 4: Bố mẹ có 6 người con trai, mỗi người con trai có 1 em gái. Hỏi gia đình đó có bao nhiêu người?",
    "Câu hỏi 5: Hệ điều hành trên máy tính phổ biến nhất là gì?",
]
let dapAn = [
    ['chân mày', 'trộm', 'đường thẳng', 'trồng cây', 'D'],
    ['học mở', 'mang về', 'quần áo', 'bánh chưng', 'A'],
    ['hô', 'lạnh', 'vàng', 'lợi', 'B'],
    ['6 người', '7 người', '8 người', '9 người', 'D'],
    ['MacOs', 'Linux', 'Window', 'Android', 'C']
]
class troChoi {
    constructor(cauHoi, dapAn) {
        this.cauHoi = cauHoi;
        this.dapAn = dapAn;
    }
    getResult(dapAn) {
        return dapAn[i][4];
    }
}
let choi = new troChoi(cauHoi, dapAn);
function checkResult(id, choi) {
    block_click();
    document.getElementById(id).style.backgroundColor = "yellow";
    document.getElementById(id).style.color = "black";
    setTimeout(() => {  
        if (id.toLowerCase() == choi.getResult(dapAn).toLowerCase()) {
            document.getElementById(id).style.backgroundColor = "green";
            
            diem++;
            setTimeout(() => {
                if(diem == choi.cauHoi.length){
                    document.getElementById('end_game_id').style.display = "block";
                    document.getElementById('end_game_congrate').innerText = 'Chúc mừng bạn đạt được ' + diem +' diem. Phần thưởng của bạn là ';
                }
                else{ 
                    document.getElementById('win_id').style.display = "block";
                }
                document.getElementById('diem').innerText = 'Điểm của bạn: ' + diem;
            }, 1300);
            
        }
        else {
            document.getElementById(id).style.backgroundColor = "red";
            setTimeout(() => {
                document.getElementById('restart_id').style.display = "block";
            }, 1300);
        }
}, 1700);
}
function next(choi) {
    resetBtn();
    document.getElementById('next').style.display = 'none';
    if (i < choi.cauHoi.length - 1) {
        i++;
        document.getElementById('question').innerText = 'Bạn có tất cả '+ choi.cauHoi.length +' câu hỏi \n' + choi.cauHoi[i];
        document.getElementById('A').innerText = 'A. ' + choi.dapAn[i][0];
        document.getElementById('B').innerText = 'B. ' + choi.dapAn[i][1];
        document.getElementById('C').innerText = 'C. ' + choi.dapAn[i][2];
        document.getElementById('D').innerText = 'D. ' + choi.dapAn[i][3];
    }
}
function back(choi) {
    resetBtn();
    --i;
    if (i < 0) {
        i = 0;
    }
    document.getElementById('question').innerText = 'Bạn có tất cả '+ choi.cauHoi.length +' câu hỏi \n' + choi.cauHoi[i];
    document.getElementById('A').innerText = 'A. ' + choi.dapAn[i][0];
    document.getElementById('B').innerText = 'B. ' + choi.dapAn[i][1];
    document.getElementById('C').innerText = 'C. ' + choi.dapAn[i][2];
    document.getElementById('D').innerText = 'D. ' + choi.dapAn[i][3];
}
function resetBtn(){
    document.getElementById('A').style.backgroundColor = 
    document.getElementById('B').style.backgroundColor = 
    document.getElementById('C').style.backgroundColor = 
    document.getElementById('D').style.backgroundColor = "rgb(68, 99, 255)";
    document.getElementById('win_id').style.display = "none";
    document.getElementById('A').style.color = 
    document.getElementById('B').style.color = 
    document.getElementById('C').style.color = 
    document.getElementById('D').style.color = "white";
    document.getElementById('A').disabled =
    document.getElementById('B').disabled =
    document.getElementById('C').disabled =
    document.getElementById('D').disabled =
    document.getElementById('next').disabled =
    document.getElementById('restart').disabled =
    document.getElementById('back').disabled = false;
}
function block_click(){
    document.getElementById('A').disabled =
    document.getElementById('B').disabled =
    document.getElementById('C').disabled =
    document.getElementById('D').disabled =
    document.getElementById('next').disabled =
    document.getElementById('restart').disabled =
    document.getElementById('back').disabled = true;
}
function restart(){
    location.reload();
}
function add(){
    cauHoi.push(document.getElementById('ten_cau_hoi').value);
    dapAn.push([document.getElementById('dap_an_A').value,document.getElementById('dap_an_B').value,
    document.getElementById('dap_an_C').value,document.getElementById('dap_an_D').value,document.getElementById('dap_an_dung').value]);

    document.getElementById('ten_cau_hoi').value ='';
    document.getElementById('dap_an_A').value ='';
    document.getElementById('dap_an_B').value ='';
    document.getElementById('dap_an_C').value ='';
    document.getElementById('dap_an_D').value ='';
    document.getElementById('dap_an_dung').value ='';
    document.getElementById('question').innerText = 'Bạn có tất cả '+ choi.cauHoi.length +' câu hỏi \n' + choi.cauHoi[i];

}
function delete_question(){
    cauHoi.splice(-1,1);
    dapAn.splice(-1,1);
    document.getElementById('question').innerText = 'Bạn có tất cả '+ choi.cauHoi.length +' câu hỏi \n' + choi.cauHoi[i];

}