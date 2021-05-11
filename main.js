/* 1. You are to get all elements in your html by id using the selector method in JavaScript. */

document.querySelectorAll("[id]")

/* 2. You are to change the header text which says "Let's modify the DOM" to "New DOM Layout" and also change the background color by adding this classList "bg-success" */

let header = document.getElementById('main-heading')
header.innerText = "New DOM Layout"

/* 3. You are to access each paragraph tag from your html and add the following text content to it:

* For para1 : The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.

* For para2: The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page. */

para1.innerText = "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure."

para2.innerText = "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page."

/* 4. You are to add a click event function to the button which will create a new paragraph in the box layout when on clicks on it.

This should be the text content:
The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document. */

let button = document.querySelector("#btn")
button.addEventListener("click", () => {
    let p = document.createElement("p");
    let t = document.createTextNode("The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.");
    p.appendChild(t);
    para4.appendChild(p);
})

/* 5. You are to change each boxes to the proper colors mentioned in them. Note the new classLists you are to add for each boxes:

First box: bg-danger

Second box: bg-primary

Third box: bg-warning

Fourth box: bg-success

Fifth box: bg-dark */

let firstBox = document.getElementById("red")
firstBox.classList.remove("bg-white")
firstBox.classList.add("bg-danger")

let secondBox = document.getElementById("blue")
secondBox.classList.remove("bg-white")
secondBox.classList.add("bg-primary")

let thirdBox = document.getElementById("yellow")
thirdBox.classList.remove("bg-white")
thirdBox.classList.add("bg-warning")

let fourthBox = document.getElementById("green")
fourthBox.classList.remove("bg-white")
fourthBox.classList.add("bg-success")

let fifthBox = document.getElementById("black")
fifthBox.classList.remove("bg-white")
fifthBox.classList.add("bg-dark")
