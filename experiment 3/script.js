
const page = document.body.dataset.page

if (page == "home") {
    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "home.html";

    })

    document.getElementsByClassName("text")[0].style.setProperty('--displayn', 'block');


    let hamburgerbar = document.querySelector(".hamburgerbar").addEventListener("click", () => {
        if (document.querySelector(".hbar").style.display == "none") {
            document.querySelector(".hbar").style.display = "block"
        }

        else {
            document.querySelector(".hbar").style.display = "none"
        }



    })


    document.getElementsByClassName("ann")[0].addEventListener("click", () => {
        window.location.href = "announcements.html";
    })

    document.getElementsByClassName("complain")[0].addEventListener("click", () => {
        window.location.href = "complaints.html";
    })

    document.getElementsByClassName("members")[0].addEventListener("click", () => {
        window.location.href = "members.html";
    })

    document.getElementsByClassName("profile")[0].addEventListener("click", () => {
        window.location.href = "profile.html";
    })

    // hamburgerbar buttons

    document.getElementsByClassName("about")[0].addEventListener("click",() => {
      window.location.href="about.html"
    })

    document.getElementsByClassName("menu")[0].addEventListener("click",() => {
      window.location.href="menu.html"
    })

    document.getElementsByClassName("nutraints")[0].addEventListener("click",() => {
      window.location.href="nutraints.html"
    })

    document.getElementsByClassName("bill")[0].addEventListener("click",() => {
      window.location.href="bill.html"
    })

    document.getElementsByClassName("rules")[0].addEventListener("click",() => {
      window.location.href="rules.html"
    })

    document.getElementsByClassName("thoughts")[0].addEventListener("click",() => {
      window.location.href="thoughts.html"
    })

    document.getElementsByClassName("feedback")[0].addEventListener("click",() => {
      window.location.href="feedback.html"
    })

    document.getElementsByClassName("logout")[0].addEventListener("click",() => {
      window.location.href="login page.html"
    })

    // for ai page

    let ai = document.getElementsByClassName("ai")[0]
    let aipage = document.getElementsByClassName("aipage")[0]

    ai.addEventListener("click",() => {
        
        if(aipage.style.display=="none") {
            aipage.style.display= "block"
        }

        else {
            aipage.style.display="none"
        }
    })

}
if (page == "announcements") {

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "home.html";
    })

    document.getElementsByClassName("text")[1].style.setProperty('--displayn', 'block');

    document.getElementsByClassName("ann")[0].addEventListener("click", () => {
        window.location.href = "announcements.html";

        document.getElementsByClassName("text")[1].style.display = "block"
        document.getElementsByClassName("text")[0].style.display = "none"
        document.getElementsByClassName("text")[2].style.display = "none"
        document.getElementsByClassName("text")[3].style.display = "none"
        document.getElementsByClassName("text")[4].style.display = "none"
    })

    document.getElementsByClassName("complain")[0].addEventListener("click", () => {
        window.location.href = "complaints.html";
    })

    document.getElementsByClassName("members")[0].addEventListener("click", () => {
        window.location.href = "members.html";
    })

    document.getElementsByClassName("profile")[0].addEventListener("click", () => {
        window.location.href = "profile.html";
    })



}
if (page == "complaints") {



    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "home.html";
    })

    document.getElementsByClassName("text")[2].style.setProperty('--displayn', 'block');

    document.getElementsByClassName("ann")[0].addEventListener("click", () => {
        window.location.href = "announcements.html";
    })

    document.getElementsByClassName("complain")[0].addEventListener("click", () => {
        window.location.href = "complaints.html";
    })

    document.getElementsByClassName("members")[0].addEventListener("click", () => {
        window.location.href = "members.html";
    })

    document.getElementsByClassName("profile")[0].addEventListener("click", () => {
        window.location.href = "profile.html";
    })
}
if (page == "members") {

    document.getElementsByClassName("text")[3].style.setProperty('--displayn', 'block');

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "home.html";
    })


    document.getElementsByClassName("ann")[0].addEventListener("click", () => {
        window.location.href = "announcements.html";
    })

    document.getElementsByClassName("complain")[0].addEventListener("click", () => {
        window.location.href = "complaints.html";
    })

    document.getElementsByClassName("members")[0].addEventListener("click", () => {
        window.location.href = "members.html";
    })

    document.getElementsByClassName("profile")[0].addEventListener("click", () => {
        window.location.href = "profile.html";
    })

}
if (page == "profile") {

    document.getElementsByClassName("text")[4].style.setProperty('--displayn', 'block');

    document.getElementsByClassName("home")[0].addEventListener("click", () => {
        window.location.href = "home.html";
    })

    document.getElementsByClassName("ann")[0].addEventListener("click", () => {
        window.location.href = "announcements.html";
    })

    document.getElementsByClassName("complain")[0].addEventListener("click", () => {
        window.location.href = "complaints.html";
    })

    document.getElementsByClassName("members")[0].addEventListener("click", () => {
        window.location.href = "members.html";
    })

    document.getElementsByClassName("profile")[0].addEventListener("click", () => {
        window.location.href = "profile.html";
    })

}

if (page == "about") {

    document.getElementsByClassName("back")[0].addEventListener("click", () => {
        window.location.href = "home.html";
    })
}

if (page == "menu") {

    document.getElementsByClassName("back")[0].addEventListener("click", () => {
        window.location.href = "home.html";
    })
}

if (page == "nutraints") {

    document.getElementsByClassName("back")[0].addEventListener("click", () => {
        window.location.href = "home.html";
    })
}

if (page == "bill") {

    document.getElementsByClassName("back")[0].addEventListener("click", () => {
        window.location.href = "home.html";
    })
}

if (page == "rules") {

    document.getElementsByClassName("back")[0].addEventListener("click", () => {
        window.location.href = "home.html";
    })
}

if (page == "thoughts") {

    document.getElementsByClassName("back")[0].addEventListener("click", () => {
        window.location.href = "home.html";
    })
}

if (page == "feedback") {

    document.getElementsByClassName("back")[0].addEventListener("click", () => {
        window.location.href = "home.html";
    })
}

if (page == "login") {
document.getElementsByClassName("sing")[0].addEventListener("click", () => {
  window.location.href="registration page.html"
})

document.getElementsByClassName("btn")[0].addEventListener("click", () => {
  window.location.href="home.html"
})


}

if (page == "singup") {
document.getElementsByClassName("sing")[0].addEventListener("click", () => {
  window.location.href="login page.html"
})

document.getElementsByClassName("btn")[0].addEventListener("click", () => {
  window.location.href="home.html"
})


}