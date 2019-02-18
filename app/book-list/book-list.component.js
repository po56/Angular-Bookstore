

angular.
module('bookList').
component('bookList',{
    templateUrl : 'book-list/book-list.html',
    controller: ['$http',function bookListController($http){
        var self = this;

        self.currentPage = 0;
        
        $http.get('books/books.json').then(function(response){
            self.books = response.data;
            console.log(self.books);
        })

        self.updatePage = function(pageNumber){
            self.currentPage = pageNumber;
        }
    }]

});
