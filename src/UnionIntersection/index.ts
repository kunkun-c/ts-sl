
// Union cơ bản (User | Admin)
// Viết hàm printInfo(account: User | Admin) → in ra name, nếu là Admin thì in thêm permissions.

type User = { id: number; name: string; role: "user" }
type Admin = { id: number; name: string; role: "admin"; permissions: string[] }


const printInfo = (account: User | Admin ): string =>  {
    const accountName: string = account.name
    if (account.role === 'admin') {
        return `This is Admin: ${account.name} - ${account.permissions.concat('-')}`
    } else {
        return `This is User: ${account.name}`
    }
}

const userKun: User = { id: 1, name: 'Kun', role: 'user' }
const adminKu: Admin = { id: 2, name: 'Li', role: 'admin', permissions: ['Create', 'Delete', 'Edit'] }

// 2. Union với function parameter

// Viết hàm formatInput(input: string | number)

// Nếu input là string → trả về input.toUpperCase().
    
// Nếu input là number → trả về input.toFixed(2).

const formatInout = (input: string | number): any => {
    if (typeof input === 'string') {
        return input.toUpperCase()
    } else {
        return input.toFixed(2)
    }
}

// 3. Intersection cơ bản (Animal & Pet)
// Tạo type PetAnimal = Animal & Pet.
// Khai báo một biến dog: PetAnimal và in ra đủ thông tin.

type Animal = { species: string; age: number }
type Pet = { name: string; owner: string }

type PetAnimal = Animal & Pet

const dog: PetAnimal = {name: 'KunKun', species: 'Dog', age: 12, owner: 'LiKun'}

const printPetInfo = (pet: PetAnimal): string => {
    return `Pet Info: ${pet.name} - ${pet.species} - ${pet.age} - ${pet.owner}`
}

// 4. Intersection nâng cao (User & Timestamp)
// Tạo type UserWithTimestamp = UserProfile & Timestamp.
// Khai báo biến profile và gán dữ liệu giả.

type Timestamp = { createdAt: Date; updatedAt: Date }
type UserProfile = { id: number; username: string }

type UserWithTimestamp = UserProfile & Timestamp

const profile: UserWithTimestamp = {
    id: 1,
    username: 'Kun',
    createdAt: new Date("2004-07-14"),
    updatedAt: new Date("2004-07-15")
}


// 5. Union + Narrowing

// Viết hàm move(entity: "left" | "right" | "up" | "down")
// → in ra "Moving <entity>".
// Gợi ý: dùng switch hoặc if để narrowing literal types.

type Directions = "left" | "right" | "up" | "down"

const move = (entity: Directions) => {
    switch(entity){
        case 'left': return 'left'
        case "right": return "right" 
        case "up": return "up" 
        case "down": return "down" 
    }
}

// Bài 1.
// Định nghĩa type Circle với thuộc tính radius: number và type Square với thuộc tính side: number.

// Viết hàm getArea(shape: Circle | Square) để tính diện tích (circle: πr², square: a²).

type Circle = { radius: number }
type Square = { side: number }

const getArea = (shape: Circle | Square): number => "radius" in shape ? 3.14*(shape.radius)^2 : (shape.side)^2 

const aCircle: Circle = { radius: 1.2}
const aSquare: Square = { side: 1.6}



// Bài 2.
// Tạo type Employee = { id: number; name: string } và type Manager = { department: string }.

// Tạo type ManagerEmployee = Employee & Manager.

// Khai báo một biến boss kiểu ManagerEmployee và gán dữ liệu giả.

type Employee = { id: number; name: string }
type Manager = { department: string }

type ManagerEmployee = Employee & Manager

const boss: ManagerEmployee = { id: 1, name: "Boss", department: "IDK"}

// Bài 3.
// Viết hàm processValue(value: string | number | boolean)

// Nếu string → trả về độ dài chuỗi.

// Nếu number → trả về bình phương số đó.

// Nếu boolean → trả về nghịch đảo (true -> false, false -> true).

type Values = string | number | boolean

const processValue = (value: Values) => {
    if (typeof value === "string") {
        return value.length
    } else if ( typeof value === "number") {
        return value^2
    } else {
        return !value
    }
}