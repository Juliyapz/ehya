$(document).ready(function () {

  //Мобильное меню
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".header-left").toggleClass("header-left--visible");
  });

  //Модальное окно
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }

  $('.phone').mask('+7(000) 000-00-00');

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass('modal__overlay--visible');
      modalDialog.removeClass('modal__dialog--visible');
    }
  });

  $(document).mouseup(function (e) {
    var modalDialog = $(".modal__dialog--visible");
    var modalOverlay = $(".modal__overlay--visible");
    if (!modalDialog.is(e.target)
      && modalDialog.has(e.target).length === 0) {
      modalDialog.removeClass('modal__dialog--visible');
      modalOverlay.removeClass('modal__overlay--visible');
    }
  });

  var like = $(".card__like-1");
  like.on("click", function () {
    $(".card__like-1").toggleClass("card__like-1--red-1");
  });

  var like = $(".card__like-2");
  like.on("click", function () {
    $(".card__like-2").toggleClass("card__like-2--red-2");
  });

  var like = $(".card__like-3");
  like.on("click", function () {
    $(".card__like-3").toggleClass("card__like-3--red-3");
  });

  var like = $(".card__like-4");
  like.on("click", function () {
    $(".card__like-4").toggleClass("card__like-4--red-4");
  });

  var like = $(".card__like-5");
  like.on("click", function () {
    $(".card__like-5").toggleClass("card__like-5--red-5");
  });

  var like = $(".card__like-6");
  like.on("click", function () {
    $(".card__like-6").toggleClass("card__like-6--red-6");
  });

});