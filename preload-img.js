/**
 * Created by on 16/11/20.
 *
 * 引用jquery,再加上以下代码
 <script src="js/jquery-1.11.2.min.js"></script>
 <script>
 //预加载图片
 ( function( $ ){
        $.preload = function(){
            var imgs = Object.prototype.toString.call( arguments[ 0 ]) === '[object Array]'
                    ? arguments[ 0 ] : arguments;

            var tmp = [];
            var i   = imgs.length;

            // reverse loop run faster
            for( ; i-- ; ) tmp.push( $( '<img />' ).attr( 'src', imgs[ i ]));
        };
    })( jQuery );

 $(function(){
        //预加载图片
        $.preload(
               'images/loading.png'
        )
    })
 </script>

 */
