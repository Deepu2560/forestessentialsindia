//SHOW ON CLICK SEARCH
document.querySelector("#search").addEventListener("click" , showSearchBar)

function showSearchBar(){
    var showhidesearch = document.querySelector("#hide")
    showhidesearch.style.display = "block"

    var hidenav = document.querySelector(".navbar--2")
    hidenav.style.display = "none"
}


document.querySelector("#show").addEventListener("click" , function(){
    var showhidesearch = document.querySelector("#hide")
    showhidesearch.style.display = "none"

    var hidenav = document.querySelector(".navbar--2")
    hidenav.style.display = "block"
})



//FOR THE NOTIFICATION SLIDER
var notifyIndx = 0
notifyslider(notifyIndx)


function notifyslider(){
var n = document.querySelectorAll(".notify")
for(var i = 0 ; i < n.length ; i++){
    n[i].style.display = "none"
}
notifyIndx++;
if(notifyIndx > n.length){
    notifyIndx = 1
}
n[notifyIndx - 1].style.display = "block"
setTimeout(notifyslider , 3000)
}


//HEADER CSS CHANGE WHILE ON SCROLL
var header = document.querySelector(".navbar")
window.onscroll = function (e) {
if(window.scrollY > 80){
    console.log(header.classList)
    header.classList.add("nav_scroll")
    
}else{
    header.classList.remove("nav_scroll")

}
};

// PRODUCT PAGE CONTENT STARTS FROM HERE 

    // DATA OF PRODUCTS 
    var data = [
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/1/7/17018_intensive_hair_repair_masque_japapatti_brahmi_100g_copy.png",
        prodhead: "INTENSIVE HAIR REPAIR MASQUE JAPAPATTI & BRAHMI",
        prodcat: "REPAIR",
        prodweight: "100 g",
        prodprice: 875,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/1/0/1081_hair_vitalizer_bhringraj_50ml_front.png",
        prodhead: "HAIR VITALIZER BHRINGRAJ",
        prodcat: "VITALIZER",
        prodweight: "50 ml",
        prodprice: 595,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/1/0/1080_hair_thickening_spray_bhringraj_shikakai_50ml_front.png",
        prodhead: "HAIR THICKENING SPRAY BHRINGRAJ & SHIKAKAI",
        prodcat: "THICKENING",
        prodweight: "50 ml",
        prodprice: 675,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9743_hair_conditioner_japapatti_brahmii_130ml_fornt1.png",
        prodhead: "HAIR CONDITIONER JAPAPATTI & BRAHMI",
        prodcat: "CONDITIONER",
        prodweight: "130 ml",
        prodprice: 975,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9742_hair_conditioner_bhringraj_shikakai_130m_fornt1.png",
        prodhead: "HAIR CONDITIONER BHRINGRAJ & SHIKAKAI",
        prodcat: "CONDITIONER",
        prodweight: "130 ml",
        prodprice: 975,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9741_hair_conditioner_amla_honey_mulethi_130ml_fornt1.png",
        prodhead: "HAIR CONDITIONER AMLA. HONEY & MULETHI",
        prodcat: "CONDITIONER",
        prodweight: "130 ml",
        prodprice: 975,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9740_hair_cleanser_amla_honey_mulethi_130ml_front1.png",
        prodhead: "HAIR CLEANSER AMLA. HONEY & MULETHI",
        prodcat: "CLEANSER",
        prodweight: "130 ml",
        prodprice: 895,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9739_hair_cleanser_japapatti_brahmi_130ml_front1.png",
        prodhead: "HAIR CLEANSER JAPAPATTI & BRAHMI",
        prodcat: "CLEANSER",
        prodweight: "130 ml",
        prodprice: 895,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9738_hair_cleanser_bhringraj_shikakai_130ml_front1.png",
        prodhead: "HAIR CLEANSER BHRINGRAJ & SHIKAKAI",
        prodcat: "CLEANSER",
        prodweight: "130 ml",
        prodprice: 895,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9732_hair_cleanser_bhringraj_shikakai_front5.png",
        prodhead: "HAIR CLEANSER BHRINGRAJ & SHIKAKAI",
        prodcat: "CLEANSER",
        prodweight: "200ml",
        prodprice: 1375,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9728_hair_thickening_spray_bhringraj_shikakai_130ml_front.png",
        prodhead: "HAIR THICKENING SPRAY BHRINGRAJ & SHIKAKAI",
        prodcat: "THICKENING",
        prodweight: "130 ml",
        prodprice: 1695,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/i/n/intensive_hair_repair_masque_japapatti_brahmi_200g.png",
        prodhead: "INTENSIVE HAIR REPAIR MASQUE JAPAPATTI & BRAHMI",
        prodcat: "REPAIR",
        prodweight: "200 g",
        prodprice: 1650,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9734_hair_cleanser_amla_honey_mulethi_200ml_front5.png",
        prodhead: "HAIR CLEANSER AMLA. HONEY & MULETHI",
        prodcat: "CLEANSER",
        prodweight: "200 ml",
        prodprice: 1375,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9726_head_massage_oil_bhringraj_200ml_front1.png",
        prodhead: "AYURVEDIC HERB ENRICHED HEAD MASSAGE OIL BHRINGRAJ",
        prodcat: "OIL",
        prodweight: "200 ml",
        prodprice: 1450,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9729_hair_vitalizer_bhringraj_130ml_front.png",
        prodhead: "HAIR VITALIZER BHRINGRAJ",
        prodcat: "VITALIZER",
        prodweight: "130 ml",
        prodprice: 1495,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9733_hair_cleanser_japapatti_brahmi_front5.png",
        prodhead: "HAIR CLEANSER JAPAPATTI & BRAHMI",
        prodcat: "CLEANSER",
        prodweight: "200 ml",
        prodprice: 1375,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9731_head_massage_oil_bhringraj_50ml_front1.png",
        prodhead: "TRAVEL SIZE AYURVEDIC HERB ENRICHED HEAD MASSAGE OIL BHRINGRAJ",
        prodcat: "OIL",
        prodweight: "50 ml",
        prodprice: 375,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9744_hair_cleanser_bhringraj_shikakai_50ml_front.png",
        prodhead: "TRAVEL SIZE HAIR CLEANSER BHRINGRAJ & SHIKAKAI",
        prodcat: "CLEANSER",
        prodweight: "50 ml",
        prodprice: 375,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9735_hair_conditioner_bhringraj_shikakai_200ml_fornt_1.png",
        prodhead: "HAIR CONDITIONER BHRINGRAJ & SHIKAKAI",
        prodcat: "CONDITIONER",
        prodweight: "200 ml",
        prodprice: 1475,
        },
        {
        imgUrl: "https://images.forestessentialsindia.com/pub/media/catalog/product/cache/314dec89b3219941707ad62ccc90e585/9/7/9745_hair_conditioner_bhringraj_shikakai_50ml_front.png",
        prodhead: "TRAVEL SIZE HAIR CONDITIONER BHRINGRAJ & SHIKAKAI",
        prodcat: "CONDITIONER",
        prodweight: "50 ml",
        prodprice: 395,
        }
    ];
    showData(data);

// SORT BY PRICE FUNCTION 
    function sortprice(){
        var selected = document.querySelector("#sorted").value
        if(selected == "low"){
            data.sort(function(a, b){
                return Number(a.prodprice)-Number(b.prodprice);
            });
        }
        if(selected == "high"){
            data.sort(function(a, b){
                return Number(b.prodprice)-Number(a.prodprice);
            });
        }
        showData(data);
    };

// FILTER BY CATEGORY FUNCTION 
    function filtercat(){
        var selected=document.querySelector("#filter").value;
        if(selected == ""){
            showData(data);
        }
        else{
            var filterdata = data.filter(function(elem){
                return elem.prodcat == selected;
            });
            showData(filterdata);
        }
        
    }

// DISPLAY PRODUCT TO MAIN SCREEN 
    function showData(data){
        var body=document.querySelector("#hair_container");
        body.innerHTML="";
        data.map(function prodecData(elem){
            var div = document.createElement("div");

            var image = document.createElement("img");
                image.setAttribute("src", elem.imgUrl);
                image.setAttribute("id", "prodimg");

            var h4 = document.createElement("h4");
                h4.textContent = elem.prodhead;
                h4.style.marginLeft = "10px";
                h4.style.marginTop = "4px";
                h4.style.cursor= "pointer";

            var p = document.createElement("p");
                p.textContent = elem.prodweight;
                p.style.marginLeft = "10px";
            
            var smalldiv = document.createElement("div");
                smalldiv.setAttribute("class", "priceWishSmallDiv");
        
            var p2 = document.createElement("p");
                p2.textContent = "₹"+elem.prodprice+".00";
            
            var icon = document.createElement("span");
                icon.setAttribute("class", "material-icons")
                icon.textContent = "favorite_border";
            
            var addcart = document.createElement("button");
                addcart.textContent = "ADD TO BAG";
                addcart.setAttribute("class", "addCartButton")


            smalldiv.append(p2, icon);
            div.append(image, h4, p, smalldiv, addcart);
            body.append(div);
        });
    }