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
    btn.addEventListener("click", function(e){
      if (count < 4) {count=count+1;} 

      else{ return}
      
      if (!btn.classList.contains('booked')) { btn.classList.add('booked')}
      else{alert("stopp")}
    


      const totalAmount = count * ticketPrice;
    
      const totalAmountContainer = document.getElementById('total-price');
      totalAmountContainer.innerText=totalAmount;

      const remainingSeat=seatAvailable-count;
      const remainingSeatContainer=document.getElementById('available-seat');
      remainingSeatContainer.innerText=remainingSeat;

    const btnText=btn.innerText
    const seatClass=document.getElementById('seat-class');

    const li=document.createElement('li');
    li.innerText=[btnText,' Economy ', 550];
    seatClass.appendChild(li);
    









setInnerText('seat-count', count);

    })
}

function setInnerText(id, value){
      document.getElementById(id).innerText=value;

  }
