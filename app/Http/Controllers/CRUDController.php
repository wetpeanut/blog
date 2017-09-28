<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Crud;
class CRUDController extends Controller
{
    //

      public function create()
    {
        return view('crud.create');
    }


     public function index()
    {
        $cruds = Crud::all()->toArray();
        return view('crud.index', compact('cruds'));
    }


      

     public function addPost(Request $request)
    {
    
        $crud = new Crud();
        $crud->title=$request->input('title');  
        $crud->post=$request->input('post');
        $crud->save();
        return response()->json($crud);
    }


       public function show($id)
    {
        //
    }


     public function edit($id)
    {
        $crud = Crud::find($id);
        return view('crud.edit', compact('crud','id'));

    }	
      public function update(Request $request, $id)
    {
        $crud = Crud::find($id);
        $crud->title = $request->get('title');
        $crud->post = $request->get('post');
        $crud->save();
        return redirect('/crud');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
      public function destroy(Request $request)
      {
          $crud=Crud::find($request->id); 
          $crud->delete();
          return response ()->json();  
        
      }
    }



