function daycount() {
    // code
    let Month = document.getElementById('Month').value;
    //lay  gia tri tu o input
    if(Month>=0){
        if(Month==2)
        {
            alert('Tháng có 29 ngày nếu năm nhuận còn không thì là 28 ngày')
        }
        if(Month==1||Month==3||Month==5||Month==7||Month==8||Month==10||Month==12)
        {
            alert('Tháng có 31 ngày')
        }
        else{
            alert('Tháng có 30 ngày')
        }

    
    }
    else
    {
        alert('error')
    }
    
}