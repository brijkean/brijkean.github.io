//add smooth scrolling to links
$(document).ready(function() {
    $("a").on('click', function(event) {
        //makes sure this.Link has value before overriding default
        if (this.Link !=="") {
            //prevent default anchor click behavior
            event.preventDefault();
            //stores link
            var Link = this.Link;

            //use jquery animate() method to add smooth scroll
            //optional number (2000) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(Link).offset().top
            },2000, function(){
                //add Link # to URL when done scrolling (default click behavior)
                window.location.Link = Link;
            });
        } //end of if
    });
});

//open and close the popup-form
function openForm() {
    document.getElementById("Form").style.display = "block";
}
function closeForm() {
    document.getElementById("Form").style.display = "none";
    this.Close();
}