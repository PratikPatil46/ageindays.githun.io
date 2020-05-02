// Challenge 1 : claculate the age in days

function ageinDays(){
    var birthyear = prompt('What year were you Born... Good Friend');
    if (birthyear==null){
        alert('Please Enter Your Birth Year Here')
    }else{
        var ageindays = (2020 - birthyear) * 365;
        var h1 = document.createElement('h1');
        var textanswer = document.createTextNode('You are ' + ageindays + ' days old');
        h1.setAttribute('id','ageinDays');
        h1.appendChild(textanswer);
        document.getElementById('flex-box-result').appendChild(h1);  
    }
    
}


/* This is Reset Function */
function reset(){
    document.getElementById('ageinDays').remove();
}
