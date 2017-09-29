
$(function(){
        

          $(document).on('click','#btn-add',function(){

                $("#myModal").find(".modal-title").html("Add Post");                    
       });     

        $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
        });
                
            $("button[data-add='Add']").click(function() {
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
                                $('#table_post').append("<tr class='item" + data.id +"' data-><td>"+ data.id +"</td><td>" + data.title + "</td> <td>" + data.post + "</td> <td><a  data-target='#myModal' data-toggle='modal'class='btn btn-info'>Edit</a></td><td><button class='btn btn-danger' type='submit' id='btn-delete' data-target='#deleteModal' data-toggle='modal'>DELETE</button></td></tr>");
                            }
                        },
                    });
                         $("#title").val('');   
                         $("#post").val('');

                         $("#myModal").modal('toggle');
                });

         
        

        $(document).on('click','#btn-update',function(){

            $("#myModal").find(".modal-title").html("Update Post");
            var title=$(this).closest('tr').find('td[data-crud="title"]').html();
            var post=$(this).closest('tr').find('td[data-crud="post"]').html();
            var id=$(this).closest('tr').find('td[data-crud="id"]').html();    
            $('#title').val(title); 
            $('#post').val(post);

        });    
        
            $("button[data-update='Update']").click(function(){
                console.log(1231);            
            });

            $("button[data-add='Add']").click(function(){
               console.log(1);                     
            });

        








        $(document).on('click','#btn-delete',function(){

               var id=$(this).closest('tr').find('td[data-crud="id"]').html();
               $("#deleteModal").attr("data-crud",id);
               console.log(id); 

        });                

         
        $('.modal-footer').on('click', '.delete', function() {
         
                var id= $("#deleteModal").attr("data-crud");
                console.log(id);
                $.ajax({
                type: 'POST',
                url: '/destroy',
                data: {
                   
                    'id':id            
                },  
                success: function(data) {
                    if(data.errors){
                       
                       }
                    else{
                        $(".item"+ data.id +"").remove();
                    }
                   
                }

                });     
        });



}); 




