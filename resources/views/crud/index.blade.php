@extends('master')
@section('content')
  <div class="container">
    <table class="table table-striped">
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Post</button>
        <th>ID</th>
        <th>Title</th>
        <th>Post</th>
        <th colspan="2">Action</th>
      </tr> 
    </thead>
    <tbody>
      @foreach($cruds as $post)
      <tr>
        <td>{{$post['id']}}</td>
        <td>{{$post['title']}}</td>
        <td>{{$post['post']}}</td>
        <td>  
        <a href="{{action('CRUDController@edit', $post['id'])}}" class="btn btn-warning">Edit</a></td>
        <td>
       <form action="{{action('CRUDController@destroy', $post['id'])}}" method="post">
            {{csrf_field()}}
            <input name="_method" type="hidden" value="DELETE">
            <button class="btn btn-danger" type="submit">Delete</button>
          </form>
      </tr>
      @endforeach
    </tbody>
  </table>
  </div>
  

  <!--modal-->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New Post</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
                    <form method="post" action="{{url('crud')}}">
                      <div class="form-group">
                      {{csrf_field()}}  
                        <label for="lgFormGroupInput" class="col-sm-2 col-form-label col-form-label-lg">Title</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control form-control-lg" id="lgFormGroupInput" placeholder="title" name="title">
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="smFormGroupInput" class="col-sm-2 col-form-label col-form-label-lg">Post</label>
                        <div class="col-sm-10">
                          <textarea class="form-control form-control-lg" name="post" rows="8" cols="50"></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
            </div>
      <div class="modal-footer">
         <div class="col-md-2"></div>
                <button type="button" class="btn btn-primary" id="btn-save" value="add">Submit</button>

        </div>
      </div>
    </div>
  </div>
</div>
   
  
<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
<script stlye="text/javascript">

$("#btn-save").click(function() {
  console.log("asdasdsa"); 
});
</script>
@endsection
