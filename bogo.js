const prices = {
    1: "$10.00 USD",
    2: "$18.00 USD",
    3: "$24.00 USD",
  };
  
  function selectOption(num) {
    document.querySelectorAll(".option")
      .forEach(o => o.classList.remove("selected"));
  
    document.querySelectorAll("[id^='Unit']")
      .forEach(d => (d.style.display = "none"));
  
    document.getElementById("box" + num).classList.add("selected");
    document.getElementById("opt" + num).checked = true;
    document.getElementById("totalPrice").innerText = prices[num];
    document.getElementById("Unit" + num + "Options").style.display = "block";
  }
  
  selectOption(2);
  