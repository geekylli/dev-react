// Named Export (이름 내보내기) - n번 내보내기 / 이름이 필수!
const a = 123
const b = true
const c = {}
export { a, b, c }

// Default Export (기본 내보내기) - 1번 내보내기 / 이름이 사용되지 않음!
export default 'Hello~'

const string = '123'
const number = +string
const number1 = Number(string)
const number2 = Number.parseInt(string, 10)
const number3 = Number.parseFloat(string)
// const number4 = parseFloat(string)
