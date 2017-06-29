$("input[name = 'userType']").click(function () {
    $(".js-childForm").hide();
    $("fieldset[account-type = '" + $(this).attr('value') + "']").show();
    $("input[name = 'companyType']").prop('checked', false);
});

$("input[name = 'companyType']").click(function () {
    $("fieldset[company-type]").hide();
    $("fieldset[company-type='all']").show();
    $("fieldset[company-type = '" + $(this).attr('value') + "']").show();
});