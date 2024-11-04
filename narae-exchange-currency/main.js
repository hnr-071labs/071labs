//1. 박스 2개 만들기
//2. 드랍다운 리스트 만들기
//3. 환율정보 들고오기
//4. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
//5. 금액을 입력하면 환전이 된다
//6. 드랍다운 리스트에서 아이템을 선택하면 다시 그 단위 기준으로 환전이 됨
//7. 숫자를 한국어로 읽는법
//8. 반대로 밑에 박스에서 숫자를 바꿔도 위 박스에 환율이 적용이 된다.


let currencyRatio= {
    USD: {
        KRW:1371.58,
        USD:1,
        VND:25245.00,
        unit:"달러"
    },
    KRW: { 
        KRW:1,
        USD:0.00073,
        VND:18.41,
        unit:"원"
    },
    VND: {
        KRW:0.054,
        USD:0.000040,
        VND:1,
        unit:"동"
    }
};
let fromCurrency = "USD";
let toCurrency = "USD";

// 1. console.log(currencyRatio.VND.unit);

//console.log(currencyRatio["VND"].unit);


document
.querySelectorAll("#from-currency-list a")
.forEach((menu) => menu.addEventListener("click",function(){
    //1. 버튼을 가져온다
    //2. 버튼에 값을 바꾼다
    //3. 선택된 currency값을 변수에 저장해준다
    document.getElementById("from-button").textContent = this.textContent;
    fromCurrency = this.textContent;
    console.log("fromcurrey는", fromCurrency);
    convert()
}));

document
.querySelectorAll("#to-currency-list a")
.forEach((menu) => menu.addEventListener("click", function(){
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    convert()
}));

//1. 키를 입력하는 순간
//2. 환전이되서
//3. 환전된값이 보인다

function convert(){
    //1. 환전
    //2. 얼마를 환전? 가지고 있는 돈이 뭔지, 바구고자 하는 돈이 뭔지
    //3. 돈 * 환율 = 환전금액
    let amount = document.getElementById("from-input").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    console.log("환전결과는", convertedAmount);

    document.getElementById("to-input").value = convertedAmount;
};

//1. 드랍다운