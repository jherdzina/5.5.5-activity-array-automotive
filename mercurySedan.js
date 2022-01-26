//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)

class Car extends VehicleModule {
    constructor(maximumPassengers, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService, availableRoom, timeForMaintenance) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
        this.availableRoom = true;

    }

    loadPassenger(num) {
        if(this.passenger < this.maximumPassengers) {
            this.availableRoom = true;
        } else {
            this.availableRoom = false;
        }
    }

    start() {
        if(this.fuel > 0) {
            return true;
        }
        return false;
    }
    scheduleService(mileage) {
        if(mileage > 30000) {
            this.timeForMaintenance = true;
        } else {
            this.timeForMaintenance = false;
        }
    }
}