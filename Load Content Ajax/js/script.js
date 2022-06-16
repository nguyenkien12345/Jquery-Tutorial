$(document).ready(function(){
    // load_data('tab3.html');
    $('.tab li').click(function(){
        $('.tab li').each(function(){
            $(this).removeClass('active');
        });
        $(this).addClass('active');
        var _url = $(this).data('ajax');
        load_data( _url)
    });

    function load_data(_url)
    {
        if(_url != undefined){
            $.ajax({
                url: _url,
                method: 'get',
                type:'html',
                success:function(response){
                    $('.content').html(response);
                }
            })
        }
    }
});