const message = document.querySelector("#login_message");

const account_date = [
    {
        "email": "louis@gmail.com",
        "password": "1314520"
    },
    {
        "email": "bosco@gmail.com",
        "password": "1314520"
    }
]

document.querySelector("#login").addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const login_email = form.login_email.value
    const login_password = form.login_password.value
    let success = false;

    for (let i = 0; i < account_date.length; i++) {
        if (login_email == account_date[i].email && login_password == account_date[i].password) {
            success = true;
        };
    };
    if (!success) {
        message.innerHTML = /*html*/ `
            <div class="error_display">
                <img class="error_icon" src="https://mweb-cdn.karousell.com/build/alert-error-2kjjYk_Edi.svg" title="">
                <span>用戶名稱或密碼不正確</span>
            </div>
        `;
    } else {
        message.innerHTML = /*html*/ `
            <div class="success_display">
                <i class="success_icon fa-solid fa-circle-check"></i>
                <span>輸入正確，即將跳轉網頁^__^</span>
            </div>
        `;
        setTimeout(function () {
            window.location.href = "main.html";
        }, 2000);
    }
});