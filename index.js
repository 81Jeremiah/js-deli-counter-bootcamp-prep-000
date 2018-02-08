//Number in line
function takeANumber(number, name) {
  number.push(name);

  return (`Welcome, ${name}. You are number ${number.length} in line.`);
}
//Who's being served
function nowServing(person){
 
  if ( person.length == [] )
    return ("There is nobody waiting to be served!");

    return (`Currently serving ${person.shift()}.`);
  
}
//Line length, who's waiting

  var katzDeli =[];
  function currentLine(line) {
   
   if (katzDeli.length === []) {
    return "The line is currently empty.";
   } 
   else
    for (let i = 0; i < katzDeli.length;
    line.push(` `+[i+1]+`. `+ katzDeli[i]), i++)
    return(`The line is currently: ${katzDeli}. ${line}`);
  }