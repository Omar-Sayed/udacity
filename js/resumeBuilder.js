

var bio = {
    "name" : "Omar Sayed",
    "role" : "Java Developer",
    "contacts" : 
    {
        "mobile": "01234567891",
        "email": "omar@email.com",
        "github": "www.github.com/account/omar",
        "twitter": "www.twitter.com/account/omar",
        "location": "Gize, Egypt"
    },     
    "welcomeMessage": "Hello, Nice to see you",
    "skills": ["JavaSE", "JavaEE", "Web Api", "Hibernate", "MYSQL"],
    "biopic": "./images/profile.jpg",
    display: function (){

        var role = HTMLheaderRole.replace("%data%", bio.role);
            $("#header").prepend(role);
        var name = HTMLheaderName.replace("%data%", bio.name);
            $("#header").prepend(name);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
            $("#topContacts").append(mobile);
            $("#footerContacts").append(mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
            $("#topContacts").append(email);
            $("#footerContacts").append(email);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
            $("#topContacts").append(github);
            $("#footerContacts").append(github);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
            $("#topContacts").append(twitter);
            $("#footerContacts").append(twitter);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
            $("#topContacts").append(location);
            $("#footerContacts").append(location);
        var profile = HTMLbioPic.replace("%data%", bio.biopic);
            $("#header").append(profile);
        var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(welcome);
        $("#header").append(HTMLskillsStart);

        for(var i in bio.skills)
        {
            var temp = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(temp);
        }

     
    }
}
var work = {
    "jobs": [
        {
            "employer": "Microsoft Egypt",
            "title": "Intern",
            "location": "Smart Village",
            "dates": "1/9/2017",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        },
        {
            "employer": "Dell EMC",
            "title": "Intern",
            "location": "New Cairo",
            "dates": "1/1/2018",
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
        }
    ], 
    "display": function (){
        $("#workExperience").append(HTMLworkStart);
        for(var i in work.jobs)
        {
            var employer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
                $(".work-entry").append(employer);
            var title = HTMLworkTitle.replace("%data%", work.jobs[i].title);
                $(".work-entry").append(title);
            var location = HTMLworkLocation.replace("%data%", work.jobs[i].location);
                $(".work-entry").append(location);
            var dates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
                $(".work-entry").append(dates);
            var description = HTMLworkDescription.replace("%data%", work.jobs[i].description);
                $(".work-entry").append(description);
        }
    }
}
var projects = {
    "projects": [
        {
            "title": "Video Encryption System",
            "dates": "1/7/2017 - 1/9/2017",
            "description": "This system take any video and encrypt it with DES3 encryption Algorithm and symmetric key.",
            "images": ["./images/Video1.png", "./images/Video2.png"]
        },
        {
            "title": "Small Search Engine",
            "dates": "2/9/2017 - 31/12/2017",
            "description": "A small engine takes some documents and search query then return the most related documents to that query.",
            "images": ["./images/Search1.png", "./images/Search2.png"]
        }
        
    ],
    "display": function(){
        $("#projects").append(HTMLprojectStart);
        for(var i in projects.projects)
        {
            var title = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
                $(".project-entry").append(title);
            var dates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
                $(".project-entry").append(dates);
            var description = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
                $(".project-entry").append(description);
            for(var j in projects.projects[i].images)
            {
                var image = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry").append(image);
            }

        }
       
    }
          
}
var education = {
    "schools": [
        {
            "name": "Faculty of Computers and Information",
            "location": "Helwan",
            "degree": "Bechalor",
            "majors": "Software Engineering",
            "dates": "1/1/2016 - 1/6/2016",
            "url": "www.fcih.net"
        }
    ],

    "onlineCourses": [
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "1/1/2016 - 1/6/2016",
            "url": "www.udacity.com"
        },
        {
            "title": "HTML Basics",
            "school": "Udacity",
            "dates": "1/6/2015 - 1/9/2015",
            "url": "www.udacity.com"
        }
    ],
         
    "display": function (){
        $("#education").append(HTMLschoolStart);
        for(var i in education.schools)
        {
            var name = HTMLschoolName.replace("%data%", education.schools[i].name +" -- "+education.schools[i].degree);
                $(".education-entry").append(name);
            var location = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                $(".education-entry").append(location);
            var dates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                $(".education-entry").append(dates);
            var majors = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
                $(".education-entry").append(majors);
        }
        $(".education-entry").append(HTMLonlineClasses);
        for(var i in education.onlineCourses)
        {
            var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                $(".education-entry").append(title + " - " + education.onlineCourses[i].school);
            var dates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                $(".education-entry").append(dates);
            var url = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
                $(".education-entry").append(url);
        }
    }
}
bio.display();
work.display();
projects.display();
education.display();