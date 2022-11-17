const REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$('document').ready(function() {
  $('#form_email').on('submit', function(e) {
    e.preventDefault();
    
    const emailValue = $('#ip_email').val()

    if (emailValue.match(REGEX)) {
      $('#form_wrapper').addClass('d-none');
      $('#personal_information').removeClass('d-none')
    } else {
      $('#notice').html('Hãy nhập email để xác thực')
    }
  })

  $('.view-more').on('click', function() {
    $(this).addClass('d-none')
    $(this).next('div').removeClass('d-none')
  })

  $('.view-less').on('click', function() {
    $(this).parent().addClass('d-none')
    $(this).parent().prev('span').removeClass('d-none')
  })
})
