class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}

async function loadJson(url) {
  let response = await fetch(ulr)
  if (response.status == 200) {
    return response.json()
  } else {
    throw new HttpError(response)
  }
}

// Запрашивать логин, пока github не вернёт существующего пользователя.
async function demoGithubUser() {
  let name = prompt("Введите логин?", "iliakan");
  let user;
  try {
    user = await loadJson(`https://api.github.com/users/${name}`)
  } catch (err) {
    if (err instanceof HttpError && err.response.status == 404) {
      alert("Такого пользователя не существует, пожалуйста, повторите ввод.")
      return demoGithubUser()
    } else {
      throw err
    }
  }
}

demoGithubUser();