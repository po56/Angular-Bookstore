angular.
module('paginate')
.component('paginator',{

    templateUrl: 'core/paginate/paginate.html',

    bindings:{
        length: '<',
        limitPerPage: '<',
        currentPage: '<',
        onPageUpdate: '&',
    },

    controller : function paginatorController(){

        var ctrl = this;
        
        function createPageCollection(){
            var pgArray = [];
            var pagesToCreate = Math.ceil(ctrl.length/ctrl.limitPerPage);
            for(var x = 0; x < pagesToCreate; x++){
                pgArray.push(x);
            }
            return pgArray;
        }
    
        ctrl.$onInit = function(){
            console.log(ctrl.currentPage);
            ctrl.pages = createPageCollection();
        }

        ctrl.getClass = function(page){
            if(ctrl.currentPage == page){
                return 'paginatedItem paginatedItemSelected'
            }
            return 'paginatedItem';
        }

    
        
       
    
    }


});

