var MyResume = {
    Header: '<h2>Adam Gerhard Beeson</h2><br /><span>Denver, CO. Phone: (720)507-5280</span>',
    ProfessionalExperience: [
        {
            JobTitle: 'Principal Engineer',
            CompanyName: 'OneRail LLC',
            StartDate: 'December 14, 2023',
            EndDate: 'Current',
            Desc: 'Providing strategic technical direction and vision for the organization. Overseeing the planning, execution, and delivery of complex projects and collaborating with project managers to define project scope, goals, and deliverables. Promoting effective communication and knowledge sharing within the engineering teams.'
        },
        {
            JobTitle: 'Software Architect & Team Lead',
            CompanyName: 'Nelnet Inc',
            StartDate: 'April 21, 2015',
            EndDate: 'December 14, 2023',
            Desc: 'Designed and implemented financial technology products, front-end and back-end, for servicing consumer and government lending. Transformed complex requirements from customers into highly scalable, reliable, and easy to use applications for both end user loan borrowers as well as corporate customers using our products as a service (SaaS).'
        },
        {
            JobTitle: 'Software Engineer',
            CompanyName: 'TEK Systems Contractor for Compassion Intl.',
            StartDate: 'August 1, 2014',
            EndDate: 'April 21, 2015',
            Desc: 'Developed .NET software for dynamic wireless web servers to be deployed in third world countries to be used as upload hubs for a companion IOS application. The hub uploaded large video files to a regional cloud serviced data store. Also maintained the Compassion International website using ASP.NET and jQuery.'
        },
        {
            JobTitle: 'Software Engineer',
            CompanyName: 'Veteran Engineering',
            StartDate: 'November 15, 2013',
            EndDate: 'April 21, 2014',
            Desc: 'Developed and maintained .NET training software for the US Army. Built and deployed a tablet dashboard for a large local general contractor to be used as a planning and POS application using AngularJS and other HTML5 technologies.'
        },
        {
            JobTitle: 'Software Engineer',
            CompanyName: 'AspenPointe Medical Services',
            StartDate: 'May 21, 2012',
            EndDate: 'November 15, 2013',
            Desc: 'Developing and assisting other junior engineers in the design, creation, and maintenance of software used by regional care providers, medical staff, and nurse practitioners for use in managing provider and member information. Software written in compliance with the national HIPAA guidelines, using modern securities, encryptions, and data obfuscations for record security and protection.'
        },
        {
            JobTitle: 'Programmer Analyst II',
            CompanyName: 'Northrop Grumman',
            StartDate: 'June 16, 2008',
            EndDate: 'May 18, 2012',
            Desc: 'Developed and maintained the wide array of software distributed to the USAF and USN that belongs to the Training Integration Management Software (TIMS). Worked with teams of engineers to develop new applications and solutions for existing issues in the software library. Assisted in the onsite support efforts of the Operations group within the program. Received a Timely Awards Plan (TAP) award for my support efforts at NAS Meridian August 2011.'
        },
        {
            JobTitle: 'Programmer Analyst I',
            CompanyName: 'Northrop Grumman',
            StartDate: 'December 10, 2007',
            EndDate: 'June 16, 2008',
            Desc: 'Developed and maintained the wide array of software distributed to the USAF and USN that belongs to the Training Integration Management Software (TIMS). Worked with teams of engineers to develop new applications and solutions for existing issues in the software library. Assisted in the onsite support efforts of the Operations group within the program. Received a Timely Awards Plan (TAP) award for my support efforts at NAS Meridian August 2011.'
        },
        {
            JobTitle: 'Software Analyst Internship',
            CompanyName: 'FedEx Freight',
            StartDate: 'May 8, 2006',
            EndDate: 'July 28, 2006',
            Desc: 'Developed customer interfaces for FedEx using Java, SQL, and Visual Basic. Led an R&D project for implementing AJAX functionality to the FedEx customer website.'
        },
        {
            JobTitle: 'Dept of Housing Asst Director',
            CompanyName: 'Colorado State University- Pueblo',
            StartDate: 'October 30, 2003',
            EndDate: 'August 7, 2007',
            Desc: 'Promoted from a Resident Assistant (RA) after two years. Oversaw a staff of RAs and desk support staff, conducted conduct violation interviews, searches, and detainments working in close conjunction with Pueblo’s Sheriff Department, coordinated large events with upwards of hundreds of participants and many local businesses in Pueblo and the surrounding area.'
        }
    ]
};

var ReturnResume = function () {
    var resume = {};

    resume = $('<p />', {});

    resume.append(MyResume.Header);
    resume.append('<br />');
    for (var x in MyResume.ProfessionalExperience) {
        var thisExp = MyResume.ProfessionalExperience[x];
        resume.append('<br />');
        resume.append(
            '<h3>' +
                thisExp.JobTitle +
                ', ' +
                thisExp.CompanyName +
                '- ' +
                thisExp.StartDate +
                ' - ' +
                thisExp.EndDate +
                '</h3>'
        );
        resume.append('<br />');
        resume.append(thisExp.Desc);
        resume.append('<br />');
        resume.append('<br />');
    }

    return resume;
};

var ReturnXmas = function () {
    var background = $('<p style="padding: 10px;" />', {});

    background.append('<h2>Welcome to the Christmas 2018 Gift Exchange Scavenger Hunt!</h2>');
    background.append(
        "<span style='float: left;'>" +
            'This is a scavenger hunt. Not too hard, not too easy. The reward may not be worth the effort. But if you’re game, let’s begin. Like every good journey, the first step is out the front door.' +
            '<br/><br/>That’s it. The first clue is in your palm. Stumped yet?' +
            '</span>'
    );

    return background;
};

var ReturnBackground = function () {
    var background = $('<p style="padding: 10px;" />', {});

    background.append('<h2>About Me...</h2>');
    background.append(
        "<span style='float: left;'>Well first off my name is Adam Beeson and I live in Denver, CO. I have lived in Colorado since 1998 and cannot imagine wanting to live anywhere else. This is probably because I grew up in a place that pales in every possible comparison to the beauty and majesty of the centennial state. I enjoy software development immensely, and currently I am really enjoying learning and evolving skills related to web development. Design is fun (hence the layout of this site), but in the last couple years I have dug into AngularJS and .NET MVC/WebApi2 quite heavily. I also am capable with Python and its associated micro web frameworks like flask, Django, and Pylons. Elsewhere in the stack I have enjoyed getting to know how to best utilize connectivity tools like nodeJS, data tools like mongoDB, and caching tools like reddis. I am part of a couple user groups here in Denver, a .NET one and an HTML5 one, and in my free time I have worked as a part owner of a startup in Portland creating a web application focused on travel and a couple IOS and Android apps and games (available on request).<br/><br/> Unrelated to work, I love snowboarding, hiking, four wheeling, and match rifle shooting. I have also recently picked up fly fishing and cooking, specifically baking. I often use baking as a metaphor for software development, and now that I am pretty decent at it, I would like to report that the metaphor is aptly associated.</span>"
    );

    return background;
};

var ReturnSanFranImage = function () {
    var background = $('<p />', {});

    background.append($('<img />', { src: 'sanfran.png' }));

    return background;
};

var ReturnWolf = function () {
    var background = $('<p />', {});

    var frameset = $('<frameset />', {
        rows: '400',
        framespacing: 0,
        cols: '600',
        width: '100%',
        height: '100%'
    });
    var frame1 = $('<frame />', {
        height: 0,
        name: 'topFrame',
        scrolling: 'NO',
        noresize: true,
        src: 'http://atw.hu/reklam.php?ad=wolf3d&kat=18',
        frameborder: 'NO'
    });
    var frame2 = $('<iframe />', {
        width: 920,
        height: 800,
        name: 'user',
        src: 'http://users.atw.hu/wolf3d/?atw_referer=https%3A%2F%2Fwww.google.com%2Furl%3Fsa%3Dt%26rct%3Dj%26q%3D%26esrc%3Ds%26source%3Dweb%26cd%3D1%26ved%3D0CC8QFjAA%26url%3Dhttp%253A%252F%252Fwolf3d.atw.hu%252F%26ei%3D8KGWUoPcCYOSyAGWqYCoBA%26usg%3DAFQjCNH1R6mXyCwMgDSGVL6J-ucgrBohLQ%26sig2%3DpobuqcJFfhtqt7DYq5pJ9g%26bvm%3Dbv.57155469%2Cd.aWc'
    });

    $(frame2).attr('scrolling', 'no');
    //$(frameset).append(frame1);
    $(frameset).append(frame2);

    background.append(frame2);

    return background;
};

var ReturnBar = function () {
    var background = $('<p />', {});
    var frame2 = $('<iframe />', { width: 980, height: 620, name: 'user', src: './2d/index.html' });

    //$(frame2).attr('scrolling', 'no');
    //$(frameset).append(frame1);
    //$(frameset).append(frame2);

    background.append(frame2);

    return background;
};
