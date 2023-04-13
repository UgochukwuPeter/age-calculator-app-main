const dayOfBirth = document.querySelector(".dayOfBirth");
const monthOfBirth = document.querySelector(".monthOfBirth");
const yearOfBirth = document.querySelector(".yearOfBirth");
const err = document.querySelector(".err");
const err1 = document.querySelector(".err1");
const err2 = document.querySelector(".err2");
const date = new Date();
const year = date.getUTCFullYear();
const month = date.getUTCMonth() + 1;
const day = date.getUTCDate();

$(".img-logo").click(function(){
    if (dayOfBirth.value === "" || !isNaN(dayOfBirth) || monthOfBirth.value === "" || !isNaN(monthOfBirth) || yearOfBirth.value === "" || !isNaN(yearOfBirth) ){
        $(".err").fadeIn();
        $("input").css("border", "1px solid hsl(0, 100%, 67%)");
        $("label").css("color", "hsl(0, 100%, 67%");
    }else if( dayOfBirth.value >= 31){
        $(".err").fadeOut();
        $(".errb").fadeIn();
        $("input").css("border", "1px solid hsl(0, 100%, 67%)");
        $("label").css("color", "hsl(0, 100%, 67%");
    }else if( monthOfBirth.value > 12){
        $(".err").fadeOut();
        $(".errm").fadeIn();
        $("input").css("border", "1px solid hsl(0, 100%, 67%)");
        $("label").css("color", "hsl(0, 100%, 67%");
    }else if( yearOfBirth.value > 2022){
        $(".err").fadeOut();
        $(".erry").fadeIn();
        $("input").css("border", "1px solid hsl(0, 100%, 67%)");
        $("label").css("color", "hsl(0, 100%, 67%");
    }else{
        $(".err").fadeOut();
        $("input").css("border", "2px solid hsl(0, 0%, 86%)");
        $("label").css("color", "hsl(0, 1%, 44%)");
        $(".errb").fadeOut();
        $(".errm").fadeOut();
        $(".erry").fadeOut();

        const newYears = year - yearOfBirth.value;
        const newMonth = monthOfBirth.value - month ;
        const newDay = dayOfBirth.value - day;
        //display result
        $(".yrs").html(newYears);
        $(".mth").html(newMonth);
        $(".dy").html(newDay);
    }
});
