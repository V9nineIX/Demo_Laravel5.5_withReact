<?php 
namespace App\Http\Controllers;

use  Illuminate\Http\Request;
use  App\Item;


class ItemController extends Controller
{
  
  public  function index(){
    
    $str = "test";
    return  response()->json($str);
  }


  public function store(Request $req)
  {
      return  $req;
  }

} // end  class





?>