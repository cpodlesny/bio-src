class AboutController  {
  constructor(
    $scope,
    $location,
    $log,
    $mdToast,
    GithubApiFactory,
    localForageFactory) {
    this.$location = $location;
    this.repos = [];
    this.rollingCircle = true;

    GithubApiFactory.getData()
      .success(res => {
        this.publicRepos = res.public_repos;
      })
      .error(err => {
        $log.error(err)
      });

    localForageFactory.getData('repos').then(data => {
      if(data === null) {
        GithubApiFactory.getData('repos', 1, this.publicRepos)
          .success(res => {
            this.repos = res;
            this.rollingCircle = false;
            localForageFactory.setData('repos', this.repos);
            $mdToast.show($mdToast.simple()
              .textContent(`Data fetched from Github`));
            $log.info(`Data fetched from Github`);

          })
          .error(err => {
            $log.error(err)
          });
      }
      else {
        this.repos = data;
        this.rollingCircle = false;
        $scope.$apply();
        $mdToast.show($mdToast.simple()
          .textContent(`Data fetched from localForage`));
        $log.info(`Data fetched from localForage`);
      }
    });
  }
  goTo(path){
    this.$location.href(path.repo.url)
  }
}

AboutController.$inject = [
  '$scope',
  '$location',
  '$log',
  '$mdToast',
  'GithubApiFactory',
  'localForageFactory'];

export default AboutController;
