# awt01

---

## 🧪 Experiment Summary

| **Experiment** | **Files Included** | **Description** |
|-----------------|--------------------|-----------------|
| **Experiment 1** | D1.js, index.html, s.css | Basic HTML, CSS, and JavaScript integration |
| **Experiment 2** | D2.js, index.html, s.css | DOM manipulation and jQuery-style scripting |
| **Experiment 3** | app.js, index.html | JavaScript web app with dynamic functionality |
| **Experiment 4** | bill.html, form.html | HTML form handling and billing layout |
| **Experiment 5** | index.html, nodetest.js, server.js | Node.js basics — running a local server and file testing |
| **Experiment 6** | package.json, server.js | Node.js app setup with npm and Express concepts |
| **Experiment 7** | cokkie-example.js, session-example.js | Understanding cookies and session handling in Node.js |

---

## 📘 Detailed Learnings

### 🔹 **Experiment 1 – Basic Web Structure**
**What I learned:**
- How to structure a webpage using HTML.
- Applying CSS for styling and layout.
- Linking external JS and CSS files.

**code**

## index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LAB EXP 1</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link rel="stylesheet" href="s.css">
</head>
<body>

    <div class="container">
        <h1>1. Right-Click Disabled</h1>
        <p>Try right-clicking anywhere on this page. The context menu will not appear.</p>
    </div>

    <hr>

    <div class="container">
        <h1>2. Show/Hide Message</h1>
        <button id="showBtn">Show Message</button>
        <button id="hideBtn">Hide Message</button>
        <div id="messageDiv">
            <p>Hello! This message can be hidden and shown using the buttons above.</p>
        </div>
    </div>

    <hr>

    <div class="container">
        <h1>3. Paragraph Color Change on Hover</h1>
        <p class="hover-para">This paragraph changes color.</p>
    </div>

    <hr>

    <div class="container" style="height: 1200px;">
        <h1>4. Scroll to Top</h1>
        <p>Scroll down this page to see the image in the bottom-right corner. Clicking it will bring you back to the top of the page.</p>
    </div>

    
    <img src="C:\Users\hp\Pictures\Screenshots\Screenshot 2025-08-25 231221.png" alt="Scroll to Top" id="scrollToTopBtn">

    <script src="d1.js"></script>

</body>
</html>

```

## D1.js
```js
$(document).on("selectstart", function(e) { e.preventDefault(); });

$(document).on("keydown", function(e) {
    if (e.ctrlKey && e.keyCode === 67) e.preventDefault();
});

 $(document).ready(function() {
            // 1. Disable the right-click menu
            $(document).on("contextmenu", function(e) {
                e.preventDefault();
            });

            // 2. Display and hide a message
            $("#showBtn").click(function() {
                $("#messageDiv").show('slow');
            });
            $("#hideBtn").click(function() {
                $("#messageDiv").hide('slow');
            });

            // 3. Change paragraph color on mouseover
            $(".hover-para").mouseover(function() {
                $(this).css("color", "red");
            });
            $(".hover-para").mouseout(function() {
                $(this).css("color", "#333");
            });

            // 4. Click an image to scroll to the top
            $("#scrollToTopBtn").click(function() {
                $("html, body").animate({ scrollTop: 0 }, 'slow');
            })

        });
```

### s.css
```css
body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding-bottom: 1500px; 
        }
        .container {
            margin-bottom: 40px;
        }
        h1 {
            color: orchid;
        }
        p {
            font-size: 1.1em;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        #messageDiv {
            padding: 20px;
            border: 1px solid yellowgreen;
            background-color:white;
            margin-top: 10px;
            border-radius: 8px;
            display: none; 
        }
        button {
            padding: 10px 15px;
            margin-right: 10px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: pink ;
            color: white;
        }
        button:hover {
            background-color: red;
        }
        #scrollToTopBtn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            cursor: pointer;
            border: 2px solid beige;
            border-radius: 50%;
            background-color: powderblue;
            box-shadow: 0 4px 6px black;
        }body {
            font-family: Arial, sans-serif;
            margin: 20px;
            padding-bottom: 1500px; 
        }
        .container {
            margin-bottom: 40px;
        }
        h1 {
            color: orchid;
        }
        p {
            font-size: 1.1em;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        #messageDiv {
            padding: 20px;
            border: 1px solid yellowgreen;
            background-color:white;
            margin-top: 10px;
            border-radius: 8px;
            display: none; 
        }
        button {
            padding: 10px 15px;
            margin-right: 10px;
            cursor: pointer;
            border: none;
            border-radius: 5px;
            background-color: pink ;
            color: white;
        }
        button:hover {
            background-color: red;
        }
        #scrollToTopBtn {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            cursor: pointer;
            border: 2px solid beige;
            border-radius: 50%;
            background-color: powderblue;
            box-shadow: 0 4px 6px black;
        }
```
**Challenges faced:**
- Managing proper linking of files.
- Debugging minor syntax issues in CSS and JS.

---

### 🔹 **Experiment 2 – DOM Manipulation**
**What I learned:**
- Accessing and modifying HTML elements using JavaScript.
- Using event listeners to make pages interactive.
- Understanding traversal methods like `parent()`, `children()`, and `find()`.



**Challenges faced:**
- Understanding how DOM updates reflect dynamically.
- Handling multiple nested elements efficiently.

---

### 🔹 **Experiment 3 – JavaScript Application**
**What I learned:**
- Building a small interactive app using JS.
- Handling user input and updating the UI.
- Understanding basic app logic and modular code.

**Challenges faced:**
- Debugging logic errors and managing functions.
- Keeping the code reusable and readable.

---

### 🔹 **Experiment 4 – Form and Billing System**
**What I learned:**
- Creating and validating HTML forms.
- Structuring a billing page layout.
- Collecting and displaying user data effectively.

**Challenges faced:**
- Handling form validation without libraries.
- Designing responsive form layouts.

---

### 🔹 **Experiment 5 – Node.js Basics**
**What I learned:**
- Running JavaScript code on the server side.
- Using built-in modules like `http` and `fs`.
- Creating a simple server and reading files.

**Challenges faced:**
- Understanding how asynchronous operations work.
- Managing errors when reading or serving files.

---

### 🔹 **Experiment 6 – Node.js with npm**
**What I learned:**
- Initializing a Node.js project using `npm init`.
- Installing and using packages like Express.
- Handling HTTP requests and responses efficiently.

**Challenges faced:**
- Understanding middleware and routing concepts.
- Setting up dependencies correctly in `package.json`.

---

### 🔹 **Experiment 7 – Cookies and Sessions**
**What I learned:**
- Storing and managing cookies in Node.js.
- Using sessions for authentication or tracking.
- Understanding client-server state management.

**Challenges faced:**
- Handling cookie expiration and security flags.
- Managing session persistence across routes.

---

✅ *This README provides a full overview of all lab experiments, what was learned, and challenges faced during implementation.*
