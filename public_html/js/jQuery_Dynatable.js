/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function () {
    /** { **/
    /** $("#myTable").tablesorter();  **/
    /**	} **/
    $("#createTable").on("click", createMatchResultsPredictorTable);
    /**  $("#createTable").on("click", createTableFixtures); **/ /** This line works 27.04.17 @ 12:19 **/

    $("#openweathermap-widget").on("mouseover", textMsg);
    $("#openweathermap-widget").on("mouseout", textMsg2);
    $("#resultPredictor").on("click", makeTableVisible);
    $("#resultPredictor2").on("click", getMatchFixtureDatails);

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
    function loadResultsPredictor() {



    }
    function makeTableVisible() {

        document.getElementById("my-table").style.display = "visible";





    }
    function getMatchFixtureDatails() {
        $.ajax({
            type: "GET",
            url: "matchFixtures.xml",
            dataType: "xml",
            success: function (xml) {
                var table = '<table  class = table-bordered >';
                /**  var table = '<table id="myTable" class= "tablesorter" class = table-bordered >'; **/

                table += '<thead><tr><th>Team 1</th><th>Result</th><th>Team 2</th><th>Result</th></tr></thead>';

                $(table).addClass('table table-striped');
                /** $('table').attr('id', 'myResultPredictor'); **/


                $(xml).find('fixtures').each(function () {
                    var team1 = $(this).find('team1').text();
                    /** var id = $(this).attr('id'); **/
                    var team2 = $(this).find('team2').text();

                    /**  var match1 =     $('match').reverse(); **/
                    /** var [] = $(xml).toArray().reverse(); **/

                    /** table += '<tr><td>' + match + '</td><td>' + location + '</td><td>' + date + '</td><td contenteditable=true>' + result + '</td></tr>';**/
                    table += '<tbody><tr><td>' + team1 + '</td><td contenteditable=true> <td>' + team2 + '</td><td contenteditable=true > </td></tr></tbody>';

                });
                table += '</table>';
                $('#update').html(table);
            }
        });

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

    }
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


var data = [
    ["Brazil", 191, "Ireland", 2],
    ["Ireland", 3, "England", 4],
    ["Italy", 54, "Ireland", 68],
    ["Italy", 787, "England", 8],
    ["Italy", 6, "Brazil", 140],
];
/**data.sort(function(a,b){return b-a}); **/
data.sort(compareTwoNumbers);

function createTableFixtures() {

    /** data.sort();  **/ /** The array is sorted  **/
    /** data[].[].sort();  /** The array is sorted  **/
    /**data.sort(function(a,b){return b-a}); **/
    /**data.sort(function(a, b){return b-a}); **/
    var table2 = $('<table></table>').addClass('table table-striped');
    var table2 = "<thead class =  'table table-striped'><tr><th>Team 1</th><th>Result</th><th>Team 2</th><th>Result</th></tr></thead>";
    /** $('table').append(table2); **/
    $('#ResultsPredictor').append(table2);

    var tr;
    for (var i = 0; i < data.length; i++) {
        tr = $('<tr/>');
        tr.append("<td>" + data[i][0] + "</td><td id=" + i + " contenteditable='true'>" + data[i][1] + "</td>" + "<td>" + data[i][2] + "</td>" + "<td contenteditable='true'>" + data[i][3] + "</td>" + "</tr>");
        $('#ResultsPredictor').append(tr);


        /** $('table').addClass('table table-striped');  **/
        $(table2).addClass('table table-striped');


    }





}
function upDateArray() {

    /**  TBC **/



}

function compareTwoNumbers(a, b) {

    return a - b;
}


function createMatchResultsPredictorTable() {
    var table = document.getElementById('table').innerHTML = "";

    var matchFixtures =
            [
                /** {"Team1": "Team", "Result": "Result", "Team2": "Team", "Result": "Result"},**/
                {"Team1": "Brazil", "result1": "6", "Team2": "Ireland", "result2": "0"},
                {"Team1": "Ireland", "result1": "3", "Team2": "England", "result2": "0"},
                {"Team1": "Italy", "result1": "", "Team2": "Ireland", "result2": "0"},
                {"Team1": "Italy", "result1": "0", "Team2": "Ireland", "result2": "0"},
                {"Team1": "Italy", "result1": "0", "Team2": "Ireland", "result2": "0"}


            ]

    /** Use this  Math.floor(Math.random()*7  to generate random numbers between 0-7 for filling the   **/

    table = document.getElementById('table');
   /** '<thead><tr><th>Team 1</th><th>Result</th><th>Team 2</th><th>Result</th></tr></thead>'; **/
  /**  table.appendChild(tableHeading); **/
    matchFixtures.forEach(function (object) {
        var tr = document.createElement('tr');
      /**  tr.innerHTML = '<thead><tr><th>Team 1</th><th>Result</th><th>Team 2</th><th>Result</th></tr></thead>'; **/
        tr.innerHTML = '<td>' + object.Team1 + '</td>' +
                /** '<td contenteditable= true>' + object.result1 + '</td>' + **/
                '<td contenteditable= true>' + randomNumberGenerator() + '</td>' +
                '<td>' + object.Team2 + '</td>' +
                /** '<td contenteditable= true>' + object.result2 + '</td>'; **/
                '<td contenteditable= true>' + randomNumberGenerator() + '</td>';


        table.appendChild(tr);
    });


}
function randomNumberGenerator() {

    var randomNumber = Math.floor((Math.random() * 7) + 1);
    return randomNumber;

}