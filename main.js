document.getElementById('android-user').addEventListener('click', pickAndroid);
document.getElementById('apple-user').addEventListener('click', pickApple);


function pickAndroid () {
    console.log("click");
    document.getElementById('img').src = 'images/Android-Logo.jpg';
    document.getElementById('link').innerHTML = "Android Home";
    document.getElementById('link').style.backgroundColor = '#a4c93b';
    document.getElementById('link').href = 'https://www.android.com/';
}

function pickApple () {
    console.log("click");
    document.getElementById('img').src = 'images/Apple-Logo.jpg';
    document.getElementById('link').innerHTML = "Apple Home";
    document.getElementById('link').style.backgroundColor = '#b6bcca';
    document.getElementById('link').href = 'https://www.apple.com/';
}
