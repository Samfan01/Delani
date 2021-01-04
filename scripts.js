var test='#design1'
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
    $('.develop').hide()
    $('#development').toggle()
});
$('#development').click(function(){
    $('#development').hide()
    $('.develop').toggle()
});
$('.products').click(function(){
    $('.products').hide()
    $('#product').toggle()
});
$('#product').click(function(){
    $('#product').hide()
    $('.products').toggle()
});
$('#submit').click(function(){
    var user=$('#name').val()
     if(user===""){
        alert("enter a valid name")
    }
    alert("Thank you "+user+" for your feedback")
    
});
$("#pic").hover(function(){
    $(this).css("background-color", "yellow");
    
  });
})