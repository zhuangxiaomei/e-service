/**
 * Created by zxm on 2016/9/21.
*/

$(document).ready(function(){
    $("#click").click(function(){
        $("#right_area").toggle(150);
    });
});
$(document).ready(function() {
    $(document).foundation();
})
$(document).ready(function(){
    $(".flip").click(function(){
        $(".panel").slideToggle("slow");
    });
});