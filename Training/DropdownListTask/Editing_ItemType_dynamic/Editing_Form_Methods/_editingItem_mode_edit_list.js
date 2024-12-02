
  function disableCheckboxesOnEdit() {
   
    let checkboxes = document.querySelectorAll("#customCheckboxList input[type='checkbox']");
    
    checkboxes.forEach(checkbox => {
        if (!document.isEditMode) {
            checkbox.disabled = true; // Disable checkboxes when not in edit mode
        } else {
            checkbox.disabled = false; // Enable checkboxes when in edit mode
        }
    });
}
    
    // Function to update the Aras property based on selected checkboxes
function updateCustomArasProperty() {
    // Get all checked checkboxes and join their values as a comma-separated string
    let checkboxes = document.querySelectorAll("#customCheckboxList input[type='checkbox']:checked");
    let selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value).join(", ");
    let propName=document.getElementById("customSavedValueDisplay").value;
    // console.log(propName);
    let innovator = parent.thisItem;  // Access the current Aras Innovator item
    innovator.setProperty(propName, selectedValues);  // Update the property directly in Aras

    // Update the displayed saved value
    document.getElementById("customSavedValueDisplay").innerText = selectedValues;
   
    disableCheckboxesOnEdit();
}

// Call the function after a 1-second delay (1000 milliseconds)
setTimeout(updateCustomArasProperty, 1500);
