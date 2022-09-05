// onload
$(function() {
    $("[name='chkLong']").closest('td').find("[name='divFree']").toggle();
    $("[name='chkShort']").closest('td').find("[name='divFree']").toggle();
    $("[name='chkService']").closest('td').find("[name='divFree']").toggle();
    $("[name='chkService']").closest('tr').find("[name='divFree2']").toggle();
    $("[name='chkHindo']").closest('td').find("[name='divFree']").toggle();
    $("[name='chkTerm']").closest('td').find("[name='divFree']").toggle();
});

// 
$(document).on('change', "[name='chkLong']", function(e) {
    var column = $(e.currentTarget).closest('td');
    column.find("[name='divNotFree']").toggle();
    column.find("[name='divFree']").toggle();
});

$(document).on('change', "[name='chkShort']", function(e) {
    var column = $(e.currentTarget).closest('td');
    column.find("[name='divNotFree']").toggle();
    column.find("[name='divFree']").toggle();
});

$(document).on('change', "[name='chkService']", function(e) {
    var column = $(e.currentTarget).closest('td');
    var row = $(e.currentTarget).closest('tr');
    column.find("[name='divNotFree']").toggle();
    column.find("[name='divFree']").toggle();
    row.find("[name='divNotFree2']").toggle();
    row.find("[name='divFree2']").toggle();
});

$(document).on('change', "[name='chkHindo']", function(e) {
    var column = $(e.currentTarget).closest('td');
    column.find("[name='divNotFree']").toggle();
    column.find("[name='divFree']").toggle();
});

$(document).on('change', "[name='chkTerm']", function(e) {
    var column = $(e.currentTarget).closest('td');
    column.find("[name='divNotFree']").toggle();
    column.find("[name='divFree']").toggle();
});

$(document).on('click', "[name='btnAllLong']", function(e) {
    var column = $(e.currentTarget).closest('td');
    var check  = column.find("[name='chkLong']").prop('checked');
    var start  = column.find("[name='txtLongStart']").val();
    var end    = column.find("[name='txtLongEnd']").val();
    var free   = column.find("[name='areaLong']").val();

    var table  = $(e.currentTarget).closest('table');
    table.find("[name='txtLongStart']").val(start);
    table.find("[name='txtLongEnd']").val(end);
    table.find("[name='areaLong']").val(free);
    
    table.find("[name='chkLong']").each(function(index,element){
        if (check != $(element).prop('checked')){
            $(element).prop("checked", check);
            var col = $(element).closest('td');
            col.find("[name='divNotFree']").toggle();
            col.find("[name='divFree']").toggle();
        }
    })
});

$(document).on('click', "[name='btnAllShort']", function(e) {
    var column = $(e.currentTarget).closest('td');
    var check  = column.find("[name='chkShort']").prop('checked');
    var start  = column.find("[name='txtShortStart']").val();
    var end    = column.find("[name='txtShortEnd']").val();
    var free   = column.find("[name='areaShort']").val();
    
    var table  = $(e.currentTarget).closest('table');
    table.find("[name='txtShortStart']").val(start);
    table.find("[name='txtShortEnd']").val(end);
    table.find("[name='areaShort']").val(free);
    
    table.find("[name='chkShort']").each(function(index,element){
        if (check != $(element).prop('checked')){
            $(element).prop("checked", check);
            var col = $(element).closest('td');
            col.find("[name='divNotFree']").toggle();
            col.find("[name='divFree']").toggle();
        }
    })
});

$(document).on('click', "[name='btnAllTerm']", function(e) {
    var column = $(e.currentTarget).closest('td');
    var check  = column.find("[name='chkTerm']").prop('checked');
    var start  = column.find("[name='txtTermStart']").val();
    var end    = column.find("[name='txtTermEnd']").val();
    var free   = column.find("[name='areaTerm']").val();
    
    var table  = $(e.currentTarget).closest('table');
    table.find("[name='txtTermStart']").val(start);
    table.find("[name='txtTermEnd']").val(end);
    table.find("[name='areaTerm']").val(free);
    
    table.find("[name='chkTerm']").each(function(index,element){
        if (check != $(element).prop('checked')){
            $(element).prop("checked", check);
            var col = $(element).closest('td');
            col.find("[name='divNotFree']").toggle();
            col.find("[name='divFree']").toggle();
        }
    })
});

$(document).on('click', "[name='btnReibun']", function() {
    window.open("care_reibun.html","_blank","top=50,left=50,width=800,height=700,scrollbars=1,location=0,menubar=0,toolbar=0,status=1,directories=0,resizable=1");
});
