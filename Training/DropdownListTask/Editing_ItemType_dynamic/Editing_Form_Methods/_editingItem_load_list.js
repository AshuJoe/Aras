var dataSource_listID;
var propID="738923584B494B4EBBCA467070B84D48";// pass id of the property
let propName;

function displayCustomListValues() {
    var listValues = aras.getListValues(dataSource_listID);  // Replace with the correct list ID
    
    if (!listValues || listValues.length === 0) {
      document.getElementById("customSavedValueDisplay").innerText = "No list values found.";
      return;
    }

    var checkboxDropdown = document.getElementById("customCheckboxList");

    // Loop through the list values and create checkboxes dynamically
    listValues.forEach(function(item) {
      var label = aras.getItemProperty(item, "label");
      var value = aras.getItemProperty(item, "value");

      var labelElement = document.createElement("label");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = value;
      // checkbox.onclick = updateCustomArasProperty; // Attach the update function to each checkbox
      
      labelElement.appendChild(checkbox);
      labelElement.appendChild(document.createTextNode(" " + label));
      checkboxDropdown.appendChild(labelElement);
      checkboxDropdown.appendChild(document.createElement("br"));  // Add line break for each checkbox
    });
  }
  
  setTimeout(displayCustomListValues,100);
  
  function loadCustomSavedValue() {
      let innovator = parent.thisItem;  // Access the current Aras Innovator item
      let savedVal = innovator.getProperty(propName, "");  // Retrieve the saved property value
        
      // Display the saved value in the read-only field
      document.getElementById("customSavedValueDisplay").innerText = savedVal;

      // Split the saved value and check the corresponding checkboxes
      let selectedOptions = savedVal.split(", ");
      let checkboxes = document.querySelectorAll("#customCheckboxList input[type='checkbox']");
      
      checkboxes.forEach(checkbox => {
        if (selectedOptions.includes(checkbox.value)) {
          checkbox.checked = true;
        }
      });
    //   console.log("listloaded");
    }
setTimeout(loadCustomSavedValue, 800);


function getPropData() {
  var amlRequest = '<AML><Item type="Property" id="';
  amlRequest+=propID;
  amlRequest+='" action="get" select="data_source"></Item></AML>';
// console.log(amlRequest);
  var aml = aras.IomInnovator.applyAML(amlRequest);
//   console.log(amlRequest);
  var dataSource_node = aml.node.querySelector('data_source'); // Select the data_source element
  dataSource_listID = dataSource_node.textContent; // Extract the text content
  
  amlRequest='<AML><Item type="Property" id="';
  amlRequest+=propID;
  amlRequest+='" action="get" select="keyed_name"></Item></AML>';
  aml = aras.IomInnovator.applyAML(amlRequest);
  var propSource_node=aml.node.querySelector('keyed_name');
  propName=propSource_node.textContent;
  document.getElementById("customSavedValueDisplay").value=propName;
  
//   console.log(propName); 
}

getPropData();


