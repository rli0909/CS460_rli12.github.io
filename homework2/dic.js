
var app = function () {

    var ob = {

    };

    var inputdata;
    var data;
    var dicresult;
    var resultcreated = true;
    var font = {
        " ": ["░░░", "░░░", "░░░", "░░░", "░░░", "░░░"],
        A: ["░░░░░", "░▄▀▀▄", "░█▄▄█", "░█░░█", "░▀░░▀", "░░░░░"],
        B: ["░░░░░", "░█▀▀▄", "░█▄▄▀", "░█░░█", "░▀▀▀░", "░░░░░"],
        C: ["░░░░░", "░▄▀▀▄", "░█░░░", "░█░░▄", "░░▀▀░", "░░░░░"],
        D: ["░░░░░", "░█▀▀▄", "░█░░█", "░█░░█", "░▀▀▀░", "░░░░░"],
        E: ["░░░░░", "░█▀▀▀", "░█▄▄▄", "░█░░░", "░▀▀▀▀", "░░░░░"],
        F: ["░░░░░", "░█▀▀▀", "░█▄▄▄", "░█░░░", "░▀░░░", "░░░░░"],
        G: ["░░░░░", "░▄▀▀▄", "░█░▄▄", "░█░░█", "░░▀▀░", "░░░░░"],
        H: ["░░░░░", "░█░░█", "░█▄▄█", "░█░░█", "░▀░░▀", "░░░░░"],
        I: ["░░░░", "░▀█▀", "░░█░", "░░█░", "░▀▀▀", "░░░░"],
        J: ["░░░░░", "░░▀█▀", "░░░█░", "░▄░█░", "░░▀░░", "░░░░░"],
        K: ["░░░░░", "░█░░█", "░█▄▀░", "░█░▀▄", "░▀░░▀", "░░░░░"],
        L: ["░░░░░", "░█░░░", "░█░░░", "░█░░░", "░▀▀▀▀", "░░░░░"],
        M: ["░░░░░░", "░█▄░▄█", "░█░▀░█", "░█░░░█", "░▀░░░▀", "░░░░░░"],
        N: ["░░░░░", "░█▄░█", "░█▀▄█", "░█░▀█", "░▀░░▀", "░░░░░"],
        O: ["░░░░░", "░▄▀▀▄", "░█░░█", "░█░░█", "░░▀▀░", "░░░░░"],
        P: ["░░░░░", "░█▀▀▄", "░█▄▄▀", "░█░░░", "░▀░░░", "░░░░░"],
        Q: ["░░░░░", "░▄▀▀▄", "░█░░█", "░█░▀█", "░░▀▀▀", "░░░░░"],
        R: ["░░░░░", "░█▀▀▄", "░█▄▄▀", "░█░░█", "░▀░░▀", "░░░░░"],
        S: ["░░░░░", "░▄▀▀▄", "░▀▄▄░", "░▄░░█", "░░▀▀░", "░░░░░"],
        T: ["░░░░", "░▀█▀", "░░█░", "░░█░", "░░▀░", "░░░░"],
        U: ["░░░░░", "░█░░█", "░█░░█", "░█░░█", "░░▀▀░", "░░░░░"],
        V: ["░░░░░", "░█░░█", "░█░░█", "░▀▄▄▀", "░░▀▀░", "░░░░░"],
        W: ["░░░░░░", "░█░░░█", "░█░░░█", "░█░▄░█", "░░▀░▀░", "░░░░░░"],
        X: ["░░░░░░", "░█░░░█", "░░▀▄▀░", "░▄▀░▀▄", "░▀░░░▀", "░░░░░░"],
        Y: ["░░░░░░", "░█░░░█", "░░▀▄▀░", "░░░█░░", "░░░▀░░", "░░░░░░"],
        Z: ["░░░░░", "░▀▀▀█", "░░▄▀░", "░█░░░", "░▀▀▀▀", "░░░░░"],
        a: ["░░░░░", "░░░░░", "░▄▀▀▄", "░█░▄█", "░░▀░▀", "░░░░░"],
        b: ["░░░░░", "░█░░░", "░█▀▀▄", "░█░░█", "░▀▀▀░", "░░░░░"],
        c: ["░░░░░", "░░░░░", "░▄▀▀▀", "░█░░░", "░░▀▀▀", "░░░░░"],
        d: ["░░░░░", "░░░░█", "░▄▀▀█", "░█░░█", "░░▀▀▀", "░░░░░"],
        e: ["░░░░░", "░░░░░", "░▄▀▀▄", "░█▀▀▀", "░░▀▀▀", "░░░░░"],
        f: ["░░░░░", "░▄▀▀▄", "░█▄▄░", "░█░░░", "░▀░░░", "░░░░░"],
        g: ["░░░░░", "░░░░░", "░▄▀▀▄", "░█░░█", "░░▀▀█", "░▀▀▀░"],
        h: ["░░░░░", "░█░░░", "░█▀▀▄", "░█░░█", "░▀░░▀", "░░░░░"],
        i: ["░░", "░▀", "░█", "░█", "░▀", "░░"],
        j: ["░░░░░", "░░░▀░", "░░░█░", "░░░█░", "░▄░█░", "░░▀░░"],
        k: ["░░░░░", "░█░░░", "░█░▄▀", "░█▀▄░", "░▀░░▀", "░░░░░"],
        l: ["░░", "░█", "░█", "░█", "░▀", "░░"],
        m: ["░░░░░░", "░░░░░░", "░█▀▄▀▄", "░█░█░█", "░▀░▀░▀", "░░░░░░"],
        n: ["░░░░░", "░░░░░", "░█▀▀▄", "░█░░█", "░▀░░▀", "░░░░░"],
        o: ["░░░░░", "░░░░░", "░▄▀▀▄", "░█░░█", "░░▀▀░", "░░░░░"],
        p: ["░░░░░", "░░░░░", "░█▀▀▄", "░█░░█", "░█▀▀░", "░▀░░░"],
        q: ["░░░░░", "░░░░░", "░▄▀▀█", "░█░░█", "░░▀▀█", "░░░░▀"],
        r: ["░░░░░", "░░░░░", "░▄▀▀▄", "░█░░░", "░▀░░░", "░░░░░"],
        s: ["░░░░░", "░░░░░", "░▄▀▀▀", "░░▀▀▄", "░▀▀▀░", "░░░░░"],
        t: ["░░░░", "░░█░", "░▀█▀", "░░█░", "░░▀░", "░░░░"],
        u: ["░░░░░", "░░░░░", "░█░░█", "░█░░█", "░░▀▀░", "░░░░░"],
        v: ["░░░░░", "░░░░░", "░█░░█", "░▀▄▄▀", "░░▀▀░", "░░░░░"],
        w: ["░░░░░░", "░░░░░░", "░█░░░█", "░█░█░█", "░░▀░▀░", "░░░░░░"],
        x: ["░░░░░░", "░░░░░░", "░▀▄░▄▀", "░░▄▀▄░", "░▀░░░▀", "░░░░░░"],
        y: ["░░░░░", "░░░░░", "░█░░█", "░█░░█", "░░▀▀█", "░▀▀▀░"],
        z: ["░░░░░", "░░░░░", "░▀▀▀█", "░▄▀▀░", "░▀▀▀▀", "░░░░░"],
        0: ["░░░░░", "░▄▀▀▄", "░█▄▀█", "░█░░█", "░░▀▀░", "░░░░░"],
        1: ["░░░░", "░▄█░", "░░█░", "░░█░", "░▀▀▀", "░░░░"],
        2: ["░░░░░", "░▄▀▀▄", "░░▄▄▀", "░█░░░", "░▀▀▀▀", "░░░░░"],
        3: ["░░░░░", "░▄▀▀▄", "░░▄▄▀", "░▄░░█", "░░▀▀░", "░░░░░"],
        4: ["░░░░░", "░█░░█", "░█▄▄█", "░░░░█", "░░░░▀", "░░░░░"],
        5: ["░░░░░", "░█▀▀▀", "░█▄▄░", "░▄░░█", "░░▀▀░", "░░░░░"],
        6: ["░░░░░", "░▄▀▀▄", "░█▄▄░", "░█░░█", "░░▀▀░", "░░░░░"],
        7: ["░░░░░", "░▀▀▀█", "░░░▄▀", "░░▄▀░", "░░▀░░", "░░░░░"],
        8: ["░░░░░", "░▄▀▀▄", "░▀▄▄▀", "░█░░█", "░░▀▀░", "░░░░░"],
        9: ["░░░░░", "░▄▀▀▄", "░▀▄▄█", "░▄░░█", "░░▀▀░", "░░░░░"],
        ".": ["░░░░", "░░░░", "░░░░", "░░▄▄", "░░▀▀", "░░░░"],
        ",": ["░░░░░", "░░░░░", "░░░░░", "░░▄▄░", "░░▀█░", "░░▀░░"],
        "!": ["░░░░░", "░░██░", "░░██░", "░░▄▄░", "░░▀▀░", "░░░░░"],
        ";": ["░░░░░", "░░██░", "░░░░░", "░░██░", "░░▄▀░", "░░░░░"],
        ":": ["░░░░░", "░░▄▄░", "░░▀▀░", "░░▄▄░", "░░▀▀░", "░░░░░"],
        "?": ["░░░░░", "░░▄░░", "░▀░█░", "░░▀░░", "░░▀░░", "░░░░░"],
        "$": ["░░░▄░░", "░▄▀█▀▄", "░▀▄█▄░", "░▄░█░█", "░░▀█▀░", "░░░░░░"],
        "@": ["░░░▄▄▄░░", "░▄▀░▄░▀▄", "░█░█░█░█", "░▀▄░▀▀▀░", "░░░▀▀▀▀░", "░░░░░░░░"],
        "~": ["░░░░░░░░", "░░░░░░░░", "░░▄▄░░░▄", "░█░░▀▄▄▀", "░░░░░░░░", "░░░░░░░░"],
        "'": ["░░░░░", "░░██░", "░░▀▀░", "░░░░░", "░░░░░", "░░░░░"],
        '"': ["░░░░░", "░█░█░", "░▀░▀░", "░░░░░", "░░░░░", "░░░░░"],
        "*": ["░░░░░░", "░░░▄░░", "░▀▄█▄▀", "░░▄▀▄░", "░▀░░░▀", "░░░░░░"],
        "%": ["░░░░░░░░░", "░░▄░░░░▄░", "░▀▄▀░▄▀░░", "░░░▄▀░▄▀▄", "░░▀░░░░▀░", "░░░░░░░░░"]
    };


    var inputlink;
    var checkm;
    var inbalidm;
    var linkresult;
    var linkCreated = true;
    var reg = /[a-zA-Z0-9]+\-[a-zA-Z0-9]+\-[a-zA-Z0-9]+\-[a-zA-Z0-9]+\&InstanceId\=[a-zA-Z0-9]+-[a-zA-Z0-9]+\-[a-zA-Z0-9]+\-[a-zA-Z0-9]+\-[a-zA-Z0-9]+/;




    ob.init = function () {
        inputdata = document.getElementById("bigfontinput");
        $("#gobtn").click(function () {
            data = inputdata.value;
            var b = "";
            var outdic = document.getElementById("outdic");
            for (var j = 0; j < 6; j++) {
                var s = "";
                for (var i = 0; i < data.length; i++) {
                    //console.log(font[data.substr(i,1)][2]);
                    s += font[data.substr(i, 1)][j] + "";
                }
                //console.log(s);
                b += s + "░" + "\n";
            }
            dicresult = b;
            outdic.value = dicresult;
            resultcreated = true;
        });


        $("#bigfontinput").focus(function () {
            if (resultcreated) {
                inputdata.value = '';
                resultcreated = false;
            }
        });

        $("#selectbtn").click(function () {
            var text = document.getElementById("outdic");
            //Event.preventDefault();
            text.select();
            document.execCommand("copy");
            //alert("Copied");
        });



        inputlink = document.getElementById("datain");
        checkm = document.getElementById("checkmark");
        checkm.style.visibility = "hidden";
        invalidm = document.getElementById("invalid");
        invalidm.style.visibility = "hidden";

        inputlink.onkeyup = onkeyup;
        onkeyup = function(){
            if (inputlink.value.search(reg) >= 0) {
                var array = inputlink.value.split("=");
                checkm.style.visibility = "visible";
                invalidm.style.visibility = "hidden";
                var outto = document.getElementById("outto");
                var outLink = document.getElementById("outLink");

                var part1 = array[1].split("&")[0];
                var part2 = array[2];

                linkresult = "https://www2.wou.edu/nora/eclipse.auth2?pdata=" + part1 + "," + part2;

                outto.innerHTML = linkresult;
                outLink.href = linkresult;
            } else {
                invalidm.style.visibility = "visible";
                checkm.style.visibility = "hidden";
                document.getElementById("mypop").style.visibility = "visible";
                document.getElementById("gobutton").disabled = true;
                document.getElementById("gobutton").style.visibility = "hidden";
            }
        };

        $("#datain").focus(function () {
            if (linkCreated) {
                inputlink.value = '';
                linkCreated = false;
            }
        });

        $("#gobutton").click(function () {
            if (inputlink.value.search(reg) >= 0) {
                var array = inputlink.value.split("=");
                checkm.style.visibility = "visible";
                invalidm.style.visibility = "hidden";
                var outto = document.getElementById("outto");
                var outLink = document.getElementById("outLink");

                var part1 = array[1].split("&")[0];
                var part2 = array[2];

                liinkresult = "https://www2.wou.edu/nora/eclipse.auth2?pdata=" + part1 + "," + part2;

                outto.innerHTML = linkresult;
                outLink.href = linkresult;
                linkCreated = true;
            } else {
                invalidm.style.visibility = "visible";
                checkm.style.visibility = "hidden";
                document.getElementById("mypop").style.visibility = "visible";
                linkCreated = false;
            }
        });

    

    };

    return ob;
}();






