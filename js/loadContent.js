function loadAllContent(title) {
    loadHead(title);
    loadHeader(title);
    loadFooter();
}

function loadHead(title) {
    fetch('/includes/head.html')
      .then(response => response.text())
      .then(data => {
        document.head.innerHTML = data;  // Insert the template into the head
        
        // Dynamically set the page title
        document.title = title; 
  
        // Dynamically set the og:title meta content
        const ogTitleMetaTag = document.querySelector('meta[property="og:title"]');
        if (ogTitleMetaTag) {
          ogTitleMetaTag.setAttribute('content', title); // Set the og:title content
        }
      })
      .catch(error => console.error('Error loading head template:', error));
}

function loadHeader(title) {
    fetch('/includes/header.html')
      .then(response => response.text())
      .then(data => {
        const headerElement = document.querySelector('header');  // Use a selector for the <header> element or another container
        if (headerElement) {
          headerElement.innerHTML = data;  // Insert the template into the header
        
          // Find the <h2> and <a> elements in the loaded content
          const h2Element = headerElement.querySelector('.page-title');
            
          if (h2Element) {
          // Modify the href and the text based on the title
          const formattedTitle = title.toLowerCase();  // Converts the title to lowercase for the URL
          h2Element.setAttribute('href', `/${formattedTitle}`);  // Set the href dynamically
          h2Element.textContent = title;  // Set the text of the link dynamically
          }
        }
      })
      .catch(error => console.error('Error loading header template:', error));
}

function loadFooter(title) {
    fetch('/includes/footer.html')
      .then(response => response.text())
      .then(data => {
        const footerElement = document.querySelector('footer');  // Use a selector for the <header> element or another container
        if (footerElement) {
          footerElement.innerHTML = data;  // Insert the template into the header
        }
      })
      .catch(error => console.error('Error loading header template:', error));
}