let GithubApiFactory = $http => {
  const API = 'https://api.github.com/users/cpodlesny';

  let getData = (param, page, per_page) => {
    if(page !== undefined && per_page !== undefined){
      var pagination = `page=${page}&per_page=${per_page}`;
    }
    else {
      pagination = ``;
    }
    if(param !== undefined){
      return $http.get(`${API}/${param}?${pagination}`)
    }
    else {
      return $http.get(`${API}`);
    }
  };

  return { getData };

};

GithubApiFactory.$inject = ['$http'];

export default GithubApiFactory;
