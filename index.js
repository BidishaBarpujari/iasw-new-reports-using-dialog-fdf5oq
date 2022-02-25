// Import stylesheets
import './style.css';

const dashboardBody = document.getElementById("dashboardBody");

/* nav menu code */
const navMenu = document.getElementById("navMenu");

if (navMenu) {
  navMenu.addEventListener("click", () => openNavMenu() );
}

function openNavMenu() {
  var navDrawer = document.getElementById("navDrawer");

  if (navDrawer) {
    navDrawer.setAttribute("open","true");
  }
}
/* end nav menu code */

/* reports nav item */

const navReports = document.getElementById("navReports");
const reportsBodytabOne = document.getElementById("reportsBodytabOne");
const reportsBodytabTwo = document.getElementById("reportsBodytabTwo");
const reportsBodytabThree = document.getElementById("reportsBodytabThree");
const reportsBodytabFour = document.getElementById("reportsBodytabFour");
const reportsLeft = document.getElementById("reportsLeft");
const reportsHeader = document.getElementById("reportsHeader");
const navFirstHalf = document.getElementById("navFirstHalf");
const jobsPanel = document.getElementById("jobsPanel");

if (navReports) {
  navReports.addEventListener("click", () => showReportsPage() );
}

if (navFirstHalf) {
  navFirstHalf.addEventListener("click", () => showFirstHalf() );
}

function showReportsPage() {

  // hide nave drawer
  if (navDrawer) {
    navDrawer.setAttribute("open","false");

    if (dashboardBody) {
      dashboardBody.classList.add("hidden");
    }

  }

  // show reports body
  if (reportsBodytabOne) {
    reportsBodytabOne.classList.remove("hidden");
  }

  // show reports left menu
  if (reportsLeft) {
    reportsLeft.classList.remove("hidden");
  }

  // show reports header
  if (reportsHeader) {
    reportsHeader.classList.remove("hidden");
  }

  styleStatus();
  addStepOneRadioEvents();
  addStepTwoEvents();
  addStepThreeRadioEvents();

  // close expansion panel
  if (jobsPanel) {
    jobsPanel.open = false;
  }
}

  // navigate directly to first half
  function showFirstHalf() {
    //show the reports page
    showReportsPage();

    // open the dialog
    openNewJobDialog();

    // change the radio button value
    var trackJobRadioButton = document.getElementById("trackJob");

    if (trackJobRadioButton) {
      trackJobRadioButton.checked = true;
      stepOneRadioChange();

      var firstHalfExpansion = document.getElementById("firstHalfExpansion");

      if (firstHalfExpansion) {
        firstHalfExpansion.open = true;

        var firstHalfAllCheckbox = document.getElementById("firstHalfAllCheckbox");

        if (firstHalfAllCheckbox) {
          firstHalfAllCheckbox.checked = true;
        }

        // check all boxes
        var checkboxes = document.querySelectorAll("#firstHalfSettlementBoxes input[type='checkbox']");

        for (var i =0; i < checkboxes.length; i++) {
          checkboxes[i].checked = true;
        }
      }
    }
  }
/* end reports nav item */

/* dashboard nav item */

const navDashboard = document.getElementById("navDashboard");

if (navDashboard) {
  navDashboard.addEventListener("click", () => showDashboard() );
}

function showDashboard() {
  // close nav drawer
  if (navDrawer) {
    navDrawer.setAttribute("open","false");
  }

  // show dashboard body
  if (dashboardBody) {
    dashboardBody.classList.remove("hidden");
  }

  // hide reports body
  if (reportsBodytabOne) {
    reportsBodytabOne.classList.add("hidden");
  }

  if (reportsBodytabTwo) {
    reportsBodytabTwo.classList.add("hidden");
  }

  if (reportsBodytabThree) {
    reportsBodytabThree.classList.add("hidden");
  }

  if (reportsBodytabFour) {
    reportsBodytabFour.classList.add("hidden");
  }

  // hide reports left menu
  if (reportsLeft) {
    reportsLeft.classList.add("hidden");
  }

  // hide reports header
  if (reportsHeader) {
    reportsHeader.classList.add("hidden");
  }

  
}
/* end dashboard nav item */

/* tab navigation */
  const tabOne = document.querySelector("#tabOne");
  const tabTwo = document.querySelector("#tabTwo");
  const tabThree = document.querySelector("#tabThree");
  const tabFour = document.querySelector("#tabFour");

  // add event listeners
  if (tabOne) {
    tabOne.addEventListener("click", () => switchTabs(tabOne));
  }

  if (tabTwo) {
    tabTwo.addEventListener("click", () => switchTabs(tabTwo));
  }

  if (tabThree) {
    tabThree.addEventListener("click", () =>switchTabs(tabThree));
  }

  if (tabFour) {
    tabFour.addEventListener("click", () => switchTabs(tabFour));
  }

  function switchTabs(tab) {
    var newTab = tab.id;
    var targetTab;

    var allTabs = [tabOne, tabTwo, tabThree, tabFour];
    for (var i = 0; i < allTabs.length; i++) {
      if (allTabs[i].id === newTab) {
        targetTab = document.querySelector("#reportsBody"+allTabs[i].id);
        if (targetTab) {
          targetTab.classList.remove("hidden");
        }
      } else {
        targetTab = document.querySelector("#reportsBody"+allTabs[i].id);
        if (targetTab) {
          targetTab.classList.add("hidden");
        }
      }
    }
  }

/* end tab navigation */

/* completed jobs table */
const jobsTable = document.querySelector("#completed-jobs-table");
const jobDetailsDialogTemplate = document.getElementById("jobDetailsDialog");

jobsTable.data = [
  {
    Id: 1,
    jobno: "671915",
    jobid: "CA321",
    descr: "Commercial Review Card",
    subTime: "09/28/2020 01:45 PM",
    endTime: "",
    elapsed: "",
    jobStatus: "Running",
    spoolFile: "CA321.PDF",
    user: "chris.drake",
    fullDesc: "CA321 Commercial Review Card"
  },
  {
    Id: 2,
    jobno: "671914",
    jobid: "CA320",
    descr: "Residential Review Card",
    subTime: "09/28/2020 01:40 PM",
    endTime: "09/28/2020 01:40 PM",
    elapsed: "00:00:13",
    jobStatus: "Done",
    spoolFile: "CA320.PDF",
    user: "chris.drake",
    fullDesc: "CA320 Residential Review Card"
  },
  {
    Id: 3,
    jobno: "671913",
    jobid: "CA320",
    descr: "Residential Review Card",
    subTime: "09/28/2020 01:30 PM",
    endTime: "09/28/2020 01:30 PM",
    elapsed: "00:00:01",
    jobStatus: "Failed",
    spoolFile: "CA320.PDF",
    user: "chris.drake",
    fullDesc: "CA320 Residential Review Card"
  },
  {
    Id: 4,
    jobno: "671912",
    jobid: "TX170",
    descr: "Daily Balancing Report",
    subTime: "10/05/2020 05:30 PM",
    endTime: "",
    elapsed: "",
    jobStatus: "Scheduled",
    spoolFile: "TX170.PDF",
    user: "ash.williams",
    fullDesc: "TX170 Daily Balancing Report"
  }
];

jobsTable.columnConfigurations = [
  { property: "jobno", header: "Job #", cellStyle: { width: "60px" } },
  //{ property: "jobid", header: "Job ID", cellStyle: { width: "60px" } },
  //{ property: "descr", header: "Job Name", cellStyle: { width: "200px" } },
  { property: "fullDesc", header: "Job ID & Name", cellStyle: {width: "220px" } },
  { property: "subTime", header: "Submitted Time", cellStyle: {width: "140px" } },
  { property: "endTime", header: "End Time", cellStyle: {width: "140px"} },
  { property: "elapsed", header: "Elapsed" },
  { property: "jobStatus", header: "Job Status" },
  { property: "spoolFile", header: "Spool File" },
  { property: "user", header: "User" },

  {
    template: getHoverActions,
    align: "center",
    cellStyle: { width: "150px" }
  }
];

function createHoverTemplateFromData(rowIndex, prop) {
  const div = document.createElement("div");

  var icons = ["file_download", "wysiwyg", "more_vert"];
  for (var i = 0; i < icons.length; i++) {
    var tcwMenu = document.createElement("tcw-menu");
    var iconButton = document.createElement("tcw-icon-button");
    var button = document.createElement("button");
    var tooltip = document.createElement("tcw-tooltip");

    button.classList.add("material-icons", "table-icons");
    iconButton.classList.add("hover");
    button.innerText = icons[i];
    iconButton.appendChild(button);

    if (icons[i] === "wysiwyg") {
      tooltip.innerText = "View Job Details";
      iconButton.appendChild(tooltip);
    }

    if (icons[i] === "file_download") {
      tooltip.innerText = "Download output file";
      iconButton.appendChild(tooltip);
    }

    if (icons[i] === "more_vert") {
      tcwMenu.setAttribute("id","jobMoreButton");
      // add menu options
      tcwMenu.options = [
        { value: "print", label: "Print" },
        { value: "qp", label: "Quick Print" },
        { value: "rerun", label: "Rerun Job" },
        { value: "delete", label: "Delete" }
      ];
      tcwMenu.appendChild(iconButton);
      div.appendChild(tcwMenu);
    } else {
      if (icons[i] === "wysiwyg") {
        iconButton.addEventListener("click", () => openJobDetailsDialog() );
      }
      div.appendChild(iconButton);
    }
  }

  return div;
}

function getHoverActions(rowIndex) {
  return createHoverTemplateFromData(rowIndex, "");
}

  //style job status column 
  function styleStatus() {
    var cells = document.getElementsByClassName("tyl-table-cell__container-text");
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("table-alert-icons");
    const failedIcon = document.createElement("i");
    failedIcon.classList.add("tyler-icons");
    failedIcon.setAttribute("style","font-size: 14px;");
    failedIcon.innerText = "error"; 

    const runningBadge = document.createElement("tcw-badge");
    runningBadge.setAttribute("theme","success");
    runningBadge.innerText = "Running";

    const failedBadge = document.createElement("tcw-badge");
    failedBadge.setAttribute("theme","danger");
    failedBadge.innerText = "Failed";

    for (var i = 0; i < cells.length; i++) {
      var cellValue = cells[i].innerText;

      if (cellValue === "Running") {
        cells[i].innerText = "";
        cells[i].appendChild(runningBadge);
      } else if (cellValue === "Failed") {
        cells[i].innerText = "";
        cells[i].appendChild(failedBadge);
      } else if (cellValue === "Submitted" || cellValue === "Scheduled") {
        cells[i].setAttribute("style","font-style: italic; color: rgba(0, 0, 0, 0.54)");
      }

    }
  };

  styleStatus();

var selectToolbar = document.getElementById("select-toolbar");
var tableHead = document.getElementById("table-head");
var rowIcons = document.getElementsByClassName("hover");
var extraJobFiles = document.getElementById("extraJobFiles");

function updateSelectToolbar() {
  const isSelected = jobsTable.getSelectedRows().length;
  const numRecordsLabel = document.querySelector("#num-selected-records");
  var selectedRows = jobsTable.getSelectedRows();

  if (isSelected && isSelected > 1) {
    selectToolbar.classList.add("show");
    tableHead.classList.add("hide");

    for (var i = 0; i < rowIcons.length; i++) {
      rowIcons[i].classList.add("hide");
    }

    if (isSelected === 1) {
      numRecordsLabel.textContent =
        jobsTable.getSelectedRows().length + " record";
    } else {
      numRecordsLabel.textContent =
        jobsTable.getSelectedRows().length + " records";
    }

    // hide extra files card since more than 1 record is selected
    if (extraJobFiles) {
      extraJobFiles.classList.add("hidden");
    }

  } else {
    selectToolbar.classList.remove("show");
    tableHead.classList.remove("hide");

    for (var i = 0; i < rowIcons.length; i++) {
      rowIcons[i].classList.remove("hide");
    }

    // no records selected so hide the extra files card
    if (isSelected === 0) {
      if(extraJobFiles) {
        extraJobFiles.classList.add("hidden");
      }
    } else {
      // only 1 row is selected. Check to see if it is 671914. If so, display the extra files 
      var selectedRec = selectedRows[0];
      var jobNo = selectedRec["jobno"];

      if (jobNo === "671914") {
        if (extraJobFiles) {
          extraJobFiles.classList.remove("hidden");
        }
      }

    }
  }

} 

jobsTable.addEventListener("tcw-table-select", updateSelectToolbar);
jobsTable.addEventListener("tcw-table-select-all", updateSelectToolbar);

  //job details dialog
  function openJobDetailsDialog() {
    const jobDetailsDialogElement = document.createElement("tcw-dialog");

    const jobDetailsContent = jobDetailsDialogTemplate.content.cloneNode(true);
    jobDetailsDialogElement.appendChild(jobDetailsContent);
  
    jobDetailsDialogElement.addEventListener("tcw-dialog-close", evt => (jobDetailsDialogElement.open = false));
  
    jobDetailsDialogElement.open = true;

    var jobDetailsCloseButton = jobDetailsDialogElement.querySelector("#jobDetailsCloseButton");
    
    if (jobDetailsCloseButton) {
      jobDetailsCloseButton.addEventListener("click", () => (jobDetailsDialogElement.open = false));
    }
  }

/* end completed jobs table */

/* schedules table */
  const schedulesTable = document.querySelector("#schedule-table");
  var scheduleTableHead = document.getElementById("schedule-table-head");
  
  schedulesTable.data = [
    { Id: 1, jobid: "TX170", jobname: "", user: "arya.stark", schedule: "Daily", nextRun: "10/4/2020 9:00 PM" },
    { Id: 2, jobid: "CA402", jobname: "Residential Batch Calc", user: "james.holden", schedule: "Weekly on Fridays", nextRun: "10/9/2020 6:00 PM" }
  ];
  
  schedulesTable.columnConfigurations = [
    { property: "jobid", header: "Job" },
    { property: "schedule", header: "Scheduled" },
    { property: "nextRun", header: "Next Run" },
    { property: "user", header: "User" },
    {
      template: getScheduleTableActions,
      align: "center",
      cellStyle: { width: "150px" }
    }
  ];

  function createScheduleTableActions(rowIndex, prop){
    const div = document.createElement("div");
    
    
    var icons = ["delete", "wysiwyg", "more_vert"];
    
    for (var i = 0; i < icons.length; i++) {
      var iconButton = document.createElement("tcw-icon-button");
      var button = document.createElement("button");
      var tooltip = document.createElement("tcw-tooltip");
      var tcwMenu = document.createElement("tcw-menu");

      button.classList.add("material-icons", "table-icons");
      iconButton.classList.add("hover");
      button.innerText = icons[i];
      iconButton.appendChild(button);

      if (icons[i] === "delete") {
        tooltip.innerText = "Delete scheduled job";
        iconButton.appendChild(tooltip);
      }

      if (icons[i] === "wysiwyg") {
        tooltip.innerText = "View schedule details";
        iconButton.appendChild(tooltip);
      }

    if (icons[i] === "more_vert") {
      tcwMenu.setAttribute("id","scheduleMoreButton");
      // add menu options
      tcwMenu.options = [
        { value: "hold", label: "Hold Job" }
      ];
      tcwMenu.appendChild(iconButton);
      div.appendChild(tcwMenu);
    } else {
      div.appendChild(iconButton);
    }

      
    }
    
    return div;
  }
  
  function getScheduleTableActions(rowIndex) {
    return createScheduleTableActions(rowIndex, "");
  }
  
  var scheduleSelectToolbar = document.getElementById("schedule-select-toolbar");

  function updateScheduleSelectToolbar() {
    const isSelected = schedulesTable.getSelectedRows().length;
    const numRecordsLabel = document.querySelector("#num-schedule-selected-records");
    var selectedRows = schedulesTable.getSelectedRows();
  
    if (isSelected && isSelected > 1) {
      scheduleSelectToolbar.classList.add("show");
      scheduleTableHead.classList.add("hide");
  
      for (var i = 0; i < rowIcons.length; i++) {
        rowIcons[i].classList.add("hide");
      }
  
      if (isSelected === 1) {
        numRecordsLabel.textContent =
          schedulesTable.getSelectedRows().length + " record";
      } else {
        numRecordsLabel.textContent =
          schedulesTable.getSelectedRows().length + " records";
      }
  
    } else {
      scheduleSelectToolbar.classList.remove("show");
      scheduleTableHead.classList.remove("hide");
  
      for (var i = 0; i < rowIcons.length; i++) {
        rowIcons[i].classList.remove("hide");
      }

    }
  
  }

  schedulesTable.addEventListener("tcw-table-select", updateScheduleSelectToolbar);
  schedulesTable.addEventListener("tcw-table-select-all", updateScheduleSelectToolbar);
/* end schedules table */

/* tracks table */
  const tracksTable = document.querySelector("#track-table");
  var trackTableHead = document.getElementById("track-table-head");
  
  tracksTable.data = [
    { Id: 1, trackid: "1", trackName: "1st Half Settlement", jobCnt: "7", who: "alex.kamal", wen: "08/01/2019" },
    { Id: 1, trackid: "2", trackName: "Escrow Rollover", jobCnt: "2", who: "naomi.nagata", wen: "12/14/2019" }
  ];
  
  tracksTable.columnConfigurations = [
    { property: "trackName", header: "Track" },
    { property: "jobCnt", header: "Jobs in Track" },
    { property: "who", header: "Modified By" },
    { property: "wen", header: "Modified Date" },
    {
      template: getTrackTableActions,
      align: "center",
      cellStyle: { width: "100px" }
    }
  ];

  function createTrackTableActions(rowIndex, prop){
    const div = document.createElement("div");
    
    var icons = ["delete"];
    
    for (var i = 0; i < icons.length; i++) {
      var iconButton = document.createElement("tcw-icon-button");
      var button = document.createElement("button");
      button.classList.add("material-icons", "table-icons");
      iconButton.classList.add("hover");
      button.innerText = icons[i];
      iconButton.appendChild(button);
      div.appendChild(iconButton);
    }
    
    return div;
  }
  
  function getTrackTableActions(rowIndex) {
    return createTrackTableActions(rowIndex, "");
  }
  
  var trackSelectToolbar = document.getElementById("track-select-toolbar");

  function updatetrackSelectToolbar() {
    const isSelected = tracksTable.getSelectedRows().length;
    const numRecordsLabel = document.querySelector("#num-track-selected-records");
    var selectedRows = tracksTable.getSelectedRows();
  
    if (isSelected && isSelected > 1) {
      trackSelectToolbar.classList.add("show");
      trackTableHead.classList.add("hide");
  
      for (var i = 0; i < rowIcons.length; i++) {
        rowIcons[i].classList.add("hide");
      }
  
      if (isSelected === 1) {
        numRecordsLabel.textContent =
          tracksTable.getSelectedRows().length + " record";
      } else {
        numRecordsLabel.textContent =
          tracksTable.getSelectedRows().length + " records";
      }
  
    } else {
      trackSelectToolbar.classList.remove("show");
      trackTableHead.classList.remove("hide");
  
      for (var i = 0; i < rowIcons.length; i++) {
        rowIcons[i].classList.remove("hide");
      }

    }
  
  }

  tracksTable.addEventListener("tcw-table-select", updatetrackSelectToolbar);
  tracksTable.addEventListener("tcw-table-select-all", updatetrackSelectToolbar);
/* end tracks table */

/* new job dialog */

const newJobDialogTemplate = document.getElementById("newJobDialog");
const newJobButton = document.getElementById("submitJob");

newJobButton.addEventListener("click", () => openNewJobDialog());

  //open dialog
function openNewJobDialog() {
  const newJobDialogElement = document.createElement("tcw-dialog");

  const newJobContent = newJobDialogTemplate.content.cloneNode(true);
  newJobDialogElement.appendChild(newJobContent);

  newJobDialogElement.addEventListener("tcw-dialog-close", evt => (newJobDialogElement.open = false));

  var singleJobContainer = newJobDialogElement.querySelector("#singleJobContainer");
  if (singleJobContainer) {
    singleJobContainer.classList.remove("hidden");
  }

  newJobDialogElement.open = true;

  var newJobCancelButton = newJobDialogElement.querySelector("#newJobCancelButton");

  newJobCancelButton.addEventListener("click", () => (newJobDialogElement.open = false));

  // render stepper and set index to 0
  var newJobStepper = document.getElementById("newJobStepper");

  if (newJobStepper) {
    newJobStepper.steps = [
      { label: "Select Report", completed: false },
      { label: "Enter Parameters", completed: false },
      { label: "Define Schedule", completed: false }
    ];

    newJobStepper.selectedIndex = 0;
  }

  var newJobNextButton  = newJobDialogElement.querySelector("#newJobNextButton");

  if (newJobNextButton) {
    newJobNextButton.addEventListener("click", () => (advanceNewJobStepper()));
  }

  var newJobPreviousButton = newJobDialogElement.querySelector("#newJobPreviousButton");

  if (newJobPreviousButton) {
    newJobPreviousButton.addEventListener("click", () => (previousNewJobStepper()));
  }

  var newJobSubmitButton = newJobDialogElement.querySelector("#newJobSubmitButton");

  newJobSubmitButton.addEventListener("click", () => {
    newJobDialogElement.open = false;
    submitJob();
    });
  //newJobSubmitButton.addEventListener("click", () => submitJob());

  const submitJobPage1 = newJobDialogElement.querySelector("#submitJobPage1");
  const submitJobPage2 = newJobDialogElement.querySelector("#submitJobPage2");
  const submitJobPage3 = newJobDialogElement.querySelector("#submitJobPage3");
  const page2SavedParams = newJobDialogElement.querySelector("#page2SavedParams");
  const firstHalfSettlementBoxes = newJobDialogElement.querySelector("#firstHalfAllCheckbox");

  if (firstHalfSettlementBoxes) {
    firstHalfSettlementBoxes.addEventListener("click", () => selectAllSettlementBoxes());
  }


  addStepOneRadioEvents();
  addStepTwoEvents();
  addStepThreeRadioEvents();

  //singe job table
  var singleJobListTable = newJobDialogElement.querySelector("#singleJobListTable");

  if (singleJobListTable) {
    singleJobListTable.data = [
      {"id":35,"jobId":"AA001","jobName":"Alberta DIP Upload","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA002","jobName":"Alberta Asmt Notice","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA100","jobName":"Owner Code by Owner Number","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA102","jobName":"Exempt List by Parcel Id","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA103","jobName":"Oil/Gas List","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA104","jobName":"Utilities List","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA105","jobName":"Parcel List","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA106","jobName":"Parcel List with Values","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA107","jobName":"Land Use Code List","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA108","jobName":"Neighborhood Codes","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA109","jobName":"Partial Value List","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA111","jobName":"Mailing List - Parcel Sequence","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA112","jobName":"Alpha Legal X-Ref by Owner","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA113","jobName":"Alpha Legal X-Ref by Parcel","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA114","jobName":"Appraisal ID X-Ref by Parcel","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA117","jobName":"Zip Code List by City","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA118","jobName":"Transfer List Mtc Date","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA118OH","jobName":"Ohio Transfer List Mtc Date","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA119","jobName":"Transfer List Sale Date","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA120","jobName":"Value List","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA121","jobName":"Mailing Name X-Ref","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA122","jobName":"2 1/2% List - Parcel Sequence","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA124","jobName":"Alpha X-Ref - Mailing Sequence","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA127","jobName":"Public Utilities by LUC","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA130","jobName":"Parcel List - Alpha Sequence","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA131","jobName":"Parcel w/Values - Alpha Seq","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA132","jobName":"Mineral/Oil/Gas Report","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA140","jobName":"GENERIC LETTER PRINTING","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA140HMSTD","jobName":"Homestead DTE105F - ON DEMAND ONLY","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA140NEW","jobName":"AA140NEW-New Owner Letter-ON DEMAND ONLY","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA211","jobName":"Ownership Audit Trail","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA301","jobName":"Val Cards - N/C Zip Code Seq","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA304","jobName":"Val Cards - Reap Zip Code Seq","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA304M","jobName":"Val Cards - Reap Zip Code Seq","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA305","jobName":"Val Cards - Reap Alpha Seq","status":"DENY","idType":"ROLE"},
      {"id":35,"jobId":"AA306","jobName":"2 1/2% Applications","status":"DENY","idType":"ROLE"}
    ];

    singleJobListTable.columnConfigurations = [
      { property: "jobId", header: "Job ID"},
      { property: "jobName", header: "Name"}
    ];
  }

    var paramsTable = document.querySelector("#params-table");

    if (paramsTable){
      paramsTable.data = [
        { Id: 1, Jobno: "333179", Setname: "", User: "amos.burton", status: "Done", subTime: "09/01/2018"},
        { Id: 2, Jobno: "333178", Setname: "", User: "amos.burton", status: "Done", subTime: "08/22/2018"}
      ];

      paramsTable.columnConfigurations = [
        { property: "Jobno", header: "Job #", cellStyle: { width: "60px" } },
        { property: "User", header: "User"},
        { property: "status", header: "Job Status" },
        { property: "Setname", header: "Saved Setname"},
        { property: "subTime", header: "Submitted Time" },
        {
          template: getParamsActions,
          align: "center",
          cellStyle: { width: "150px" }
        }
      ];
    }

    

}

  function selectAllSettlementBoxes() {
    var settlementBoxes = document.querySelectorAll("#firstHalfSettlementBoxes input[type='checkbox']");

    var checkValue = document.querySelector("#firstHalfAllCheckbox").checked;

    for (var i = 0; i < settlementBoxes.length; i++) {
      if (checkValue) {
        settlementBoxes[i].checked = true;
      } else {
        settlementBoxes[i].checked = false;
      }
    }
  }

function advanceNewJobStepper() {
  if (newJobStepper) {

    var maxSteps = newJobStepper.steps.length - 1;
    var currentStep = newJobStepper.selectedIndex;
    var nextStep = currentStep + 1;
    var nextTemplate = nextStep + 1;

    var selectedStep = newJobStepper.steps[currentStep];
    if (selectedStep) {
      var currentLabel = selectedStep["label"];
      selectedStep["completed"] = true;
    }

    if (newJobPreviousButton) {
      newJobPreviousButton.classList.remove("hidden");
    }

    // if the next step is the max step, increment the index and hide the next button
    if (nextStep === maxSteps) {
      newJobStepper.selectedIndex = nextStep;
      if (newJobNextButton) {
        newJobNextButton.classList.add("hidden");
      }

      if (newJobSubmitButton) {
        newJobSubmitButton.classList.remove("hidden");
      }
    } else if (nextStep < maxSteps) {
      // if the next step is less than the max step, increment the index only
      newJobStepper.selectedIndex = nextStep;
    } else {
      // if the next step is greater than the max step, hide the next button
      if (newJobNextButton) {
        newJobNextButton.classList.add("hidden");
      }
    }

    // change the layout
    // first hide all 3 layouts
    if (submitJobPage1) {
      submitJobPage1.classList.add("hidden");
      //submitJobPage1.classList.remove("displayedStep1");
    }

    if (submitJobPage2) {
      submitJobPage2.classList.add("hidden");
    }

    if (submitJobPage3) {
      submitJobPage3.classList.add("hidden");
    }

    // remove the hidden class for the layout being called
    var nextSubmitJobPage = document.querySelector("#submitJobPage" + nextTemplate);

    if (nextSubmitJobPage) {
      nextSubmitJobPage.classList.remove("hidden");
      //nextSubmitJobPage.classList.add("displayedStep"+nextTemplate);
    }

    //update the dialog header with the report name. static data for now.
    var newJobDialogHeader = document.getElementById("newJobDialogHeader");
    if (newJobDialogHeader) {
      newJobDialogHeader.innerText = "Submit a New Job - ST400OH";
    }

  }
}

function previousNewJobStepper() {
  if (newJobStepper) {

    var currentStep = newJobStepper.selectedIndex;
    var previousStep = currentStep - 1;
    var nextTemplate = previousStep + 1;

    var selectedStep = newJobStepper.steps[currentStep];
    if (selectedStep) {
      var currentLabel = selectedStep["label"];
      selectedStep["completed"] = false;
    }

    //make sure next button is redisplayed
    if (newJobNextButton) {
      newJobNextButton.classList.remove("hidden");
    }
    
    // make sure submit button is hidden
    if (newJobSubmitButton) {
      newJobSubmitButton.classList.add("hidden");
    }

    if (previousStep >= 0) {
      newJobStepper.selectedIndex = previousStep;
    }

    if (previousStep === 0) {
      newJobPreviousButton.classList.add("hidden");
    }

    // change the layout
    // first hide all 3 layouts
    if (submitJobPage1) {
      submitJobPage1.classList.add("hidden");
    }

    if (submitJobPage2) {
      submitJobPage2.classList.add("hidden");
    }

    if (submitJobPage3) {
      submitJobPage3.classList.add("hidden");
    }

    // remove the hidden class for the layout being called
    var prevSubmitJobPage = document.querySelector("#submitJobPage" + nextTemplate);

    if (prevSubmitJobPage) {
      prevSubmitJobPage.classList.remove("hidden");
      //prevSubmitJobPage.classList.add("displayedStep" + nextTemplate);
    }

  }
}

// add event listeners to radio buttons
function addStepOneRadioEvents() {
  var jobTypeRadios = document.getElementsByName("jobTypeRadio");

  for (var i = 0; i < jobTypeRadios.length; i++) {
    jobTypeRadios[i].addEventListener("click", () => stepOneRadioChange());
  }
}

// change templates for job type radio button
function stepOneRadioChange() {
  var jobTypeRadios = document.getElementsByName("jobTypeRadio");
  var radValue;

  for (var i=0; i < jobTypeRadios.length; i++) {
    if (jobTypeRadios[i].checked) {
      radValue = jobTypeRadios[i].value;
      break;
    }
  }

  var singleJobContainer = document.getElementById("singleJobContainer");
  var trackJobContainer = document.getElementById("trackJobContainer");

  if (radValue === "single") {
    if (singleJobContainer) {
      singleJobContainer.classList.remove("hidden");
    }
    if (trackJobContainer) {
      trackJobContainer.classList.add("hidden");
    }
  }

  if (radValue === "track") {
    if (singleJobContainer) {
      singleJobContainer.classList.add("hidden");
    }
    if (trackJobContainer) {
      trackJobContainer.classList.remove("hidden");
    }
  }
}

  // add event listener to step 2 saved params button
  function addStepTwoEvents() {
    var savedParamsButton = document.getElementById("savedParamsButton");
    var backToPage2 = document.getElementById("backToPage2");

    if (savedParamsButton) {
      savedParamsButton.addEventListener("click", () => showSavedParamsPage());
    }

    if (backToPage2) {
      backToPage2.addEventListener("click", () => showPage2Again());
    }
  }

  function showSavedParamsPage() {

    if (page2SavedParams) {
      page2SavedParams.classList.remove("hidden");
    }

    if (submitJobPage2) {
      submitJobPage2.classList.add("hidden");
    }
  }

  function showPage2Again() {
    const page2SavedParams = document.getElementById("page2SavedParams");

    if (page2SavedParams) {
      page2SavedParams.classList.add("hidden");
    }

    if (submitJobPage2) {
      submitJobPage2.classList.remove("hidden");
    }
  }

// function to add a text button to the saved parameters table on the dialog
  function createParamsTemplateFromData(rowIndex, prop) {
    const mydiv = document.createElement("div");
    
    var textButton = document.createElement("tcw-button");

    textButton.addEventListener("click", () => showPage2Again());

    var tbutton = document.createElement("button");
    
    tbutton.setAttribute("type","button");
    
    tbutton.innerText = "Select";
    
    textButton.appendChild(tbutton);
    mydiv.appendChild(textButton);
    
    return mydiv;
  };

function getParamsActions (rowIndex) {
    return createParamsTemplateFromData (rowIndex, "");
};

  // add event listeners to run radio buttons
  function addStepThreeRadioEvents () {
    var runRadios = document.getElementsByName("runradio");
    
    for (var i = 0; i < runRadios.length; i++) {
      runRadios[i].addEventListener("click", () => stepThreeRadioChange());
    }
  }
  
  function stepThreeRadioChange() {
    var runRadios = document.getElementsByName("runradio");
    
    var radValue;
    
    for (var i= 0; i < runRadios.length; i++) {
      if (runRadios[i].checked) {
        radValue = runRadios[i].value;
        break;
      }
    }
    
    var runNowContainer = document.getElementById("runNowContainer");
    var runLaterOnceContainer = document.getElementById("runLaterOnceContainer");
    var runLaterRepeatContainer = document.getElementById("runLaterRepeatContainer");
    
    if (radValue === "runNow") {
      if(runNowContainer) {
        runNowContainer.classList.remove("hidden");
      }
      
      if (runLaterOnceContainer) {
        runLaterOnceContainer.classList.add("hidden");
      }
      
      if (runLaterRepeatContainer) {
        runLaterRepeatContainer.classList.add("hidden");
      }
    }  else if (radValue === "runLaterOnce") {
      if(runNowContainer) {
        runNowContainer.classList.add("hidden");
      }
      
      if (runLaterOnceContainer) {
        runLaterOnceContainer.classList.remove("hidden");
      }
      
      if (runLaterRepeatContainer) {
        runLaterRepeatContainer.classList.add("hidden");
      }
    }  else if (radValue === "runLaterRepeat") {
      if(runNowContainer) {
        runNowContainer.classList.add("hidden");
      }
      
      if (runLaterOnceContainer) {
        runLaterOnceContainer.classList.add("hidden");
      }
      
      if (runLaterRepeatContainer) {
        runLaterRepeatContainer.classList.remove("hidden");
      }
    }
    
  }

/* end new job dialog */

/* update notification badge count */
  const testButton = document.getElementById("testButton");
  const notificationButton = document.getElementById("notificationItem");
  const notificationPopUp = document.getElementById("notificationPopUp");
  const notificationDialogTemplate = document.getElementById("notificationDialog");

  if (testButton) {
    testButton.addEventListener("click", () => submitJob());
  }

  function updateNotificationCount() {
    if (notificationButton) {
      var currentCount = notificationButton.getAttribute("count");
      var newCount = ++currentCount;
      notificationButton.setAttribute("count",newCount);
    }
  }

  if (notificationButton) {
    notificationButton.addEventListener("click", evt => (openNotificationsDialog()));
  }

  function openNotificationsDialog() {
    const NotificationsDialogElement = document.createElement("tcw-dialog");
    const NotificationsContent = notificationDialogTemplate.content.cloneNode(true);
    //NotificationsDialogElement.appendChild(NotificationsContent);
  
    //NotificationsDialogElement.addEventListener("tcw-dialog-close", evt => (NotificationsDialogElement.open = false));
  
    //NotificationsDialogElement.open = true;

    //var NotificationsCloseButton = NotificationsDialogElement.querySelector("#NotificationsCloseButton");
    
    //if (NotificationsCloseButton) {
      //NotificationsCloseButton.addEventListener("click", () => (NotificationsDialogElement.open = false));
    //}

    //if (notificationButton) {
      //notificationButton.setAttribute("count",0);
      //notificationButton.setAttribute("show-badge","false");
    //}

    // pop-up testing
    const popup = document.createElement("tcw-popup");

    popup.targetElement = document.getElementById("notificationItem");
    popup.innerHTML = "<div><tcw-toolbar class='dialog-header'><h1 slot='start' class='tyl-typography--title'>Notifications</h1></tcw-toolbar><div class='tyl-dialog-body__padding'><tcw-list style='width: 400px;'><tcw-list-item two-line='true' class='noPad'><span class='tyl-list-item__title'>Job #123456 is completed</span><span class='tyl-list-item__subtitle'>CA320.PDF - 2,543Kb</span><tcw-button slot='trailing'><button>Download</button></tcw-button></tcw-list-item></tcw-list></div></div>";
    popup.open = true;

  }

/* end update notification badge count */

/* submit Job function */

  function submitJob() {
    updateNotificationCount();

    const newJobToast = document.createElement("tcw-toast");
    newJobToast.setAttribute("show-close","false");
    newJobToast.setAttribute("action-text","OK");
    newJobToast.setAttribute("duration","5000");
    newJobToast.message = "Job #123456 Submitted";
    document.body.appendChild(newJobToast);
  }

/* end submit job function */

/* help button */

  const helpButton = document.getElementById("helpButton");

  if (helpButton) {
    helpButton.addEventListener("click", evt => (openHelpDialog()));
  }

  function openHelpDialog() {
    const helpPopup = document.createElement("tcw-popup");
    
    helpPopup.targetElement = document.getElementById("helpButton");
    
    helpPopup.innerHTML = "<div><h1>Help!</h1></div>";
    
    helpPopup.open = true;
  }

/* end help button */