$(function() {
    $("input").jqBootstrapValidation({
        preventSubmit: !0,
        submitSuccess: function(e, s) {
            s.preventDefault();
            var t = $("input#name").val(),
                a = $("input#email").val(),
                n = $("input#company").val(),
                r = t;
            r.indexOf(" ") >= 0 && (r = t.split(" ").slice(0, -1).join(" ")), $.ajax({
                url: "./bin/login_request.php",
                type: "POST",
                data: {
                    name: t,
                    email: a,
                    company: n
                },
                cache: !1,
                success: function() {
                    $("#success").html("<div class='alert alert-success'>"), $("#success > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-success").append("<strong>Your request has been sent. </strong>"), $("#success > .alert-success").slideDown(400), $("#requestForm").trigger("reset")
                },
                error: function() {
                    $("#success").html("<div class='alert alert-danger'>"), $("#success > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>"), $("#success > .alert-danger").append("<strong>Sorry " + r + " it seems that my mail server is not responding...</strong> Could you please email me directly to <a href='mailto:me@example.com?Subject=Message_Me from myprogrammingblog.com'>me@example.com</a> ? Sorry for the inconvenience!"), $("#success > .alert-danger").append("</div>"), $("#requestForm").trigger("reset")
                }
            })
        },
        filter: function() {
            return $(this).is(":visible")
        }
    }), $('a[data-toggle="tab"]').click(function(e) {
        e.preventDefault(), $(this).tab("show")
    })
}), $("#name").focus(function() {
    $("#success").html("")
});
