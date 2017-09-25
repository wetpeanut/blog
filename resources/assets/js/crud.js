
$(function(){
    
        $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
        });
                
            $("#btn-save").click(function() {
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
                                $('#table_post').append("<tr class='item" + data.id +"'><td>"+ data.id +"</td><td>" + data.title + "</td> <td>" + data.post + "</td> <td><a href='{{action('CRUDController@edit', $post['id'])}}' class='btn btn-warning'>Edit</a></td><td><form action='{{action('CRUDController@destroy', $post['id'])}}' method='post'><input name='_method' type='hidden' value='DELETE'><button class='btn btn-danger' type='submit' id='btn-delete'>DELETE</button></form></td></tr>");
                            }
                        },
                    });
                         $("#title").val('');   
                         $("#post").val('');
                });

            $(document).on('click', '.delete-modal', function() {
           
            console.log("asdsadas");

            });


            




}); 



