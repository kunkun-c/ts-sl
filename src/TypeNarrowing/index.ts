// Bài 1. typeof

// Viết hàm processInput(input: string | number):

// Nếu là string → trả về độ dài (length).

// Nếu là number → trả về bình phương (n * n).

// type Values = number | string

// const toggleValue = (value: Values): Values => typeof value === "string" ? value.length : value*value


// Bài 2. typeof nâng cao

// Viết hàm toggleValue(value: boolean | string):

// Nếu là boolean → trả về giá trị đảo ngược (!value).

// Nếu là string → trả về string viết hoa (toUpperCase).

type Values = boolean | string

const toggleValue = (value: Values): Values => typeof value === "boolean" ? !value : value.toUpperCase()

// Bài 3. in

// Khai báo type:

// type Dog = { species: "dog"; barkVolume: number }
// type Fish = { species: "fish"; swimSpeed: number }


// Viết hàm describeAnimal(animal: Dog | Fish):

// Nếu có barkVolume → in ra "Dog barks with volume X".

// Nếu có swimSpeed → in ra "Fish swims at speed Y".

type Dog = { species: "dog"; barkVolume: number }
type Fish = { species: "fish"; swimSpeed: number }

type DogOrFish = Dog | Fish

const describeAnimal = (animal: DogOrFish): string => "barkVolume" in animal ? "Dog barks with volume X" : "Fish swims at speed Y"


// Bài 4. instanceof

// Tạo class Car và Bike.

// Car có method drive().

// Bike có method ride().

// Viết hàm useTransport(t: Car | Bike):

// Nếu là Car → gọi drive().

// Nếu là Bike → gọi ride().

class Car {
    drive (): string {
        return "Run"
    }
}

class Bike {
    ride (): string {
        return "Go"
    }
}

type CarOrBike = Car | Bike

const useTransport = (t: CarOrBike): string => t instanceof Car ? t.drive() : t.ride()

// Bài 5. Kết hợp typeof + in

// Khai báo type:

// type Product = { id: number; name: string; price: number }
// type Discount = { code: string; percentage: number }


// Viết hàm applyDiscount(item: Product | Discount | string):

// Nếu là string → in "Invalid input".

// Nếu là Product → in "Product: <name> - $<price>".

// Nếu là Discount → in "Discount: <code> - <percentage>%".

type Product = { id: number; name: string; price: number }
type Discount = { code: string; percentage: number }

const applyDiscount = (item: Product | Discount | string):  string => {
    if (typeof item === "string") {
        return "Invalid input"
    } else if ("name" in item) {
        return `Product: ${item.name} - ${item.price}`    
    } else {
        return `Discount: ${item.code} - ${item.percentage}`
    }
}