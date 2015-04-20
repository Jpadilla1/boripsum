$(document).ready(function(){
    $('#gen-btn').click(function(){
        $('#boripsum').empty();
        var url = "https://boripsum.herokuapp.com/ipsum/";
        var paragraphs = $('#paragraphs').val();
        if (paragraphs) {
            url += "?paragraphs=" + paragraphs;
        }
        $.get(url, function(data) {
            data.forEach(function(d){
                $('#boripsum').append($("<p></p>").text(d));
            });
        });
    });
});