async function post() {
    return new Promise(
        function (postingphoto) {
            setTimeout(function () {
                postingphoto("your photo is posted");
            }, 1000);
        }
    );
}
async function liked() {
    return new Promise(
        function (likingphoto) {
            setTimeout(function () {
                likingphoto("your photo is liked");
            }, 1000);
        }
    );
}
async function take() {
    return new Promise(
        function (takephoto) {
            setTimeout(
                function () {
                    takephoto("taking photo in snapchat");
                },
                3000
            );
        }
    );
}

async function all(){
    var [a, b, c] = await Promise.all([take(), post(), liked()]);
    console.log(a);
    console.log(b);
    console.log(c); 
}
all()
