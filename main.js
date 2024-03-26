//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
//랜덤번호가 < 유저번호 Down!!
//랜덤번호가 > 유저번호 Up!!
//Rest버튼을 누르면 게임이 리셋된다
//5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하며 알려준다. 기회를 깍지 않는다
//유저가 이미 입력한 숫자를 또 입력하면,  알려준다, 기회를 깍지 않는다
//검색창에 마우스를 포커스 했을 시 자동으로 글 지워짐
//정답을 맞췄을 시 go disabled

let random_number = Math.floor(Math.random() * 100) + 1
console.log(random_number)
let user_input = document.querySelector("#user_input")
let go_button = document.querySelector("#go_button")
let text_box = document.querySelector("#text_box")
let reset_button = document.querySelector("#reset_button")
let chance = 5
let chance_number = document.querySelector("#chance_number")
let repeat_number = []
let main_img = document.querySelector("#main_img");

go_button.addEventListener('click', play)
reset_button.addEventListener('click', reset)
user_input.addEventListener('focus', function(){user_input.value = ""; user_input.placeholder = "";})

function play(){
    if(user_input.value < 1 || user_input.value > 100){
        text_box.textContent = "범위를 벗어난 값입니다."
        return
    }
    if(repeat_number.includes(user_input.value)){
        text_box.textContent = "이미 입력한 값입니다!!"
        return
    }

    chance--
    chance_number.textContent = `남은 기회: ${chance}번`

    if(user_input.value < random_number){
        text_box.textContent = "Up!!!"
        main_img.src = "up.gif";
    }else if(user_input.value > random_number){
        text_box.textContent = "Down!!!"
        main_img.src = "down.gif";
    }else{
        text_box.textContent = "정답입니다!!!"
        main_img.src = "정답.gif";
        go_button.style.opacity = 0.5
        go_button.disabled = true;
    }

    repeat_number.push(user_input.value)

    if(chance < 1){go_button.disabled = true; go_button.style.opacity = 0.5}
}

function reset(){
    random_number = Math.floor(Math.random() * 100) + 1
    console.log(random_number)
    text_box.textContent = "1~100 사이의 숫자를 입력"
    user_input.placeholder = "1부터100까지 숫자를 입력"
    chance = 5
    chance_number.textContent = `남은 기회: ${chance}번`
    user_input.value = ""
    go_button.disabled = false;
    repeat_number = [];
    go_button.style.opacity = 1
    main_img.src = "start.png";
}

//response
