
// Javascript External File

   //alert ("I am from <BODY>. Script code from external file"); 


    var recipeName = "Creamy squash linguine", preparationTime = 45, recipeBy = 'Jimmy Cutter';
    var isVegetarian = true;
    var calories = 223.7;
    var msg1 = "Recipe Details", msg2 = "Recipe Details After Update";

    console.log(msg1);
    console.log("-------------------");
    console.log("Recipe Name = " + recipeName);
    console.log("PreparationTime = " + preparationTime);
    console.log("Recipe By = " + recipeBy);
    console.log("Is a Vegetarian Dish = " + isVegetarian);
    console.log("Calories = " + calories);

    msg1 = msg2;
    preparationTime = 60;
    recipeBy = recipeBy + " George" ;

    console.log("");
    console.log(msg1);
    console.log("-------------------");
    console.log("Recipe Name = " + recipeName);
    console.log("PreparationTime = " + preparationTime);
    console.log("Recipe By = " + recipeBy);
    console.log("Is a Vegetarian Dish = " + isVegetarian);
    console.log("Calories = " + calories);