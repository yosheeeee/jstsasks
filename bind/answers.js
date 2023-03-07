// 1) выведет null, т.к. контекст привязан

// 2) Выведет Вася, т.к. первый бинд нельзя изменить

// 3) бинд создает новый объект, поэтому свойства тест в нем не будет

// 4) 

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// 5)
function askPassword(login) {
    let password = prompt("Password?", '');
    login(password == 'rockstar')
}

user = {
    name: 'John',

    login(result) {
        alert(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

askPassword(user.login.bind(user)); // ?