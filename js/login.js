$('.nav-link').click(function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
    $('.k-form').hide();
    $('#' + $(this).attr('form')).show();
});

$('#signForm').submit(function (e) {
    e.preventDefault();
    var formData = readForm('signForm');
    if (formData.elogin && formData.epassword) {
        $('#LoginError').show();
    }
    $('#signForm').addClass('formError');
    setTimeout(function () {
        $('#signForm').removeClass('formError');
    }, 1000);
});