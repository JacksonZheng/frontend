var TableDatatablesEditable = function () {

    var handleTable = function () {

        
        var table = $('#sample_1');
        var oTable = table.dataTable({

            // Internationalisation. For more info refer to http://datatables.net/manual/i18n
            "language": {
                "aria": {
                    "sortAscending": ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                },
                "emptyTable": "No data available in table",
                "info": "Showing _START_ to _END_ of _TOTAL_ records",
                "infoEmpty": "No records found",
                "infoFiltered": "(filtered1 from _MAX_ total records)",
                "lengthMenu": "Show _MENU_",
                "search": "Search:",
                "zeroRecords": "No matching records found",
                "paginate": {
                    "previous":"Prev",
                    "next": "Next",
                    "last": "Last",
                    "first": "First"
                }
            },

            // Or you can use remote translation file
            //"language": {
            //   url: '//cdn.datatables.net/plug-ins/3cfcc339e89/i18n/Portuguese.json'
            //},

            // Uncomment below line("dom" parameter) to fix the dropdown overflow issue in the datatable cells. The default datatable layout
            // setup uses scrollable div(table-scrollable) with overflow:auto to enable vertical scroll(see: assets/global/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js). 
            // So when dropdowns used the scrollable div should be removed. 
            // "dom": "<'row'<'col-md-6 col-sm-12'l><'col-md-6 col-sm-12'f>r>t<'row'<'col-md-5 col-sm-12'i><'col-md-7 col-sm-12'p>>",

            "bStateSave": true, // save datatable state(pagination, sort, etc) in cookie.

            "lengthMenu": [
                [5, 15, 20, -1],
                [5, 15, 20, "All"] // change per page values here
            ],
            // set the initial value
            "pageLength": 5,            
            "pagingType": "bootstrap_full_number",
            "columnDefs": [
                {  // set default column settings
                    'orderable': true,
                    'targets': [0]
                }, 
                {
                    "searchable": true,
                    "targets": [0]
                },
                {
                    "className": "dt-right", 
                    //"targets": [2]
                }
            ],
            "order": [
                [0, "asc"]
            ] // set first column as a default sort by asc
        });
        var tableWrapper = $("#sample_1_wrapper");
        var nEditing = null;
        var nNew = false;

        $('#sample_editable_1_new').click(function (e) {
            e.preventDefault();
            $('div.form-group.has-warning').removeClass('has-warning');
            $("#username").attr("value", "");
            $("#username").removeAttr("disabled");
            $("#realname").attr("value", "");
            $("#mail").attr("value", "");
            $("#company").attr("value", "");
            $("#privilege").attr("value", "");
            $("#state").attr("value", "");
            layer.open({
                  type: 1,
                  title: '新增用户',
                  shadeClose: true, //点击遮罩关闭层
                  area : ['800px' , '520px'],
                  content: $("#layer")
            })
        });

        table.on('click', '.delete', function (e) {
            e.preventDefault();

            if (confirm("确定删除该账户 ?") == true) {
                var nRow = $(this).parents('tr')[0];
                var aData = oTable.fnGetData(nRow);
                var username = $(aData[0]).html();
                $.ajax({
                    type: "POST",
                    url: "/del_user",
                    data: 'username=' + username,
                    success: function(data) {
                        if (eval('(' + data + ')').status == 0) {
                            window.location.reload()                          
                        } else {
                            layer.msg(eval('(' + data + ')').message);
                        }
                    }
                });
            }

        });

        table.on('click', '.edit', function (e) {
            e.preventDefault();
            $('div.form-group.has-warning').removeClass('has-warning');
            var nRow = $(this).parents('tr')[0];
            var aData = oTable.fnGetData(nRow);
            $("#userid").attr("value", $(aData[0]).attr("data"));
            $("#username").attr("value", $(aData[0]).html());
            $("#username").attr("disabled", "");
            $("#realname").attr("value", aData[1]);
            $("#mail").attr("value", $(aData[2]).html());
            $("#company").attr("value", aData[3]);
            var privilege = $(aData[4]).attr('data');
            $("#privilege").val(privilege);
            var state = $(aData[5]).attr('data');
            $("#state" + state).prop("checked", "checked");


            layer.open({
                  type: 1,
                  title: '修改用户',
                  shadeClose: true, //点击遮罩关闭层
                  area : ['800px' , '520px'],
                  content: $("#layer")
            })
            
        });

        $('#layer').submit(function (e) {
            e.preventDefault();
            var userid = $('#userid').val();
            var username = $('#username').val();
            var mail = $('#mail').val();
            var realname = $('#realname').val();
            var company = $('#company').val();
            var privilege = $('#privilege').val();
            var state = $("[name='state']:checked").val();
            var dataString = 'id=' + userid +'&username=' + username + '&mail=' + mail + '&realname=' + realname + '&company=' + company + '&privilege=' + privilege + '&state=' + state

            function isValidEmail(emailAddress) {
                var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                return pattern.test(emailAddress);
            };

            function waring(addition, cont) {
                if (addition) {
                    $( $('#'+cont).parents('div')[1] ).removeClass('has-warning');
                } else {
                    $( $('#'+cont).parents('div')[1] ).addClass('has-warning');
                }
            }

            waring(isValidEmail(username), 'username');
            waring(isValidEmail(mail), 'mail');
            waring(realname.length > 1, 'realname');
            waring(company.length > 1, 'company');


            if (isValidEmail(username) && isValidEmail(mail) && (realname.length > 1) && (company.length > 1)) {
                $.ajax({
                    type: "POST",
                    url: "/edit_user",
                    data: dataString,
                    success: function(data) {
                        if (eval('(' + data + ')').status == 0) {
                            window.location.reload()
                        } else {
                            layer.msg(eval('(' + data + ')').message);
                        }
                    }
                });
            }
        });
    }

    return {

        //main function to initiate the module
        init: function () {
            handleTable();
        }

    };

}();


$(document).ready(function() {
    TableDatatablesEditable.init();
});
