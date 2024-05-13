//Location - Jungle | addAnimal, soundOff
//Animal - Tiger, Monkey, Snake | sound, eat, sleep, play(Monkey), energyLevel, population
//Food - Meat, Fish, Bugs, Grain

//Q1
class Jungle {
    constructor(animals = [], foods = [], name = "Jungle") {
        this.name = name;
        this.animals = animals;
        this.food = foods;
    }
    //Q5
    soundOff() {
        this.animals.forEach(animal => {
            animal.sound();
            animal.energyReport();
        });
    }
    addAnimal(animal) {
        this.animals.push(animal);
    }
    addFood(food) {
        this.food.push(food);
    }
    listAnimals() {
        console.log(`${this.name} contains ${this.animals.length} animals`);
        this.animals.forEach(animal => {
            console.log(animal);
        });
    }
    listFood() {
        console.log(`${this.name} contains ${this.food.length} food`);
        this.food.forEach(food => {
            console.log(food);
        });
    }
    getAnimal(name, id) {
        return this.animals.find(animal => animal.name === name && animal.id === id);
    }
}

//Q2
class Animal {
    static qty = 0;
    constructor(name, energy = 0) {
        this.name = name;
        this.energy = energy;
        Animal.qty++;
        this.id = Animal.qty;
    }
    sound() {
        if(this.energy >= 3){
            console.log(`${this.name} makes a sound`);
            this.energy -= 3;
        }
        else{
            console.log(`${this.name} is too tired to make a sound`);
        }
    }
    eat(food) {
        console.log(`${this.name} eats ${food.name}`);
        this.energy += 5;
    }
    sleep() {
        console.log(`${this.name} sleeps`);
        this.energy += 10;
    }
    play(){
        console.log(`${this.name} cannot play`);
    }
    energyReport() {
        console.log(`${this.name} has ${this.energy} energy left`);
    }
    population(){
        console.log(`Population only calculated for specific species`);
    }
}

class Tiger extends Animal {
    static qty = 0;
    constructor(energy) {
        super("Tiger", energy);
        Tiger.qty++;
        this.id = Tiger.qty;
    }
    eat(food) {
        //Q11
        if (food instanceof Grain) {
            console.log(`${this.name} can not eat ${food.name}`);
        }
        else{
            super.eat(food);
        }
    }
    sound() { //Q8
        if(this.energy >= 3){
            console.log(`${this.name} roars!`)
            this.energy -= 3;
        }
        else{
            console.log(`${this.name} is too tired to make a sound`);
        }
    }
    //Q6
    sleep() {
        console.log(`${this.name} sleeps`)
        this.energy += 5;
    }
    //Q3
    population(){
        console.log(`${this.name} has ${Tiger.qty} population`)
    }
}

class Monkey extends Animal {
    static qty = 0;
    constructor(energy) {
        super("Monkey", energy);
        Monkey.qty++;
        this.id = Monkey.qty;
    }

    eat(food) {
        console.log(`${this.name} eats ${food.name}`);
        this.energy += 2; //Q7
    }
    sound() {
        if(this.energy >= 4){
            console.log(`${this.name} Ooo Ooo's`)
            this.energy -= 4; //Q7
        }
        else{
            console.log(`${this.name} is too tired to make a sound`);
        }
    }
    play() { //Q8
        console.log(`Oooo Oooo Oooo`);
        if(this.energy > 8) {
            this.energy -= 8;
        }
        else  {
            console.log(`${this.name} is too tired`);
        }
    }
    population(){
        console.log(`${this.name} has ${Monkey.qty} population`)
    }
}

class Snake extends Animal {
    static qty = 0;
    constructor(energy) {
        super("Snake", energy);
        Snake.qty++;
        this.id = Snake.qty;
    }
    sound(){
        if(this.energy >= 3){
            console.log(`${this.name} hisses`)
            this.energy -= 3;
        }
        else{
            console.log(`${this.name} is too tired to make a sound`);
        }
    }
    population(){
        console.log(`${this.name} has ${Snake.qty} population`)
    }
}

//Q9
class Food {
    constructor(name) {
        this.name = name;
    }
}

class Meat extends Food {
    constructor(name) {
        super(name);
        this.name = 'Meat';
    }
}

class Fish extends Food {
    constructor(name) {
        super(name);
        this.name = 'Fish';
    }
}

class Bugs extends Food {
    constructor(name) {
        super(name);
        this.name = 'Bugs';
    }
}

class Grain extends Food {
    constructor(name) {
        super(name);
        this.name = 'Grain';
    }
}

console.log("DEFAULT ANIMAL"); // Q4
const defaultAnimal = new Animal("Bird");
defaultAnimal.energyReport();
defaultAnimal.sleep();
defaultAnimal.eat(new Food("default"));
defaultAnimal.energyReport();
defaultAnimal.sound();
defaultAnimal.energyReport();


console.log("PERFORMING TIRED ANIMAL SOUND OFF"); // Q5
const jungle = new Jungle();
jungle.addAnimal(new Tiger());
jungle.addAnimal(new Monkey());
jungle.addAnimal(new Snake());
jungle.addAnimal(new Snake());
jungle.addAnimal(new Snake());
jungle.addFood(new Meat());
jungle.addFood(new Fish());
jungle.addFood(new Bugs());
jungle.addFood(new Grain());
jungle.addAnimal(defaultAnimal)
console.log(jungle);
jungle.soundOff();
jungle.listFood();
jungle.listAnimals();
console.log("PERFORMING SOME AWAKE ANIMAL SOUND OFF"); // Q5
jungle.getAnimal("Tiger", 1).sleep();
jungle.getAnimal("Snake", 3).sleep();
jungle.soundOff();

console.log("PERFORMING TIGER TEST Q6/Q11");
const tigerTest = new Tiger();
tigerTest.energyReport();
tigerTest.sleep(); // Q6
tigerTest.energyReport();
tigerTest.eat(new Grain()); // Q11
tigerTest.energyReport();
tigerTest.eat(new Meat());
tigerTest.energyReport();

console.log("PERFORMING MONKEY TEST Q7,Q8,Q9"); // Q7
const monkeyTest = new Monkey(); // Q7
monkeyTest.eat(new Food("Banana"));
monkeyTest.energyReport();
monkeyTest.sound();
monkeyTest.energyReport();
monkeyTest.sleep();
monkeyTest.energyReport();
monkeyTest.play(); // Q8 & 9
monkeyTest.energyReport();

console.log("MONKEY TIRED PLAY TEST Q9")
const monkeyTired = new Monkey();
monkeyTired.energyReport()
monkeyTired.play();
monkeyTired.energyReport()

console.log("EXIST/POPULATION Q3")
monkeyTired.population()
monkeyTest.population()

tigerTest.population()
const snake_test = new Snake();
snake_test.population()

defaultAnimal.population()


// Bonus 12 if have time -- Q12/ create a dictionary of animal actions, get random one and perform it
// might need to random food input as well to test or use default food. KISS for now and make sure submission works



