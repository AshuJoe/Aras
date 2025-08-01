This project contains a custom HTML-based solution to preview a formatted Word-like document within Aras Innovator. 
The preview is initiated through a form button that opens a new browser tab, displaying dynamic content using thisItem properties and embedded images.


This is the main preview file. It:

1. Loads dynamic data from thisItem (Aras context object).
2. Embeds images as Base64.
3. Builds a document layout resembling a Word document.
4. Allows inline editing of sections (via contenteditable="true").
Offers options to:
✅ Download the current document as a .doc file.
✅ Print or export as PDF using window.print().p


steps:
1. Add a new HTML element in aras form.
2. check if all the properties mentioned in showPreview.html files are present in Item Type 
3. copy the code from button.html in newly created html form element 
4. save the showPreview.html file in aras directory in folder like customer or javascript (I saved it in "client/customer/" folder) 
