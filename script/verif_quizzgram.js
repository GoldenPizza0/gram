document.addEventListener("DOMContentLoaded", function() {
    // Fonction pour vérifier les réponses et calculer le score
    function verifierReponses() {
        var score = 0;

        // Questions à choix
        var reponsesChoix = document.querySelectorAll("select[name='q1']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "is") {
                score++;
            }             
        });

        var reponsesChoix = document.querySelectorAll("select[name='q2']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "was") {
                score++;
            }             
        });

        var reponsesChoix = document.querySelectorAll("select[name='q3']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "do") {
                score++;
            }             
        });

        var reponsesChoix = document.querySelectorAll("select[name='q4']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "has") {
                score++;
            }             
        });

        var reponsesChoix = document.querySelectorAll("select[name='q5']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "had") {
                score++;
            }             
        });

        var reponsesChoix = document.querySelectorAll("select[name='q6']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "will") {
                score++;
            }            
        });

        var reponsesChoix = document.querySelectorAll("select[name='p1']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "prpc") {
                score++;
            }             
        });

        var reponsesChoix = document.querySelectorAll("select[name='p2']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "prs") {
                score++;
            }            
        });

        var reponsesChoix = document.querySelectorAll("select[name='p3']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "prc") {
                score++;
            }           
        });

        var reponsesChoix = document.querySelectorAll("select[name='p4']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "prp") {
                score++;
            }     
        });

        var reponsesChoix = document.querySelectorAll("select[name='p5']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "pac") {
                score++;
            }         
        });

        var reponsesChoix = document.querySelectorAll("select[name='p6']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "pas") {
                score++;
            }    
        });

        var reponsesChoix = document.querySelectorAll("select[name='p7']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "papc") {
                score++;
            }
        });

        var reponsesChoix = document.querySelectorAll("select[name='p8']");
        reponsesChoix.forEach(function(select) {
            if (select.value === "fp") {
                score++;
            }
        });

        return score;
    }

    // Fonction pour soumettre le formulaire et afficher le score
    function soumettreFormulaire(event) {
        event.preventDefault(); // Empêche l'envoi du formulaire
        var score = verifierReponses();
        alert("Votre score est : " + score +"/14");
        alert("Password gives an access to the correction : correctgrammar1234*"); 
    }

    // Écouteur d'événement pour le soumission du formulaire
    var formulaire = document.querySelector("form");
    formulaire.addEventListener("submit", soumettreFormulaire);
});
