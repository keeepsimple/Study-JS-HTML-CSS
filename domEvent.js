var btnElement = document.querySelectorAll('button')
btnElement.forEach(function(x){
    x.onclick = function(e){
        var btn = e.target;
        btn.style.color='red'
        btn.style.width = '200px';
        btn.style.height = '300px';
    }
})

var inputEle = document.querySelector('select')
inputEle.onchange = function(e){
    console.log(e.target)
}

//preventDefault: loai bo hanh vi trinh duyet trong 1 event
//stopPropagation: loai bo su kien noi bot