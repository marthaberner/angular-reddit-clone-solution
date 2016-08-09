app.controller('PostsController', ['$scope', 'PostsFactory', function ($scope, PostsFactory) {
  $scope.posts = PostsFactory;
  $scope.upvote = function (post) {
    post.votes += 1
  }

  $scope.showingPostForm = false;

  $scope.submitPost = function () {
    if($scope.post){
      $scope.post.comments = [];
      $scope.post.votes = 0;
      $scope.post.date = new Date();
      $scope.posts.push($scope.post)
      $scope.post = {};
      $scope.togglePostForm();
    }

  }

  $scope.togglePostForm = function () {
    $scope.showPostForm = !$scope.showPostForm;
  }

  $scope.sortBy = '';
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
