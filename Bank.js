// function BankAccount(customerName,balance=0){
//     this.name=customerName;
//     this.balance=balance;
//     this.AccountNumber=Date.now();
// }
//     BankAccount.prototype.Account=function(){
//         return 'Name'+this.customerName+ 'Balance:'+this.balance+'AccountNumber:'+this.AccountNumber ;
//     }

//  const System=new BankAccount('pradosh',10000);
//  console.log(System.Account());
/*{ <script>
  // Define the RadioOption class
function RadioOption(label, message) {
  this.label = label;
  this.message = message;
}

// Add a method to the RadioOption prototype
RadioOption.prototype.printMessage = function() {
  console.log(this.message);
};

// Define the RadioGroup class
function RadioGroup(options) { }
//   this.options = options;
// }

// // Add a method to the RadioGroup prototype
// RadioGroup.prototype.printSelectedOptionMessage = function(selectedIndex) {
//   const selectedOption = this.options[selectedIndex];
//   selectedOption.printMessage();
// };

// // Create radio options
// const vehicleOption = new RadioOption("Vehicle", "Vehicle is running");
// const carOption = new RadioOption("Car", "Car is running");
// const truckOption = new RadioOption("Truck", "Truck is running");
// const otherOption = new RadioOption("Other", "Vehicle is running");

// // Create a radio group with the options
// const radioGroup = new RadioGroup([vehicleOption, carOption, truckOption, otherOption]);

// // Example usage:
// const selectedIndex = 3; // Index of the selected option (0 for Vehicle, 1 for Car, 2 for Truck, 3 for Other)
// radioGroup.printSelectedOptionMessage(selectedIndex);*/


function BankAccount(customername, balance = 0) {
  this.name = customername;
  this.balance = balance;
  this.AccountNumber = Date.now();
}
BankAccount.prototype.deposite=function(amount){
  this.balance +=amount;
};

BankAccount.prototype.withdraw=function(amount){
  this.balance -=amount;
};