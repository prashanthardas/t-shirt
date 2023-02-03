var arr = [
    'https://pixelclerks.com/pics/405-1y8Gv41516943676.jpg',
    'https://th.bing.com/th/id/OIP._udo8ZGrRwgcKonMGNWSogHaHa?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP._udo8ZGrRwgcKonMGNWSogHaHa?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.6Ud7XILL5ewJmQjGXDLKRAHaHa?pid=ImgDet&rs=1',
    'https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71dBSukZUyL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png',
    'https://th.bing.com/th/id/OIP.aAdVDXTYa3rj7XEG4aoKwQHaHa?pid=ImgDet&rs=1',
    'https://th.bing.com/th/id/OIP.prNBUKlMIlOUHmN9R9QCJAHaJ2?pid=ImgDet&w=600&h=798&rs=1',
    'https://ae01.alicdn.com/kf/HTB1L2OJrVmWBuNjSspdq6zugXXaI/Hipster-Galaxy-Space-Night-Sky-Print-3D-T-shirt-Men-Women-Hip-Hop-Tshirt-Tees-Tops.jpg',
]
var x = 0;
function changeTshirt() {
    x = x + 1;
    if (x === 8) {
        x = 0;
    }
    document.getElementById('change').style.backgroundImage = `url(${arr[x]})`
}

var button = document.getElementById('btn');
button.onclick = changeTshirt;

