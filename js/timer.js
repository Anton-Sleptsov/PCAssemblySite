const daysBlock = document.querySelector('.timer__days')
const hoursBlock = document.querySelector('.timer__hours')
const minutesBlock = document.querySelector('.timer__minutes')
const secondsBlock = document.querySelector('.timer__seconds')

let interval

const updateTimer = () => {
  const date = new Date()
  const dateDeadline = new Date('02 june 24')
  const timeRemaining = (dateDeadline - date) / 1000

  const days = Math.floor(timeRemaining / 60 / 60 / 24)
  const hours = Math.floor((timeRemaining / 60 / 60) % 24)
  const minutes = Math.floor((timeRemaining / 60) % 60)
  const seconds = Math.floor(timeRemaining % 60)

  const fDays = getWithFormat(days)
  const fHours = getWithFormat(hours)
  const fMinutes = getWithFormat(minutes)
  const fSeconds = getWithFormat(seconds)

  daysBlock.textContent = fDays
  hoursBlock.textContent = fHours
  minutesBlock.textContent = fMinutes
  secondsBlock.textContent = fSeconds

  daysBlock.nextElementSibling.textContent = getNumWord(days, 'День', 'Дня', 'Дней')
  hoursBlock.nextElementSibling.textContent = getNumWord(hours, 'Час', 'Часа', 'Часов')
  minutesBlock.nextElementSibling.textContent = getNumWord(minutes, 'Минута', 'Минуты', 'Минут')
  secondsBlock.nextElementSibling.textContent = getNumWord(seconds, 'Секунда', 'Секунды', 'Секунд')

  if (timeRemaining <= 0) {
    clearInterval(interval)

    daysBlock.textContent = '00'
    hoursBlock.textContent = '00'
    minutesBlock.textContent = '00'
    secondsBlock.textContent = '00'

    daysBlock.style.color = '#ff025f'
    hoursBlock.style.color = '#ff025f'
    minutesBlock.style.color = '#ff025f'
    secondsBlock.style.color = '#ff025f'
  }
}

const getWithFormat = time => time < 10 ? "0" + time : time

updateTimer()

interval = setInterval(updateTimer, 500)

function getNumWord(number, firstForm, secondForm, thirdForm) {
  const lastDigit = number % 10;
  const lastTwoDigit = number % 100;

  if (lastDigit == 1 && lastTwoDigit != 11)
    return firstForm;
  else if (lastDigit >= 2 && lastDigit <= 4 && !(lastTwoDigit >= 12 && lastTwoDigit <= 14))
    return secondForm;
  else
    return thirdForm;
}

/*
static string GetTimeWitsCorrectWord(int number, string firstForm, string secondForm, string thirdForm)
{
    int lastDigit = number % 10;
    int lastTwoDigit = number % 100;

    if (lastDigit == 1 && lastTwoDigit != 11)
        return $"{number} {firstForm} ";
    else if (lastDigit >= 2 && lastDigit <= 4 && !(lastTwoDigit >= 12 && lastTwoDigit <= 14))
        return $"{number} {secondForm} ";
    else
        return $"{number} {thirdForm} ";
}
*/