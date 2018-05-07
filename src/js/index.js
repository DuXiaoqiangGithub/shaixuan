
// server data   获取数据
var personArr = [
{name: 'af维尼', src: './src/img/1.png', des:'超可爱', sex:"f"},    
{name: 'bm维尼', src: './src/img/2.png', des:'超可爱', sex:"m"},
{name: 'cf维尼', src: './src/img/3.png', des:'超可爱', sex:"f"},
{name: 'am维尼', src: './src/img/4.png', des:'超可爱', sex:"m"},
{name: 'bf维尼', src: './src/img/5.png', des:'超可爱', sex:"f"},
{name: 'cm维尼', src: './src/img/1.png', des:'超可爱', sex:"m"}, 
{name: 'af维尼', src: './src/img/2.png', des:'超可爱', sex:"f"},
{name: 'bm维尼', src: './src/img/3.png', des:'超可爱', sex:"m"}
];



// status 状态
// var state = {
//     text: '', 
//     sex: 'a'
// }




// 绑定事件   输入  性别按钮
oInput.oninput = function () {
    Store.dispatch({type:'text', value:this.value});
    // state.text = this.value;
    // var arr1 =  filterByText(personArr, state.text);
    // var arr2 = filterArrBySex(arr1, state.sex);
    // renderPage(lastFilterFunc(personArr));
}
 
var oSpanArr = Array.prototype.slice.call(document.getElementsByTagName('span'), 0);
var lastSpan = oSpanArr[oSpanArr.length - 1];
oSpanArr.forEach(function (ele, index) {
    ele.onclick = function () {
        this.className = 'active';
        if(this == lastSpan) {
            lastSpan.className = 'active';
        }else{
            lastSpan.className = '';
        }
        lastSpan = this;
        Store.dispatch({type: 'sex', value: this.getAttribute('sex')});
        // state.sex = this.getAttribute('sex');
        // var arr1 = filterArrBySex(personArr, state.sex);
        // var arr2 = filterByText(arr1, state.text);
        // renderPage(lastFilterFunc(personArr));
    }
});

// 渲染
function renderPage (data) {
    var allStr = '';
    data.forEach(function(ele, index) {
        allStr = allStr + '<li><img src = "' + ele.src + '"><img><p class="name">' + ele.name + '</p><p class="des">' + ele.des + '</p></li>'
    });
    oUl.innerHTML = allStr; 
}
renderPage(personArr);




Store.subscribe(function () {
    renderPage( lastFilterFunc(personArr) );
});




