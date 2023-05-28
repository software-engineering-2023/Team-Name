function apply(event) {
  const c1 = document.getElementById("c1");
  const managereports = document.getElementById("managereports");
  const sett = document.getElementById("settings");
  const managebanker = document.getElementById("managebanker");
  const addbanker = document.getElementById("addbanker");
  const removebanker = document.getElementById("removebanker");
  const personalInfo = document.getElementById("personalInfo");
  const passSettings = document.getElementById("passSettings");
  const pendingreports = document.getElementById("pendingreports");
  const issueresolution = document.getElementById("issueresolution");
  const createAnnouncement = document.getElementById("createAnnouncement");
  const notf = document.getElementById("notf");
  const title = document.getElementById("pageTitle");
  const arr = [
    c1,
    managereports,
    sett,
    managebanker,
    notf,
    passSettings,
    personalInfo,
    createAnnouncement,
    addbanker,
    removebanker,
    pendingreports,
    issueresolution,
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
      if (event.target.id == "-addbanker" || event.target.id == "-removebanker")
        managebanker.style.display = "block";
      if (
        event.target.id == "-issueresolution" ||
        event.target.id == "-pendingreports"
      )
        managereports.style.display = "block";
    });
    if (!arr2.includes(event.target.id))
      title.textContent = document.getElementById(event.target.id).textContent;
    else if (event.target.id == "-notf") title.textContent = "Notifications";
    console.log("fuck");
  }
}
