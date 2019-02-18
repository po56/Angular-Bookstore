angular.
module('paginate')
.filter('paginated',function(){
    return function(origionalCollection,currentPage,limit){
        return origionalCollection.slice(currentPage*limit,(currentPage+1)*limit);
    }
})