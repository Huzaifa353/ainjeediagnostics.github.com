
function SearchBox() 
{
    var x = document.getElementById("searchbox");

    if (x.style.display === "block") 
    {
        x.style.display = "none";
    } 
    else 
    {
        x.style.display = "block";
    }
}

document.getElementsByClassName("dropdown")[0].style.height = "0px";
function dropDown(i, color) 
{
    var dropdown = document.getElementsByClassName("dropdown")[i];
    var triangle = document.getElementsByClassName("triangle")[i];
    var ul = dropdown.firstElementChild;

    if(dropdown.style.height == "0px")
    {
        dropdown.style.height = "225px";
        triangle.style.borderTop = "7px solid rgba(0,0,0,0)";
        triangle.style.borderBottom = ("7px solid " + color);
        triangle.style.marginTop = "0px";
        ul.style.visibility = "visible";
        ul.style.transitionDelay = "0.3s"
    }
    else {
        dropdown.style.height = "0px";
        triangle.style.borderTop = ("7px solid " + color);
        triangle.style.borderBottom = "7px solid rgba(0,0,0,0)";
        triangle.style.marginTop = "4px";
        ul.style.visibility = "hidden";
        ul.style.transitionDelay = "0s";
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() 
{
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) 
    {
        document.getElementsByClassName("navBar")[0].style.top = "0";
    } 
    else 
    {
        document.getElementsByClassName("navBar")[0].style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}

var Object = {

    expanded: -1,

    shrink: function(i)
    {
        if (this.expanded == -1)
            return 0;
        else 
        {
            var product = document.getElementsByClassName("product")[i];
            var image = product.firstElementChild;
            var text = image.nextElementSibling;
            var h1 = text.firstElementChild;
            var learn = text.lastElementChild;
            var more = learn.previousElementSibling;
            var shade = product.lastElementChild;
            var arrow = shade.firstElementChild;

            product.style.width = "300px";

            image.style.width = "100%";
            if(i==1)
                image.style.height = "55%";
            else if(i==2)
                image.style.height = "42%";
            else if(i==3)
                image.style.height = "60%";
            else
                image.style.height = "50%";
            image.style.float = "none";

            text.style.width = "240px";
            text.style.float = "none";
            text.style.padding = "0";

            h1.style.fontSize = "1.5em";

            more.style.transition = "visibility 0s, opacity 0s";
            more.style.opacity = "0";
            more.style.visibility = "hidden";
            
            shade.style.width = "100%";

            arrow.style.transition = "opacity 0s";
            arrow.style.opacity = "0";

            learn.style.display = "none";
        }
    },

    expand: function(i)
    {
        i--;
        
        if( this.expanded == i )
        {
            this.shrink(i);
            this.expanded = -1;
        }
        else
        {
            this.shrink(this.expanded);

            var product = document.getElementsByClassName("product")[i];
            var image = product.firstElementChild;
            var text = image.nextElementSibling;
            var h1 = text.firstElementChild;
            var learn = text.lastElementChild;
            var more = learn.previousElementSibling;
            var shade = product.lastElementChild;
            var arrow = shade.firstElementChild;

            document.getElementById("content").style.height = "100%";

            product.style.transition = "width 0.3s ease";
            product.style.width = "Calc(100% - 80px)";

            image.style.transition = "width 0.5s ease";
            image.style.transition = "height 0.5s ease";
            image.style.transition = "float 0.5s ease";
            image.style.width = "auto";
            image.style.height = "100%";
            image.style.float = "left";

            text.style.width = "55%";
            text.style.float = "left";
            text.style.padding = "15px 30px";

            h1.style.transition = "font-size 0.5s ease"
            h1.style.fontSize = "2em";

            more.style.transition = "visibility 1s, opacity 0.5s ease-in";
            more.style.opacity = "1";
            more.style.visibility = "visible";

            shade.style.width = "10%";

            arrow.style.transition = "opacity 1s ease-in";
            arrow.style.opacity = "1";

            learn.style.display = "block";

            if(i==1)
            {
                text.style.width = "65%";
            }

            this.expanded = i;
       }
    }
};