function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }



  
  const allBtn=document.getElementsByClassName('kbd');

    let count=0;
    const ticketPrice=550;
    const seatAvailable=28;

  for(const btn of allBtn){
    btn.addEventListener("click", function(){
      
      if (count < 4) {count=count+1;}
      else{
        alert ('You can not select more than 4 seat');}
      
      if (!btn.classList.contains('booked')) { btn.classList.add('booked');}
    


      const totalAmount = count * ticketPrice;
      // console.log(totalAmount);
 
      const totalAmountContainer = document.getElementById('total-price');
      totalAmountContainer.innerText=totalAmount;

      const remainingSeat=seatAvailable-count;
      // console.log(remainingSeat);
      const remainingSeatContainer=document.getElementById('available-seat');
      remainingSeatContainer.innerText=remainingSeat;








setInnerText('seat-count', count);

    })
}

function setInnerText(id, value){
      document.getElementById(id).innerText=value;

  }