// Challenge #3 

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi != john.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is ${ john.bmi > mark.bmi ? 'higher' : 'lower'} than ${mark.fullName}'s BMI (${mark.bmi})`);
}