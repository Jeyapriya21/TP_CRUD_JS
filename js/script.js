$("#listEtud").hide();

$("#addEtud").click(function () {
    $("#listEtud").show();
});
//  Add a student in the list

$('#addEtud').on('click', function () {
    var first_name = $('#prenom').val();
    var last_name = $('#nom').val();
    var email = $('#email').val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

     if(!pattern.test(email)){
        alert('Please enter a valid email.');
        $("#email").focus();
        return;
    }
    // if ($("#email").filter(email).val) {
    //    alert("Votre mail existe deja") ;
    //    $("email").focus();
    var telephone = $("#telephone").val();
    var pattern1 = /^[0-9]{10}$/
    if (!pattern1.test(telephone)) {
        alert('Please enter a valid telephone number.');
        $("#telephone").focus();
        return;
    }
    var count = $('#myTable tr').length;
    if (first_name != "" && last_name != "" && email != "" && telephone != "") {
        $('#myTable tbody').append('<tr class="child"><td>' + count + '</td><td>' + first_name + '</td><td>' + last_name + '</td><td>' + email + '</td><td>' + telephone + '</td><td><a href="javascript:void(0);" class="uptCF1 btn btn-primary">update</a></td><td><a href="javascript:void(0);" class="remCF2 btn btn-danger">Remove</a></td></tr>');
    }

    $("input[type=text], input[type=email]").val("");

});
// delete a student from list
$(document).on('click', '.remCF2', function () {
    $(this).parent().parent().remove();
    alert("Are you really want to delete");
    $('#myTable tbody tr').each(function (i) {
        $($(this).find('td')[0]).html(i + 1);
    });
});
// update a student details 
var _row = null;
$(document).on('click', '.uptCF1', function () {
    // console.log('hello');
    _row = $(this).parents("tr");
    var cols = _row.children("td");
    $("#prenom").val($(cols[1]).text());
    $("#nom").val($(cols[2]).text());
    $("#email").val($(cols[3]).text());
    $("#telephone").val($(cols[4]).text());

    // Change Update Button Text
    $("#addEtud").val("Update");
    // $(_row).after("td");
    // $("#addEtud").val("Ajouter");
    $(_row).remove();
});
// $(".uptCF1").val("#addEtud").text("Ajouter");
$("#addEtud").val("Ajouter");