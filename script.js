//your JS code here. If required.
function fizzBuzz(){
	let num = alert("Choose numbers from 1 to 20" )
	if(num%3==0){
		console.log("Fizz")
	}else if(num%5==0){
		console.log("Buzz")
	}else if(num%3==0 && num%5==0){
		console.log("FizzBuzz")
	}else{
		console.log(num)
	}
}
fizzBuzz()