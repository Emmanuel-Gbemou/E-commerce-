$(document).ready(function(){

            let form=$("#form") ;
            let quantite=$("#quantite") ;
            let taille=$("#taille") ;
            let nombre=$("#nombre") ;
            let prix=$("#prix") ;


                let quantite_value=$("#quantite_value") ;
                let taille_value=$("#taille_value") ;
                let nombre_value=$("#nombre_value") ;
                let prix_value=$("#prix_value") ;
          

            quantite_value.text(quantite.val()) ;
            taille_value.text(taille.val()) ;
            nombre_value.text(nombre.val()) ;
            prix_value.text(prix.val()) ;

            $("#total_value").text(quantite.val()*prix.val()) ;

                quantite.change(function(){

                   let newquantite=quantite.val() ;
                    quantite_value.text(newquantite) ;
                     $("#total_value").text(quantite.val()*prix.val()) ;

                }) ;
                taille.change(function(){
                    let newtaille=taille.val() ;
                    taille_value.text(newtaille) ;

                }) ;
                nombre.change(function(){
                    let newnombre=nombre.val() ;
                    nombre_value.text(newnombre) ;

                }) ;
                prix.change(function(){
                    let newprix=prix.val()  ;
                    prix_value.text(newprix) ;
                     $("#total_value").text(quantite.val()*prix.val()) ;

                }) ;

            

      
        
}) ;

































































/*$(document).ready(function(){
    
    let quantite=$("#quantite") ;
    let taille=$("#taille") ;
    let nombre=$("#nombre") ;
    let prix=$("#prix") ;
    let total=$("#total_value") ;
    console.log(total_value) ;

        let quantite_value=$("#quantite_value") ;
        let taille_value=$("#taille_value") ;
        let nombre_value=$("#nombre_value") ;
        let prix_value=$("#prix_value") ;

        quantite_value.text(quantite.val()) ;
        taille_value.text(taille.val()) ;
        nombre_value.text(nombre.val()) ;
        prix_value.text(prix.val()) ;
        total.text(quantite.val() * prix.val()) ;

   quantite.change(function(){
        let newquantite=quantite.val() ;
        quantite_value.text(newquantite) ;
        total.text(quantite.val()*prix.val()) ;
   }) ;
    taille.change(function(){
        let newtaille=taille.val() ;
        taille_value.text(newtaille) ;
    }) ;
    nombre.change(function(){
        let newnombre=nombre.val() ;
        nombre_value.text(newnombre) ;
    }) ;
    prix.change(function(){
        let newprix=prix.val() ;
        prix_value.text(newprix );
        total.text(quantite.val()*prix.val()) ;
    }) ;
});
*/