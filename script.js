    // SearchBar event:
    $("#myinput").keyup(function() {
        // Text value of SearchBar
        var val = $.trim(this.value);
        if (val === "")
            $('img').show();
        else {
            $('img').hide();
            $("img[alt*=" + val + "]").show();
        }
    });