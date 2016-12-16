/**
 * Created by on 16/11/28.
 */
//文字上下轮播
setInterval(move1,2000);
function move1() {
    $('.index-notices div').eq(0).animate({marginTop: '-0.5rem'}, 1000, function () {
        $('.index-notices div').eq(0).css({marginTop: 0});
        $('.index-notices div').eq(0).appendTo($('.index-notices'));
    });
};