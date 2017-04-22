/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {

    $("#openweathermap-widget").on("mouseover", textMsg);
    $("#openweathermap-widget").on("mouseout", textMsg2);
    $("#resultPredictor").on("click",makeTableVisible); 
    
   /** $("#resultPredictor").on("click",) **/





    function textMsg() {
        document.getElementById("loginerror").style.display = "block";
    }

    function textMsg2() {
        document.getElementById("loginerror").style.display = "none";

    }
    /**
    function createLocalStorage() {
      
      
  }
    **/
   function loadResultsPredictor(){
       
       
       
   }
   function makeTableVisible(){
       
       document.getElementById("my-table").style.display.visible;
       
       
       
       
       
   }
   /**
  function createLocalStorage() { 
  $.ajax({
        type: "GET",
        url: "XML/fixtures.xml",
        dataType: "xml",
        success: function (xml) {
            var table = '<table>';
            table += '<thead><tr><th>Match</th><th>Location</th><th >Date</th><th>Result</th></tr></thead>';

            $(table).addClass('borderClass tablesorter');
            $('table').attr('id', 'myTable');
            
            
            $(xml).find('fixtures').each(function () {
                var match = $(this).find('match').text();
                var id = $(this).attr('id');
                var location = $(this).find('location').text();
                var date = $(this).find('date').text();
                var result = $(this).find('result').text();
                
           var match1 =     $('match').reverse(); **/
/** var [] = $(xml).toArray().reverse(); 
    
               /** table += '<tr><td>' + match + '</td><td>' + location + '</td><td>' + date + '</td><td contenteditable=true>' + result + '</td></tr>';**/
           /**     table += '<tbody><tr><td>' + match + '</td><td>' + location + '</td><td data-field-type=date>' + date + '</td><td  contenteditable=true>' + result + '</td></tr></tbody>'; **/

            });
            /** table += '</table>'; **/
         /**   $('#update').html(table); **/
     /**   } **/
 /**   }); **/
/**}}); **/


    /**  $('#my-table').dynatable(); **/
    /** $('#example').DataTable( {
     "order": [[ 3, "desc" ]]
     } ); **/




/**}); **/