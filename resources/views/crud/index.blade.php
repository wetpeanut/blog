@extends('master')
@section('content')
  <div class="container">
    <table class="table table-striped" id="table_post">
      <button type="button"  id ="btn-add" class="btn btn-primary" data-toggle="modal" data-target="#myModal" data-whatever="@mdo">Add Post</button>
        <th>ID</th>
        <th>Title</th>
        <th>Post</th>
        <th colspan="2">Action</th>
      </tr> 
    </thead>
    <tbody>
      @foreach($cruds as $post)
      <tr class="item{{$post['id']}}">
        <td data-crud="id">{{$post['id']}}</td>
        <td data-crud="title">{{$post['title']}}</td>
        <td data-crud="post">{{$post['post']}}</td>
        <td>  
        <a data-target="#myModal" data-toggle="modal" class="btn btn-info" id="btn-update">Edit</a></td>
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
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">  
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
           <form method="POST">
            <input type="hidden" name="_method" value="DELETE"> 
              <div class="form-group row">
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
                <button type="button" class="btn btn-primary" id="btn-save" value="add" data-add="Add" data-update="Update" >Submit</button>
        </div>
      </div>
    </div>
  </div>
</div>



<div id="deleteModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
          <form method="POST">
            <input type="hidden" name="_method" value="DELETE">
            <div class="modal-content">
                <div class="modal-header">
                  <h4 class="modal-title">Delete Post</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                <div class="modal-body">
                    <h3 class="text-center">Are you sure you want to delete the following post?</h3>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger delete" data-dismiss="modal">Delete 
                        </button>
                        <button type="button" class="btn btn-warning" data-dismiss="modal">Close
                        </button>
                    </div>
                </div>
            </div>
          </form>
        </div>
    </div>

<!--<script src="{{mix('js/jquery.js')}}"></script>
<script src="{{mix('js/popper.min.js')}}"></script>
<script src="{{mix('js/bootstrap.min.js')}}"></script>
<script src="{{mix('js/crud.js')}}"></script>-->