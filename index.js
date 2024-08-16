window.addEventListener("load", function() {
    var foods = [
        { imgSrc:"assets/images/image-waffle-desktop.jpg", 
            category: "Waffle", name: "Waffle with Berries", price:"$6.50" },
        { imgSrc:"assets/images/image-creme-brulee-desktop.jpg" ,
            category: "Crème Brûlée", name: "Vanilla Bean Crème Brûlée", price: "$7.00"},
        { imgSrc:"assets/images/image-macaron-desktop.jpg" ,
            category: "Macaron", name: "Macaron Mix of Five", price: "$8.00" },
        { imgSrc:"assets/images/image-tiramisu-desktop.jpg" ,
            category: "Tiramisu", name: "Classic Tiramisu", price: "$5.50" },
        { imgSrc:"assets/images/image-baklava-desktop.jpg", 
            category: "Baklava", name: "Pistachio Baklava", price: "$4.00" },
        { imgSrc:"assets/images/image-meringue-desktop.jpg",
            category: "Pie", name: "Lemon Meringue Pie", price: "$5.00" },
        { imgSrc:"assets/images/image-cake-desktop.jpg",
            category: "Cake", name: "Red Velvet Cake", price: "$4.50" },
        { imgSrc:"assets/images/image-brownie-desktop.jpg" ,
            category: "Brownie", name: "Salted Caramel Brownie", price: "$4.50" },
        { imgSrc:"assets/images/image-panna-cotta-desktop.jpg" ,
            category: "Panna Cotta", name: "Vanilla Panna Cotta", price: "$6.50" },
    ];

    var section = this.document.querySelector("#main1");
    var foodList = section.querySelector(".food-list");
    var divNode = foodList.querySelector("div");

    for( var i = 0; i<foods.length; i++) 
    {
        var template = section.querySelector("template");
        var cloneNode = this.document.importNode(template.content, true);
        var ps = cloneNode.querySelectorAll("p");
        var src = cloneNode.querySelector("img");

        src.src = foods[i].imgSrc;
        ps[0].textContent = foods[i].category;
        ps[1].textContent = foods[i].name;
        ps[2].textContent = foods[i].price;
        divNode.appendChild(cloneNode);
    }

    
});
