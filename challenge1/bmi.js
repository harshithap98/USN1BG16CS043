maryheight="5";
maryweight="50.8";
johnheight="4";
johnweight="60.9";

bmimary=maryweight/(maryheight*maryheight);
bmijohn=johnweight/(johnheight*johnheight);
console.log(bmimary,bmijohn);
if(bmimary>bmijohn)
    console.log("mary has more bmi");
else
    console.log("john has more bmi");
