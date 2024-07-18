<script type="text/javascript">
document.write
alert("50% OFF of ALL ITEMS!")
x=prompt("Enter your name", )
document.write(" Welcome to our bookstore, "+x )

</script>
var FormStuff = {
  
  function check() {
  document.getElementById("M").checked = true;
}
function uncheck() {
  document.getElementById("M").checked = false;
}

function myFunction() {
  var z = document.getElementById("myCheck");
  z.checked = true;
}

  init: function() {
    this.applyConditionalRequired();
    this.bindUIActions();
  },
  
  bindUIActions: function() {
    $("input[type='radio'], input[type='checkbox']").on("change", this.applyConditionalRequired);
  },
  
  applyConditionalRequired: function() {
    
    $(".require-if-active").each(function() {
      var el = $(this);
      if ($(el.data("require-pair")).is(":checked")) {
        el.prop("required", true);
      } else {
        el.prop("required", false);
      }
    });
    
  }
  
};

FormStuff.init();