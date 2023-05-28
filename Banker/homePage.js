function apply(event) {
  const managereports = document.getElementById("managereports");
  const sett = document.getElementById("settings");
  const manageloans = document.getElementById("manageloans");
  const managecardapps = document.getElementById("managecardapps");
  const personalInfo = document.getElementById("personalInfo");
  const passSettings = document.getElementById("passSettings");
  const pendingreports = document.getElementById("pendingreports");
  const issueresolution = document.getElementById("issueresolution");
  const openaccount = document.getElementById("openaccount");
  const closeaccount = document.getElementById("closeaccount");
  const managebankaccounts = document.getElementById("managebankaccounts");
  const notf = document.getElementById("notf");
  const title = document.getElementById("pageTitle");
  const arr = [
    managecardapps,
    managereports,
    sett,
    manageloans,
    notf,
    passSettings,
    personalInfo,
    managebankaccounts,
    pendingreports,
    issueresolution,
    openaccount,
    closeaccount,
  ];
  const arr2 = [
    "-notf",
    "-personalInfo",
    "-passSettings",
    "-addbanker",
    "-removebanker",
    "-pendingreports",
    "-issueresolution",
  ];
  event.preventDefault();
  console.log(event.target.id);
  const prop = document.getElementById((event.target.id + "").substring(1))
    .style.display;
  if (prop === "" || prop === "none") {
    if (event.target.id != "-c1")
      document.getElementById(
        (event.target.id + "").substring(1)
      ).style.display = "block";
    else
      document.getElementById(
        (event.target.id + "").substring(1)
      ).style.display = "flex";
    arr.forEach((e) => {
      console.log(e.id);
      if ("-" + e.id != event.target.id) e.style.display = "none";
      if (
        event.target.id == "-personalInfo" ||
        event.target.id == "-passSettings"
      )
        sett.style.display = "block";
      if (
        event.target.id == "-issueresolution" ||
        event.target.id == "-pendingreports"
      )
        managereports.style.display = "block";
      if (
        event.target.id == "-openaccount" ||
        event.target.id == "-closeaccount"
      )
        managebankaccounts.style.display = "block";
    });
    if (!arr2.includes(event.target.id))
      title.textContent = document.getElementById(event.target.id).textContent;
    else if (event.target.id == "-notf") title.textContent = "Notifications";
  }
}
