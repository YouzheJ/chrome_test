console.log('start to inside data');

var subject = $('#subject').val();
console.log(subject)
$('#subject').val(subject.replace('#2017', ''));
$('#subject').trigger('change');