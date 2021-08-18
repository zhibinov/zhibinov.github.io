// $( ".b-main__input-cal" ).datepicker({ dateFormat: 'mm/dd/yy' }).datepicker("setDate", new Date());
// $( ".b-main__input-cal2" ).datepicker({ dateFormat: 'mm/dd/yy' }).datepicker("setDate", 2); 

const d1 = $( ".b-main__input-cal" ).datepicker({
	dateFormat: 'mm/dd/yy', 
	onSelect: function(dateText){
  	console.log(dateText)
    const setRes = new Date(dateText);
    setRes.setDate(setRes.getDate()+2)
    
    
    console.log(setRes);
    $( ".b-main__input-cal2" ).datepicker("setDate", setRes);
  }
})
const d2 = $( ".b-main__input-cal2" ).datepicker({ dateFormat: 'mm/dd/yy' }).datepicker("setDate", 2);

d1.datepicker("setDate", new Date()); 
/* 

.datepicker("setDate", 2); */


var elements = document.getElementsByClassName('b-main__time');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '00:00',
  });
}