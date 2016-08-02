app.controller('PostsController', ['$scope', 'PostsFactory', function ($scope, PostsFactory) {
  $scope.posts = PostsFactory;
}])
