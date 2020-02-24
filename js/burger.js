var menuIsOpen   = false,
    burger       = $('.menu .burger'),
    overlay      = $('.overlay'),
    menuInner    = $('.menu .inner'),
    menuContent  = $('.menu .inner .menu-content'),
    messageUs    = $('.message-us'),
    contactForm  = $('.contact-form'),
    cancelForm   = $('.cancel-form'),
    contentlist = $('.content-list');
var height       = menuContent.height();

function closeMenu() {
  // Close the menu
  TweenMax.to(overlay, 0.2, {
    display: 'none',
    opacity: 0,
    delay: 0.2
  });
  TweenMax.to(menuContent, 0.3, {
    opacity: 0,
    onComplete: function() {
      TweenMax.to(menuInner, 0.2, {
        width: 0,
        padding: 0,
        onComplete: function() {
          menuInner.removeClass('active');
        }
      });
    }
  });
  TweenMax.to(contactForm, 0.2, {
    width: 0
  });
  burger.toggleClass('closed');
  burger.toggleClass('open');
  contactForm.removeClass('active');
  burger.removeClass('white');
  menuIsOpen = false;
}

overlay.on('click', function(event) {
  closeMenu();
});

burger.on('click', function(event) {

  burger.prop('disabled', true);
  setTimeout(function(){
    burger.prop('disabled', false);
  }, 400);

  event.stopPropagation;
  if (menuIsOpen === false) {
    // Open the menu
    TweenMax.set(overlay, {
      display: 'block',
      opacity: 1
    });
    menuInner.addClass('active');
    TweenMax.to(menuInner, 0.3, {
      width: '50%',
      padding: 0,
      onComplete: function() {
        TweenMax.to(menuContent, 0.3, {
          opacity: 1
        });
      }
    });
    burger.toggleClass('closed');
    burger.toggleClass('open');
    menuIsOpen = true;
  } else {
    closeMenu();
  }
});

contentlist.on('click', function(event) {

  burger.prop('disabled', true);
  setTimeout(function(){
    burger.prop('disabled', false);
  }, 400);

  event.stopPropagation;
  if (menuIsOpen === false) {
    // Open the menu
    TweenMax.set(overlay, {
      display: 'block',
      opacity: 1
    });
    menuInner.addClass('active');
    TweenMax.to(menuInner, 0.3, {
      width: '50%',
      padding: 0,
      onComplete: function() {
        TweenMax.to(menuContent, 0.3, {
          opacity: 1
        });
      }
    });
    burger.toggleClass('closed');
    burger.toggleClass('open');
    menuIsOpen = true;
  } else {
    closeMenu();
  }
});

messageUs.on('click', function(event) {
  contactForm.toggleClass('active');
  burger.addClass('white');
  TweenMax.to(menuInner, 0.3, {
    width: '100%',
    padding: 0,
    onComplete: function() {
      TweenMax.to(menuContent, 0.3, {
        opacity: 1
      });
    }
  });
  TweenMax.to(contactForm, 0.3, {
    width: '80%'
  });
});

cancelForm.on('click', function(event) {
  burger.removeClass('white');
  TweenMax.to(contactForm, 0.3, {
    width: 0
  });
  TweenMax.to(menuInner, 0.3, {
    width: '50%'
  });
  $('#enquiry_form').reset();
});