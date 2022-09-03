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


   
 