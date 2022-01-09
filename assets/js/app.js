// -----------------------------------------------------------
// Votre code ici
// -----------------------------------------------------------

function createPixels() {
     // test pour voir si le document est fonctionne bien.
    // console.log('je suis le document')

    let pixelDiv = '<div class="pixel"></div>';
    $(".app-screen").append(pixelDiv.repeat(1024));
    
  }
  
  function pickPixel() {
      
    // -----------------------------------------------------------
    // Quelque de mes varibles.

      
    // Couleur verte dure
    let darkestgreen = $(".bg_darkestgreen");
    // couleur verte fonce 
    let darkgreen = $(".bg_darkgreen");
    // couleur verte un peu foncé 
    let green = $(".bg_green");
    // couleur verte legé 
    let lightgreen = $(".bg_lightgreen");

        // -----------------------------------------------------------
    // Variable d'instruction dans les functions.

    let getActiveClass = document.querySelector(".is-active");
    let color = darkestgreen.css("backgroundColor");
    let pixels = $(".pixel");
  
    // -----------------------------------------------------------
    // premiere couleur.


    // variable de la section de la class is_active 

    darkestgreen.click(function () {
        // Changement de class avec un click 
      getActiveClass = document.querySelector(".is-active");
      getActiveClass.classList.remove("is-active");
      darkestgreen.addClass("is-active");
      color = darkestgreen.css("backgroundColor");
    //   Selection de la couleur pour l'appliqué pour lepicto  
      pixels = $(".pixel");
      pixels.click(function () {
        $(this).css("background", color);


      });
    });
    // -----------------------------------------------------------
    //Deuxime couleur.

    darkgreen.click(function () {
         // Changement de class avec un click 
      getActiveClass = document.querySelector(".is-active");
      getActiveClass.classList.remove("is-active");
      darkgreen.addClass("is-active");
      color = darkgreen.css("backgroundColor");
        //   Selection de la couleur pour l'appliqué pour lepicto  
      pixels = $(".pixel");
      pixels.click(function () {
        $(this).css("background", color);
      });
    });
    // -----------------------------------------------------------
    // vert un peu foncé
   
    green.click(function () {
         // Changement de class avec un click 
      getActiveClass = document.querySelector(".is-active");
      getActiveClass.classList.remove("is-active");
      green.addClass("is-active");
      color = green.css("backgroundColor");
        //   Selection de la couleur pour l'appliqué pour lepicto  
      let pixels = $(".pixel");
      pixels.click(function () {
        $(this).css("background", color);
      });
    });
    // -----------------------------------------------------------
    // vert vraiment beaucoup moins foncé, vert clair ducoup
  
    lightgreen.click(function () {
          // Changement de class avec un click 
      getActiveClass = document.querySelector(".is-active");
      getActiveClass.classList.remove("is-active");
      lightgreen.addClass("is-active");
      color = lightgreen.css("backgroundColor");
        //   Selection de la couleur pour l'appliqué pour lepicto  
      pixels = $(".pixel");
      pixels.click(function () {
        $(this).css("background", color);
      });
    });
  }


  
  function erase() {
    let pixel = $(".pixel");
    pixel.dblclick(function () {
      $(this).css("background", "none");
    });
  }

  // -----------------------------------------------------------
//   sup le tout le contenu 
  function resetPixel() {
    let resetBtn = $("#reset");
    let pixels = $(".app-screen").children();
    resetBtn.click(function () {
      pixels.css("background", "none");
    });
  }
// -----------------------------------------------------------
//   téléchargemtn du dessin (exportation su le pc)

  function exportBtn(){
    let exp = $('#export');
    exp.click(function(){
        domtoimage.toJpeg(document.getElementById('content'))
        .then(function(dataUrl){
            let link = document.createElement('a');
            link.download = 'image.jpeg';
            link.href = dataUrl;
            link.click();
        });
    });
  }

// -----------------------------------------------------------
//   execution des instruction
  
  $(function () {
    createPixels();
    pickPixel();
    resetPixel();
    erase();
    exportBtn();
  
  });
