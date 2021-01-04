var test='#design1'
var user=$('#name').val()
$(document).ready(function() {
    $('.design').click(function(){
    $('.design').hide()
    $(test).toggle()     
});
    $(test).click(function(){
        $(test).hide()
        $('.design').toggle()
    })
$('.develop').click(function(){
    $('#development').toggle()
});
$('.products').click(function(){
    $('#product').toggle()
});
$('form').submit(function(){
    alert(user)
})
})