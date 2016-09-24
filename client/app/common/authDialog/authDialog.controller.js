class authDialogController {
  constructor($mdDialog, $mdToast) {
    this.firebaseUrl = 'https://travelerman.firebaseio.com';
    this.ref         = new Firebase(this.firebaseUrl);
    this.$mdDialog   = $mdDialog;
    this.$mdToast    = $mdToast;
  }
  logIn(param){
    this.ref.authWithOAuthPopup(param, (error, authData) => {
      this.$mdToast.show(this.$mdToast.simple()
        .textContent(`Login as ${authData[authData.provider].displayName} 
        from ${authData.provider} account `));
      this.$mdDialog.hide(authData);
    });
  };
  cancel(){
    this.$mdDialog.cancel();
  }
}

authDialogController.$inject = [
  '$mdDialog',
  '$mdToast'
];

export default authDialogController;
