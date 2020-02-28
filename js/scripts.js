$(document).ready(function() {
  $("#groceries").submit(function(event) {
    event.preventDefault();
    // var items = ["input#item1", "input#item2", "input#item3", "input#item4", "input#item5", "input#item6"]; 
    var items = ["item1", "item2", "item3", "item4", "item5", "item6"];
    console.log(items)
    var stuff = []
    items.forEach(function(item) {
       stuff.push($("input#" + item).val());
    });
    console.log(stuff);
    var finalStuff = stuff.sort().map(function(thing) {
      return thing.toUpperCase();
    });
  
    console.log(finalStuff);


    debugger
    // var stuffs = items.map(function(item) {
     // toString($("input#" + item).val());
    //});
      //var finalList = [];
    //var finalList = modList.sort();
    //console.log(finalList);
    //$("#list").text("<li>" +  "</li>")

    // console.log(modList);
    // debugger
    });
});
