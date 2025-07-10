interface UserA {
  name: string
}
interface UserB {
  age: number
}

const user: UserA & UserB = {
  name: 'Neo',
  age: 22
}
const a: { x: number } & { y: string } = { x: 1, y: '1' }

// 유니언(Union) 타입 => 또는, |
// 인터섹션(Intersection) 타입 => 그리고, &
