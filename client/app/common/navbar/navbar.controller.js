class NavbarController {
  constructor($scope, $translate, $mdSidenav, $mdToast, $mdDialog, $mdMedia, $log) {
    this.firebaseUrl = 'https://travelerman.firebaseio.com';
    this.ref         = new Firebase(this.firebaseUrl);
    this.$scope      = $scope;
    this.$log        = $log;
    this.$translate  = $translate;
    this.$mdSidenav  = $mdSidenav;
    this.$mdDialog   = $mdDialog;
    this.$mdMedia    = $mdMedia;
    this.$mdToast    = $mdToast;
    this.isSigned        = false;
    this.userName        = '';
    this.userAvater      = '';
    this.currentLanguage = '';
    this.getLanguage();

  }
  chooseAuth(){
    this.$mdDialog.show({
      template: '<auth-dialog></auth-dialog>',
      clickOutsideToClose:true,
    })
      .then((authData) => {
        this.userName   = authData[authData.provider].displayName;
        this.userAvater = authData[authData.provider].profileImageURL;
        this.isSigned   = true;
        this.$log.debug(`Login as ${this.userName}`);
      }, () => {
        this.$log.debug(`Auth cancel`);
      });
  };
  logOut(){
    this.ref.unauth();
    this.isSigned = false;
    this.$mdToast.show(this.$mdToast.simple()
      .textContent(`${this.userName} is logged out`));
    this.$log.debug(`${this.userName} is logged out`);
  }
  getLanguage(){
    this.currentLanguage = this.$translate.use();
    this.$log.debug(`Set ${this.currentLanguage}`)
  };
  changeLanguage = lang => {
    this.$translate.use(lang);
    this.currentLanguage = this.$translate.use();
    this.$log.debug(`Changed ${this.currentLanguage}`);
  };
  toggle(param) {
    this.$mdSidenav(param).toggle()
      .then(() => {
        this.$log.debug(`${param} sidenav is toggled`);
      })
  };
}

NavbarController.$inject = [
  '$scope',
  '$translate',
  '$mdSidenav',
  '$mdToast',
  '$mdDialog',
  '$mdMedia',
  '$log'
];

export default NavbarController;
