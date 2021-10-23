function greeting() {
    document.querySelector("#greeting h2").innerHTML = '안녕하세요! 새내기 개발자입니다 :)'
}

function framework() {
    document.querySelector("#greeting h2").innerHTML = '제 프레임워크 기술입니다 :)'
}

function project() {
    document.querySelector("#greeting h2").innerHTML = '제가 작업한 프로젝트입니다 :)'
}

function handleClick(event) {
    event.preventDefault()
}