app.controller('PostsController', ['$scope', 'PostsFactory', function ($scope, PostsFactory) {
  $scope.posts = PostsFactory;
  $scope.upvote = function (post) {
    post.votes += 1
  }
  $scope.downvote = function (post) {
    post.votes -= 1
  }
  $scope.getClass = function (post) {
    return post.votes > 0 ? 'green' : post.votes < 0 ? 'red' : ''
  }
}])
