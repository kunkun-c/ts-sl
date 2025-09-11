
// Practice
// 1. String 
// Khai báo một biến fullName có kiểu string, và viết hàm greet nhận vào tên và trả về câu chào "Hello, <tên>!".
const fullName: string = "Kun"

const greet = (name: string): string => {
    return `Hello, ${name}`
}

// 2. Number

// Viết hàm calculateArea nhận vào chiều dài và chiều rộng (kiểu number), trả về diện tích hình chữ nhật.

const calculateArea = (x: number, y: number): number => {
    return x * y
}

// 3. Boolean

// Khai báo hàm isEven nhận một số (number) và trả về true nếu số đó chẵn, false nếu lẻ.

const isEven = (num: number): boolean => {
    return num % 2 === 0
}

// 4. Array

// Tạo một mảng scores gồm các số (number). Viết hàm getAverage nhận mảng đó và trả về điểm trung bình.

const scores: number[] = [5, 8, 9, 10, 7]

const getAverage = (scores: number[]): number => {
    const total = scores.reduce((acc, score) => acc + score, 0)
    return total / scores.length
}


// 5. Object

// Định nghĩa type User với các thuộc tính: id: number, name: string, isAdmin: boolean.
// Viết hàm printUser nhận một User và in ra chuỗi "User: <id> - <name> - Admin: <isAdmin>".

type User = {
    id: number,
    name: string,
    isAdmin: boolean
}

const user: User = { id: 1, name: 'Kun', isAdmin: true}

const printUser = (user: User): string => {
    return `User: ${user.id} - ${user.name} - Admin: ${user.isAdmin}`
}