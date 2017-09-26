
$(function(){
        

        $(document).on('click','#add-modal',function(){ 
            console.log("adasdsadasd");

        });

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
                                $('#table_post').append("<tr class='item" + data.id +"' data-><td>"+ data.id +"</td><td>" + data.title + "</td> <td>" + data.post + "</td> <td><a  data-target='#myModal' data-toggle='modal'class='btn btn-warning'>Edit</a></td><td><form id='btn-delete' data-target='#deleteModal' data-toggle='modal' method='post'><input name='_method' type='hidden' value='DELETE'><button class='btn btn-danger' type='submit' id='btn-delete'>DELETE</button></form></td></tr>");
                            }
                        },
                    });
                         $("#title").val('');   
                         $("#post").val('');
                });


        

        $(document).on('click','#btn-update',function(){

            $("#myModal").find(".modal-title").html("Update");
            var title=$(this).closest('tr').find('td[data-crud="title"]').html();
            var post=$(this).closest('tr').find('td[data-crud="post"]').html();
            $('#title').val(title); 
            $('#post').val(post);

        });    
        


        

        
        $('.modal-footer').on('click', '.delete', function() {
            $.ajax({
                type: 'post',
                url: '/deleteItem',
                data: {
                    
                },
                success: function(data) {
                    $('.item' + $('.did').text()).remove();
                }
                });     
        });












}); 





