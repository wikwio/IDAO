$(function() {
  $(".jslist").bind('click',function() {
    var _this = $(this);
    
    _this.toggleClass('active', 5);
    _this.next().toggleClass('closed', 500);
    $(".jslist").not(_this).each(function() {
      $(this).next().addClass('closed', 500);
      $(this).removeClass('active', 5);
    });
  });
}); 