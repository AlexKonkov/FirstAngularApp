app.controller('mainController', function($scope){
    var step_pos = 0;
    var set_step = function(pos){
        $scope.class = $scope.steps[pos].color;
        $scope.title = $scope.steps[pos].title;
    };
    $scope.steps = [
        {title:'Step 1!', color:'red', switch_to:1},
        {title:'Step 2!', color:'green', switch_to:2},
        {title:'Step 3!', color:'yellow', switch_to:3},
        {title:'Step 4!', color:'blue', switch_to:0}];

    $scope.switch_step = function(){
        step_pos = $scope.steps[step_pos].switch_to;
        set_step(step_pos)
    };
    set_step(step_pos)
});


