repetirU = 1;

while (repetirU > 0) {
    universo = prompt("Escolha um universo entre marvel ou dc:");
    if (universo == "marvel") {
        repetirU = 0;
        repetirH = 1;
        while (repetirH > 0) {
            heroi = prompt("Você escolheu o universo da marvel, agora escolha um heroi: \n(As opções são: homem de ferro, homem aranha, capitão america, hulk e viúva negra)");
            if (heroi == "homem de ferro") {
                repetirH = 0;
                document.write("<p id='nomeh'>Você escolheu o homem de ferro!</p>");
                document.write("<br><img src=img/homem-de-ferro.png>");
            }
            else if (heroi == "homem aranha") {
                repetirH = 0;
                document.write("<p id='nomeh'>Você escolheu o homem aranha!</p>");
                document.write("<br><img src=img/homem-aranha.png>");
            }
            else if (heroi == "capitao america" || heroi == "capitão america") {
                repetirH = 0;
                document.write("<p id='nomeh'>Você escolheu o capitão america!</p>");
                document.write("<br><img src=img/capitao-america.png>");
            }
            else if (heroi == "hulk") {
                repetirH = 0;
                document.write("<p id='nomeh'>Você escolheu o hulk!</p>");
                document.write("<br><img src=img/hulk.png>");
            }
            else if (heroi == "viuva negra" || heroi == "viúva negra") {
                repetirH = 0;
                document.write("<p id='nomeh'>Você escolheu a viúva negra!</p>");
                document.write("<br><img src=img/viuva-negra.png>");
            }
        }
    }


    else if (universo == "dc") {
        repetirU = 0;
        repetirH = 1;
        while (repetirH > 0) {
            heroi = prompt("Você escolheu o universo da dc, agora escolha um heroi: \n(As opções são: superman, batman, mulher maravilha, flash e aquaman)");
            if (heroi == "superman" || heroi == "super homem") {
                repetirH = 0;
                document.write("<p id='nomeh'>Você escolheu o superman!</p>");
                document.write("<br><img src=img/superman.png>");
            }
            else if (heroi == "batman") {
                repetirH = 0;
                document.write("<p id='nomeh'>Você escolheu o batman!</p>");
                document.write("<br><img src=img/batman.png>");
            }
            else if (heroi == "mulher maravilha") {
                repetirH = 0;
                document.write("<p id='nomeh'>Você escolheu a mulher maravilha!</p>");
                document.write("<br><img src=img/mulher-maravilha.png>");
            }
            else if (heroi == "flash") {
                repetirH = 0;
                document.write("<p id='nomeh'>Você escolheu o flash!</p>");
                document.write("<br><img src=img/flash.png>");
            }
            else if (heroi == "aquaman") {
                repetirH = 0;
                document.write("<p id='nomeh'>Você escolheu o aquaman!</p>");
                document.write("<br><img src=img/aquaman.png>");
            }
        }
    }
}

function funcMudarH() {
    mheroi = document.querySelector("input[name=opth]:checked").value;

    if (mheroi == "HdF") {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o homem de ferro!</p>");
        document.write("<br><img src=img/homem-de-ferro.png>");
    }
    else if (mheroi == "HA") {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o homem aranha!</p>");
        document.write("<br><img src=img/homem-aranha.png>");
    }
    else if (mheroi == "CA") {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o capitão america!</p>");
        document.write("<br><img src=img/capitao-america.png>");
    }
    else if (mheroi == "H") {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o hulk!</p>");
        document.write("<br><img src=img/hulk.png>");
    }
    else if (mheroi == "VN") {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu a viúva negra!</p>");
        document.write("<br><img src=img/viuva-negra.png>");
    }
    else if (mheroi == "Spm") {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o superman!</p>");
        document.write("<br><img src=img/superman.png>");
    }
    else if (mheroi == "Bt") {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o batman!</p>");
        document.write("<br><img src=img/batman.png>");
    }
    else if (mheroi == "MM") {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu a mulher maravilha!</p>");
        document.write("<br><img src=img/mulher-maravilha.png>");
    }
    else if (mheroi == "Fsh") {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o flash!</p>");
        document.write("<br><img src=img/flash.png>");
    }
    else if (mheroi == "Aq") {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o aquaman!</p>");
        document.write("<br><img src=img/aquaman.png>");
    }
}

function funcCalc() {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = eval(("(") + parseInt(num1) + ("+") + parseInt(num2)+ (")") + ("/2"));

    if (resultado >= 1 && resultado < 2) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o homem de ferro!</p>");
        document.write("<br><img src=img/homem-de-ferro.png>");

    }
    else if (resultado >= 2 && resultado < 3) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o homem aranha!</p>");
        document.write("<br><img src=img/homem-aranha.png>");
    }
    else if (resultado >= 3 && resultado < 4) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o capitão america!</p>");
        document.write("<br><img src=img/capitao-america.png>");
    }
    else if (resultado >= 4 && resultado < 5) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o hulk!</p>");
        document.write("<br><img src=img/hulk.png>");
    }
    else if (resultado >= 5 && resultado < 6) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu a viúva negra!</p>");
        document.write("<br><img src=img/viuva-negra.png>");
    }
    else if (resultado >= 6 && resultado < 7) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o superman!</p>");
        document.write("<br><img src=img/superman.png>");
    }
    else if (resultado >= 7 && resultado < 8) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o batman!</p>");
        document.write("<br><img src=img/batman.png>");
    }
    else if (resultado >= 8 && resultado < 9) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu a mulher maravilha!</p>");
        document.write("<br><img src=img/mulher-maravilha.png>");
    }
    else if (resultado >= 9 && resultado < 10) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o flash!</p>");
        document.write("<br><img src=img/flash.png>");
    }
    else if (resultado >= 10 && resultado <= 10) {
        document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"css/style.css\" />");
        document.write("<p id='nomeh'>Você escolheu o aquaman!</p>");
        document.write("<br><img src=img/aquaman.png>");
    }
}