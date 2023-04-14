var input = document.getElementById("inp");
var btn = document.getElementById("btn");
var one = document.getElementById("chicken1");
var two = document.getElementById("chicken2");
var three = document.getElementById("chicken3");
var four = document.getElementById("chicken4");
var five = document.getElementById("chicken5");
var six = document.getElementById("chicken6");
var seven = document.getElementById("chicken7");
var eight = document.getElementById("chicken8");
var nine = document.getElementById("chicken9");
var ten = document.getElementById("chicken10");

btn.addEventListener("click",()=>{
    if(input.value=="")
    {
        alert("please enter the food you need");
    }
    else
    {
        var inpt = input.value;
        var url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`);

        fetch(url).then(result => result.json())
        .then(data =>{

            console.log(data);
            var{strMealThumb}=data.meals[0];
            one.src=strMealThumb;
            one.style.width="13rem";

            var{strMealThumb}=data.meals[1];
            two.src=strMealThumb;
            two.style.width="13rem";

            var{strMealThumb}=data.meals[2];
            three.src=strMealThumb;
            three.style.width="13rem";

            var{strMealThumb}=data.meals[3];
            four.src=strMealThumb;
            four.style.width="13rem";

            var{strMealThumb}=data.meals[4];
            five.src=strMealThumb;
            five.style.width="13rem";

            var{strMealThumb}=data.meals[5];
            six.src=strMealThumb;
            six.style.width="13rem";

            var{strMealThumb}=data.meals[6];
            seven.src=strMealThumb;
            seven.style.width="13rem";

            var{strMealThumb}=data.meals[7];
            eight.src=strMealThumb;
            eight.style.width="13rem";

            var{strMealThumb}=data.meals[8];
            nine.src=strMealThumb;
            nine.style.width="13rem";

            var{strMealThumb}=data.meals[9];
            ten.src=strMealThumb;
            ten.style.width="13rem";
        })
    }
})