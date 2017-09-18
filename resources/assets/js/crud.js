
$(document).ready(function(){
    $("#btn-save").click(function() {
    
     $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
         type: 'POST',
         url: '/addPost',
        data: {

            'title': $("#title").val(),
            'post': $("#post").val()
        },
        success: function(data) {
            if ((data.errors)) {
                $('.error').removeClass('hidden');
                $('.error').text(data.errors.name);
            } else {
                $('.error').remove();
                $('#table_post').append("<tr><td>"+ data.id +"</td><td>" + data.title + "</td> <td>" + data.post + "</td> <td><a href='{{action('CRUDController@edit', $post['id'])}}' class='btn btn-warning'>Edit</a></td><td><form action='{{action('CRUDController@destroy', $post['id'])}}' method='post'><input name='_method' type='hidden' value='DELETE'><button class='btn btn-danger' type='submit'>DELETE</button></form></td></tr>");
            }
        },
    });
         $("#title").val('');   
         $("#post").val('');
    });



}); 