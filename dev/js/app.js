new Calendar({
  element: $('.daterange--single'),
  current_date: new Date('June 15, 2015')
});
  
new Calendar({
  element: $('.daterange--double'),
  earliest_date: moment(new Date('January 1, 2000')).startOf('day'),
  latest_date: moment(new Date()).endOf('day'),
  start_date: new Date('May 1, 2015'),
  end_date: new Date('May 31, 2015'),
  callback: function() {
    var start = moment(this.start_date).format('ll'),
        end = moment(this.end_date).format('ll');
    
    console.log('Start Date: '+ start +'\nEnd Date: '+ end);
  }
});