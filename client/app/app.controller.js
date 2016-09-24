class AppController {
  constructor($scope, $timeout, $mdSidenav, $log) {
    this.name = 'about';
    this.$mdSidenav = $mdSidenav;
    this.$log = $log;
  }
  toggle(param){
    this.$mdSidenav(param).toggle()
      .then(() => {
        this.$log.debug(`close ${param} is done`);
      });
  }
}

AppController.$inject = ['$scope', '$timeout', '$mdSidenav', '$log'];

export default AppController;
