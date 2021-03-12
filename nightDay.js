function nightDayHandler(self) {
    var target = document.querySelector('body');
    var detail = document.querySelector('#detail');
      if (self.value === 'Day') {
        target.style.backgroundColor = 'white';
        detail.style.color = 'black';
        self.value = 'Night'
      } else {
        target.style.backgroundColor = '#4a4a4a';
        detail.style.color = 'white';
        self.value = 'Day'
      }
}