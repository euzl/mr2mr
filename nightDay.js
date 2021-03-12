function nightDayHandler(self) {
    var target = document.querySelector('body');
    var detail = document.querySelector('.detail');
      if (self.value === 'Day') {
        target.style.backgroundColor = 'white';
        if(detail !== null) detail.style.color = 'black';
        self.value = 'Night'
      } else {
        target.style.backgroundColor = '#4a4a4a';
        if(detail !== null) detail.style.color = 'white';
        self.value = 'Day'
      }
}