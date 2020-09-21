var kittens = ["Milo", "Otis", "Garfield"]; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name)
{
  return kittens.push(name);

}

function destructivelyPrependKitten(name)
{
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten()
{
  return kittens.pop();
}

function destructivelyRemoveFirstKitten()
{
  return kittens.shift();
}


function appendKitten(name)
{
  let morekittens = kittens.concat(name)

  return morekittens
}

function prependKitten(name)
{
    let evenmorekittens = 
}
