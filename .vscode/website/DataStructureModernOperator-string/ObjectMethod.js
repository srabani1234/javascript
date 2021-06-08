const jonas ={
    firstName : "srabani",
    lastName : "Adhikary",
    birthYear: 1991,
    job: "teacher",
    isDrivingLicence:true,
    friends: ["mary","te","fe"],
    callAge: function(){  
        console.log(jonas);
this.age = 2037 - jonas.birthYear;
return this.age;
    },
    getSummary: function(){
        return `${this.firstName} is a ${this.age} -year ol ${this.job}, and he has ${this.isDrivingLicence? 'a':'No'}`
    }
    
    };

    //console.log(jonas.callAge());
    console.log(jonas);
    console.log(jonas.getSummary());
    console.log(this);