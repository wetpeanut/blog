@extends('master')
@section('content')
  <div class="container">
    <table class="table table-striped" id="table_post">
      <button type="button"  id ="add-modal" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add Post</button>
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
          <button class="btn btn-danger" type="submit" id="btn-delete" data-target="#deleteModal" data-toggle="modal">Delete</button>
        </td>
      </tr>
      @endforeach
    </tbody>
  </table>
  </div>
  @endsection   

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
            <input type="hidden" name="_method" value="DELETE"> 
              <div class="form-group row">
              {{csrf_field()}}  
                <label for="lgFormGroupInput" class="col-sm-2 col-form-label col-form-label-lg">Title</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control form-control-lg" id="title" placeholder="title" name="title">
                </div>
              </div>
              <div class="form-group row">
                <label for="smFormGroupInput" class="col-sm-2 col-form-label col-form-label-lg">Post</label>
                <div class="col-sm-10">
                  <textarea name="post" rows="8" cols="52" id="post"></textarea>
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



<div id="deleteModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">×</button>
                    <h4 class="modal-title"></h4>
                </div>
                <div class="modal-body">
                    <h3 class="text-center">Are you sure you want to delete the following post?</h3>
                    <br />
                    <form class="form-horizontal" role="form">
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="id">ID:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="id_delete" disabled>
                            </div>
                        </div>
                         <div class="form-group">
                            <label class="control-label col-sm-2" for="title">Title:</label>
                            <div class="col-sm-10">
                                <input type="name" class="form-control" id="title_delete" disabled>
                            </div>
                        </div>
                    </form>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger delete" data-dismiss="modal">
                            <span id="" class='glyphicon glyphicon-trash'></span> Delete
                        </button>
                        <button type="button" class="btn btn-warning" data-dismiss="modal">
                            <span class='glyphicon glyphicon-remove'></span> Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

<!--<script src="{{mix('js/jquery.js')}}"></script>
<script src="{{mix('js/popper.min.js')}}"></script>
<script src="{{mix('js/bootstrap.min.js')}}"></script>
<script src="{{mix('js/crud.js')}}"></script>-->

