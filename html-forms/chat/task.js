const botMessages = [
    'Вы не кипили ни одного товара для того, чтобы так с нами разговаривать!',
    'Кто тут?',
    'Где ваша совесть?',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше.',
    'Добрый день! До свидания!',];

    let timeHHMM = null;

const chatSidebar = document.querySelector(`.chat-widget__side`);
const chatPopUp = document.querySelector(`.chat-widget`);
const messageClientInput = document.getElementById(`chat-widget__input`);
const messageToChat = document.getElementById(`chat-widget__messages`);

function showChat() {
    chatPopUp.classList.toggle(`chat-widget_active`);
}

function getDate() {
    const timeCurrent = new Date;
    let timeHH = timeCurrent.getHours();
        if (timeHH < 10) {
            timeHH = `0${timeHH}`;
        }
    let timeMM = timeCurrent.getMinutes();
        if (timeMM < 10) {
            timeMM = `0${timeMM}`;
        }
    timeHHMM = `${timeHH}:${timeMM}`;
}

chatSidebar.addEventListener(`click`, showChat);

messageClientInput.addEventListener(`keydown`, e => {
    if (messageClientInput.value) {
        if (e.keyCode === 13) {
            getDate();

            messageToChat.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">` + timeHHMM + `</div>
                    <div class="message__text">` + messageClientInput.value + `</div>
                </div>`;
                messageClientInput.value = ``;

            setTimeout(function() {
                getDate();

                messageToChat.innerHTML += `
                    <div class="message">
                        <div class="message__time">` + timeHHMM + `</div>
                        <div class="message__text">` + botMessages[Math.floor(Math.random() * botMessages.length)] + `</div>
                    </div>`;
                messageClientInput.value = ``;
            }, 500);
        }
    }
});