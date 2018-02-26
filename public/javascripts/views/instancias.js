$(function(){
  $('.datatable').dataTable({
    "sDom": "<'row mb-1'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6 center'p>>",
    renderer: 'bootstrap',
    // "oLanguage": {
    //   "sLengthMenu": "_MENU_ records per page"
    // }
  });

});

function stopVM(bt) {
  $.ajax({
    url: "/infraestrutura/instancias/stop/" + bt.name,
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
      $('#divStatus-'+bt.name).html('<span class="badge badge-default">Stopping</span>');
      $('#divAcao-'+bt.name).html('<div class="sk-wave">'+
        '<div class="sk-rect sk-rect1"></div>'+
        '<div class="sk-rect sk-rect2"></div>'+
        '<div class="sk-rect sk-rect3"></div>'+
        '<div class="sk-rect sk-rect4"></div>'+
        '<div class="sk-rect sk-rect5"></div>'+
      '</div>');
      toastr.info('Info', 'Sua VM está sendo desligada', {
        closeButton: true,
        progressBar: true,
      });
    }
  });
};

function startVM(bt) {
  $.ajax({
    url: "/infraestrutura/instancias/start/" + bt.name,
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
      $('#divStatus-'+bt.name).html('<span class="badge badge-warning">Stopping</span>');
      $('#divAcao-'+bt.name).html('<div class="sk-wave">'+
        '<div class="sk-rect sk-rect1"></div>'+
        '<div class="sk-rect sk-rect2"></div>'+
        '<div class="sk-rect sk-rect3"></div>'+
        '<div class="sk-rect sk-rect4"></div>'+
        '<div class="sk-rect sk-rect5"></div>'+
      '</div>');
      toastr.info('Info', 'Sua VM está sendo iniciada', {
        closeButton: true,
        progressBar: true,
      });
    }
  });
};

function restartVM(bt) {
  $.ajax({
    url: "/infraestrutura/instancias/reboot/" + bt.name,
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
      toastr.info('Info', 'Sua VM está sendo reiniciada', {
        closeButton: true,
        progressBar: true,
      });
    }
  });
};
