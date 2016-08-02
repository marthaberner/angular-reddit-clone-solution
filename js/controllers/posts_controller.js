app.controller('PostsController', ['$scope', 'PostsFactory', function ($scope, PostsFactory) {
  $scope.posts = PostsFactory;
  $scope.upvote = function (post) {
    post.votes += 1
  }
  $scope.comment = {};

  $scope.submitComment = function () {
    this.post.comments.push($scope.comment);
    this.showCommentForm = false;
    this.showComments = true;
    $scope.comment = {};
  }

  $scope.showComments = false;
  $scope.showCommentForm = false;

  $scope.toggleComments = function () {
    this.showComments = !this.showComments;
  }

  $scope.toggleCommentForm = function () {
    this.showCommentForm = !this.showCommentForm;
  }
  $scope.downvote = function (post) {
    post.votes -= 1
  }
  $scope.getClass = function (post) {
    return post.votes > 0 ? 'green' : post.votes < 0 ? 'red' : ''
  }
}])
