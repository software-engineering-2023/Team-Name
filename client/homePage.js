function apply(event) {
  const c1 = document.getElementById("c1");
  const c2 = document.getElementById("c2");
  const sett = document.getElementById("settings");
  const transc = document.getElementById("transc");
  const loanApp = document.getElementById("loanApp");
  const openAcc = document.getElementById("openAcc");
  const cardApp = document.getElementById("cardApp");
  const report = document.getElementById("reporting");
  const pay = document.getElementById("pay");
  const personalInfo = document.getElementById("personalInfo");
  const passSettings = document.getElementById("passSettings");
  const notfSettings = document.getElementById("notfSettings");
  const notf = document.getElementById("notf");
  const internal = document.getElementById("internal");
  const domestic = document.getElementById("domestic");
  const international = document.getElementById("international");
  const bills = document.getElementById("bills");
  const bankaccinfo = document.getElementById("bankaccinfo");
  const cardsinfo = document.getElementById("cardsinfo");
  const bankacctran = document.getElementById("bankacctran");
  const redeempoints = document.getElementById("redeempoints");
  const cardtran = document.getElementById("cardtran");
  const donations = document.getElementById("donations");
  const specificnotf = document.getElementById("specificnotf");
  const announcments = document.getElementById("announcments");
  const cardrprt = document.getElementById("cardForm");
  const techrprt = document.getElementById("technicalForm");
  const title = document.getElementById("pageTitle");
  const arr = [
    c1,
    c2,
    sett,
    transc,
    report,
    openAcc,
    cardApp,
    loanApp,
    pay,
    notf,
    cardrprt,
    techrprt,
    passSettings,
    notfSettings,
    personalInfo,
    bills,
    donations,
    internal,
    domestic,
    international,
    bankacctran,
    cardtran,
    bankaccinfo,
    cardsinfo,
    redeempoints,
    specificnotf,
    announcments,
  ];
  const arr2 = [
    "-notf",
    "-bills",
    "-donations",
    "-personalInfo",
    "-passSettings",
    "-notfSettings",
    "-cardForm",
    "-technicalForm",
    "-internal",
    "-domestic",
    "-international",
    "-bankacctran",
    "-cardtran",
    "-bankaccinfo",
    "-cardsinfo",
    "-redeempoints",
  ];
  //&& event.target.id != "-redeempoints"
  event.preventDefault();
  console.log(event.target.id);
  const prop = document.getElementById((event.target.id + "").substring(1))
    .style.display;
  if (prop === "" || prop === "none") {
    if (
      event.target.id != "-c1" &&
      event.target.id != "-cardForm" &&
      event.target.id != "-technicalForm" &&
      event.target.id != "-bankacctran" &&
      event.target.id != "-cardtran" &&
      event.target.id != "-cardsinfo" &&
      event.target.id != "-redeempoints" &&
      event.target.id != "-specificnotf" &&
      event.target.id != "-announcments"
    )
      document.getElementById(
        (event.target.id + "").substring(1)
      ).style.display = "block";
    else
      document.getElementById(
        (event.target.id + "").substring(1)
      ).style.display = "flex";
    arr.forEach((e) => {
      if ("-" + e.id != event.target.id) e.style.display = "none";
      if (event.target.id == "-cardForm" || event.target.id == "-technicalForm")
        report.style.display = "block";
      if (
        event.target.id == "-notfSettings" ||
        event.target.id == "-personalInfo" ||
        event.target.id == "-passSettings"
      )
        sett.style.display = "block";
      if (event.target.id == "-bills" || event.target.id == "-donations")
        pay.style.display = "block";
      if (
        event.target.id == "-internal" ||
        event.target.id == "-domestic" ||
        event.target.id == "-international"
      )
        c2.style.display = "block";
      if (event.target.id == "-bankacctran" || event.target.id == "-cardtran")
        transc.style.display = "block";
      if (
        event.target.id == "-bankaccinfo" ||
        event.target.id == "-cardsinfo" ||
        event.target.id == "-redeempoints"
      )
        c1.style.display = "block";
      if (
        event.target.id == "-specificnotf" ||
        event.target.id == "-announcments"
      )
        notf.style.display = "block";
    });
    if (!arr2.includes(event.target.id))
      title.textContent = document.getElementById(event.target.id).textContent;
    else if (event.target.id == "-notf")
      title.textContent = "Notifications and Announcements";
  }
}

function payBill(event) {
  event.preventDefault();
  const selElement = document.querySelector(".billSelect");
  console.log(selElement.options + " here");
  const selOption = selElement.options[selElement.selectedIndex].value;
  let id = "";
  switch (selOption.split(" ")[0].toLowerCase()) {
    case "option1":
      id = "gas";
      break;
    case "option2":
      id = "water";
      break;
    case "option3":
      id = "phone";
      break;
    case "option4":
      id = "electricity";
      break;
  }
  document.getElementById(id).style.display = "none";
}
