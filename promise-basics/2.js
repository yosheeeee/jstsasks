function delay(ms) {
  return new Promise(reslove => setTimeout(reslove, ms))
}

delay(3000).then(() => alert('выполнилось через 3 секунды'))