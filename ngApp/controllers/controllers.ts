namespace cars.Controllers {

  export class HomeController {
    public cars;

    constructor(private $http: ng.IHttpService) {
      this.$http.get('/api/cars').then((response) => {
        this.cars = response.data;
      });
    }
  }


  export class AboutController {
    // place
    public car;

    public deleteCar() {
      this.$http.delete('/api/cars/' + this.$stateParams['id']).then((response) => {
        this.$state.go('home');
      });
    }

    constructor(private $http: ng.IHttpService,
                private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService) {
        this.$http.get('/api/cars/' + this.$stateParams['id']).then((response) => {

        this.car = response.data;
      })
    }
  }

  export class AddCarController {
    public car;

    public addCar() {
      this.$http.post('/api/cars', this.car).then((response) => {
        this.$state.go('home');
      })
    }

    constructor(private $http: ng.IHttpService, private $state: ng.ui.IStateService) {

    }
  }
  export class EditCarController {
    public car;

    public editCar() {
      this.$http.put('/api/cars', this.car).then((response) => {
        this.$state.go('home');
      });
    }
    constructor(private $http: ng.IHttpService,
      private $state: ng.ui.IStateService,
      private $stateParams: ng.ui.IStateParamsService) {
      this.$http.get('/api/cars/' + this.$stateParams['id']).then((response) => {
        this.car = response.data;
      })
    }
  }
}
