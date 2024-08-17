window.addEventListener("load", function() {

    //Dessert list
    var foods = [
        { desktopImg:"assets/images/image-waffle-desktop.jpg", 
            thumbnail: "assets/images/image-waffle-thumbnail.jpg",
            category: "Waffle", name: "Waffle with Berries", price:"$6.50" },
        { desktopImg:"assets/images/image-creme-brulee-desktop.jpg" ,
            category: "Crème Brûlée", name: "Vanilla Bean Crème Brûlée", price: "$7.00"},
        { desktopImg:"assets/images/image-macaron-desktop.jpg" ,
            category: "Macaron", name: "Macaron Mix of Five", price: "$8.00" },
        { desktopImg:"assets/images/image-tiramisu-desktop.jpg" ,
            category: "Tiramisu", name: "Classic Tiramisu", price: "$5.50" },
        { desktopImg:"assets/images/image-baklava-desktop.jpg", 
            category: "Baklava", name: "Pistachio Baklava", price: "$4.00" },
        { desktopImg:"assets/images/image-meringue-desktop.jpg",
            category: "Pie", name: "Lemon Meringue Pie", price: "$5.00" },
        { desktopImg:"assets/images/image-cake-desktop.jpg",
            category: "Cake", name: "Red Velvet Cake", price: "$4.50" },
        { desktopImg:"assets/images/image-brownie-desktop.jpg" ,
            category: "Brownie", name: "Salted Caramel Brownie", price: "$4.50" },
        { desktopImg:"assets/images/image-panna-cotta-desktop.jpg" ,
            category: "Panna Cotta", name: "Vanilla Panna Cotta", price: "$6.50" },
    ];

    var main1 = this.document.querySelector("#main1");
    var $foodList = main1.querySelector(".food-list");
    var divNode = $foodList.querySelector("div");

    for( var i = 0; i<foods.length; i++) 
    {
        var template = main1.querySelector("template");
        var cloneNode = this.document.importNode(template.content, true);
        var ps = cloneNode.querySelectorAll("p");
        var src = cloneNode.querySelector("img");

        src.src = foods[i].desktopImg;
        ps[0].textContent = foods[i].category;
        ps[1].textContent = foods[i].name;
        ps[2].textContent = foods[i].price;
        divNode.appendChild(cloneNode);
    }


    //ADD to Cart

    var main2 = this.document.querySelector("#main2");

    var $yourCastList = main2.querySelector(".your-cart-list");
    var $orderMessage = main2.querySelector(".order-total");

    var totalCart = 0;

    main2.querySelector(".cart-element").textContent = "(" +  totalCart + ")";
    checkCartZeroBackground();

    //background
    function checkCartZeroBackground() {
        if(totalCart == 0) {
            $yourCastList.style.backgroundImage = 'url("assets/images/illustration-empty-cart.svg")';
            $yourCastList.style.backgroundRepeat = "no-repeat";
            $orderMessage.textContent = "Your added items will appear here";
        }
        else {
            $yourCastList.style.backgroundImage = "none";
            $orderMessage.textContent = "Order Total: ";
        }
    }
    
    //
    function CheckcartCount() {
        main2.querySelector(".cart-element").textContent = "(" +  totalCart + ")";
    }

    function setCart(i) {
        totalCart += i;
    }
    
    function setDivCount(i) {
        divcount += i;
    }

    var divNode2 = $yourCastList.querySelector("div");
    var divcount = 0;


    function AddDessertToCart(index) {
        if(myCart[index] != 0) {
            productCount(index);
            return;
        }
        var template = main2.querySelector("template");
        var cloneNode = this.document.importNode(template.content, true);
        var ps = cloneNode.querySelectorAll("p");
        var img = cloneNode.querySelector("img");

        myCart[index] = 1;
        img.src = foods[index].desktopImg;
        ps[0].innerHTML = foods[index].name + "-" + foods[index].price + " x " + myCart[index];


        divNode2.appendChild(cloneNode);
        setDivCount(+1);
    }

    var addButtons = main1.querySelectorAll(".add-button");
    var myCart = new Array('0','0','0','0','0','0','0','0','0');

    function productCount(index) {

        myCart[index] = parseInt(myCart[index]) + 1;
        
        $yourCastList.querySelectorAll(".name")[divcount-1].textContent 
                = 
                    foods[index].name + "-" + 
                    foods[index].price + " x " + 
                    myCart[index];

        return ;
    }

    //Button Click!
    addButtons.forEach(function(button,index) {
        button.onclick = function() {
            setCart(1);
            CheckcartCount();
            checkCartZeroBackground();
            AddDessertToCart(index);
            makeRemoveButton(index);
        };
    }); 
        
    //remove button
    function makeRemoveButton(index) {
        var removeButtons = main2.querySelectorAll(".remove-button");
        removeButtons[divcount-1].onclick = function() {
            this.parentNode.remove();
            setDivCount(-1);
            setCart(-myCart[index]);
            myCart[index] = 0;
            checkCartZeroBackground();
            CheckcartCount();
        }
    }
    
        

    
    
    
});
