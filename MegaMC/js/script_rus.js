$( function() {
    $( ".b-main__input-cal" ).datepicker({ dateFormat: 'mm/dd/yy' }).datepicker("setDate", new Date()); 
} );

$( function() {
    $( ".b-main__input-cal2" ).datepicker({ dateFormat: 'mm/dd/yy' }).datepicker("setDate", 2); 
} );

var elements = document.getElementsByClassName('b-main__time');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '00:00',
  });
}