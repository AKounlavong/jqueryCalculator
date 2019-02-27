///////////////////
// INSTRUCTIONS  //
///////////////////

//   -Create the JavaScript logic necessary to add functionality to the jQuery Calculator.
//   -Your calculator should be able to handle basic mathematical operations like addition, subtraction, multiplication, and division.
//   -You should be making use of the existing buttons.
//   -You should be making use of the existing placeholders for entering content (i.e. "firstNumber", "operator", "secondNumber", "result").

// id #
// class .

    // console.log($('#header-title').text()) // get the text value of header-title

// console.log($('.panel-body').text());

secondNumToggle = false;
firstSection = " ";
var firstOne =  $('.number').click(function(){
    if(secondNumToggle == false){
        firstSection(this.value)
    }else{
        secondSection(this.value)
    };

    firstSection += $(this).val();
    $('#first-number').text(firstSection);
});

operatorSection = " ";
$('.operator').click(function(){

    operatorSection = this.val();
    $('#operator').text(operatorSection);
    secondNumToggle = true;
});

//the first section also inputs number
secondSection = " ";
    $('.number').click(function(){
        
        secondSection += $(this).val()
        $('#second-number').text(secondSection);
    });
    
//not fully
clearSection = " ";
$('.clear').click(function(){
    clearResult();
});

var clearResult = function(){
    firstSection = ' ';
    operatorSection = ' ';
    secondSection = ' ';
    equalSection = ' ';
}

equalSection = " ";
$('#button-equal').click(function(){
    equalSection = eval(firstSection + operatorSection + secondSection);
    $('#result').text(equalSection)
})









