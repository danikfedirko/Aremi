var controller = new ScrollMagic.Controller();
 $(function () {
   var rightFeatureContent = new ScrollMagic.Scene({
     triggerElement: "#intro",
     duration: 300
   })
   .setTween("#intro #title,#intro .feature-description,#intro .btn-section", 1, {
     right: '5%',
     opacity:1
     })
     .addTo(controller);

     var leftImg = new ScrollMagic.Scene({
       triggerElement: "#intro",
       duration: 300
     })
     .setTween("#intro .intro-pic", 1, {
       left: '5%',
       opacity:1
     })
     .addTo(controller);

     var leftFeatureContent = new ScrollMagic.Scene({
       triggerElement: "#feature-2",
       duration: 300
     })
     .setTween("#feature-2 #title,#feature-2 .feature-description,#feature-2 .btn-section", 1, {
       left: '80%',
       opacity:1
       })
       .addTo(controller);

     var rightImg = new ScrollMagic.Scene({
       triggerElement: "#feature-2",
       duration: 300
     })
     .setTween("#feature-2 .intro-pic-right", 1, {
       right: '5%',
       opacity:1
     })
     .addTo(controller);
   })
