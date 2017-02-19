$(document).ready(function () {
    //alert("hello world!");

    $('.input-daterange input').each(function () {
        $(this).datepicker('clearDates');
    });

    $('#locationselect').click(function(){
        $('#locationselect').popover();
    });

    $('#toinput').change(function(){
        $('#toinput').popover();
    });

})