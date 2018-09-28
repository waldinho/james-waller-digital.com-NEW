export function getPortfolio() {
    return [
        {
        id: 1,
        title: "Portfolio",
        companies: [
            {
                id: 1,
                title: "Bunnings Warehouse",
                url: "/bunnings",
                text: [
                    {
                        id: 1,
                        paragraph: "Bunnings Warehouse - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    },
                    {
                        id: 2,
                        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    },
                    {
                        id: 3,
                        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    }
                ]
            },
            {
                id: 2,
                title: "Homebase",
                url: "/homebase",
                text: [
                    {
                        id: 1,
                        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    },
                    {
                        id: 2,
                        paragraph: "Homebase - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    },
                    {
                        id: 3,
                        paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                    }
                ]
            },
            {
                id: 3,
                title: "The Independent",
                url: "/independent",
                text: [
                    {
                        id: 1,
                        paragraph: "I recieved a brief while working at The Independent to create a landing page for users that had subscribed to The Independent daily app the previous year to offer them a free gift for renewing thier yearly subscription. The Lading page consisted of several options of the free gift the user was able to choose plus a simple form to fill out providing the customer support team with the relevent details of said user."
                    },
                    {
                        id: 2,
                        paragraph: "The functionality where the user was able to select thier free gift was built using javascript with the landing page template being built using standard HTML and CSS and the email being sent out to from the form the filled in to the customer support team using a php."
                    },
                    {
                        id: 3,
                        paragraph: "The finished version of the landing page can be found <Link to=\"http://www.james-waller.co.uk/loyal-subscribers\" className='link-indy' target='_blank'>here</Link>."
                    }
                    ,
                    {
                        id: 4,
                        paragraph: "And, the original designs for the landing page can be perused below. The only change from the original design was to implement a different font on the landing page to what was on the original designs."
                    }
                ]
            },
            {
                id: 4,
                title: "The Evening Standard",
                url: "/evening-standard",
                text: [
                    {
                        id: 1,
                        paragraph: "During summer 2017, I undertook a huge prjoect for The Evening Standard, the task was to re-work the whole of the site's front end. As you may or may not know The Evening Standard is a huge website, so this was no mean feat."
                    },
                    {
                        id: 2,
                        paragraph: "I recieved the designs from the internal Graphic Designer. The designs were very different from the old site, as well as this we had decided to make the site more modular so sections of the site were now controlled in modules on the front and back end. So this meant changing the SASS and the template structuring."
                    },
                    {
                        id: 3,
                        paragraph: "The templates were built using ejs, this allowed us to parse the data in using a json feed. The whole site worked on the MVC framework structuring principle and as you can see from the before and after shots of the homepage below (exuse the image quality, it was a VERY large file) I think it turned out very well."
                    }
                ]
            },
            {
                id: 5,
                title: "eBay",
                url: "/ebay",
                text: [
                    {
                        id: 1,
                        paragraph: "During my time at FEED, my main responsibilty was working on various different projects for the eBay account. These projects mainly consisted of building landing pages, micro tools and promotional emails for the main eBay site."
                    },
                    {
                        id: 2,
                        paragraph: "I have included a few examples below of a small selection of work I did during my time working on the eBay account."
                    },
                    {
                        id: 3,
                        paragraph: "A common problem eBay were having was that users, whilst on thier site, didn't know the specific tyre type for thier car. So to make this process easier we decided to create a piece of functionality that would find the particular tyres you required by simply typing in you car registration number. This was done by querying a database that eBay had set up with all the different tyre and car varients."
                    },
                    {
                        id: 4,
                        paragraph: "Example:"
                    },
                    {
                        id: 5,
                        paragraph: "I have also included a couple a landing page and promotional email as examples of other typical pieces of work I would of done on the eBay account."
                    },
                    {
                        id: 6,
                        paragraph: "Global shipping programme landing page"
                    },
                    {
                        id: 7,
                        paragraph: "<Link to='http://portal.ebay.co.uk/gsp' target='_blank' className='lp-link'>Link</Link> to landing page"
                    },
                    {
                        id: 8,
                        paragraph: "German fashion promotional email"
                    }
                ]
            },
            {
                id: 6,
                title: "StubHub",
                url: "/stubhub",
                text: [
                    {
                        id: 1,
                        paragraph: "During my time at FEED, I was assigned the task of creating a Euro 2016 'wall chart' for StubHub. This was designed to allow users to keep a track of the fixtures and results of the competition, as well as allowing them to buy tickets up to an hour before the game on the StubHub ticket marketplace."
                    },
                    {
                        id: 2,
                        paragraph: "The website used an external API set up specifically for Euro 2016. This would then populate the project with all the correct data, home team, away team, stadium, kick off date and time, etc. Then once the time had gotten to an hour before keick off the buy and now buttons would be hidden."
                    },
                    {
                        id: 3,
                        paragraph: "As well as this we ran a cron job every couple of minutes to update the score as if the scores were live, the functionality of the project was built using php and the templates were structured using handlebars.js. This worked fine at the time, however if I were to build this project again today (January 2018) I would almost definitely use react.js as this would eliminate the need to run a cron job on the server every few minutes to update the scores."
                    }
                    ,
                    {
                        id: 4,
                        paragraph: "A screenshot of the finished project can be seen below:"
                    }
                ]
            },
            {
                id: 7,
                title: "Kurt Geiger",
                url: "/kurt-geiger",
                text: [
                    {
                        id: 1,
                        paragraph: "This particular work for Kurt Gieger was landed through a freelance opportunity. I was assined the job of re-working the front end of thier careers section on thier website inline with thier new branding. I was allowed access to this particular area of the repo in order to make the changes."
                    },
                    {
                        id: 2,
                        paragraph: "The actual task it self was quite straight forward and jut involved me matching the PSD's provided to to front end but at the time I was thrilled to work with such a huge company such as Kurt Geiger and promptly completed the task well within the deadline and to a very high standard where all involved were very happy with the end product."
                    }
                ]                
            },
            {
                id: 8,
                title: "Shell",
                url: "/shell",
                text: [
                    {
                        id: 1,
                        paragraph: "During my time at Freedman International I worked extensively on the Shell account. The project that I was most pleased to work on with this account was the marketing campaign around the introduction of their QR codes. Basically what they wanted from this particular roject was for the user to recieve an email, then from there they would click through onto a landing page with a promotional video explaing how to use the QR codes to the user."
                    },
                    {
                        id: 2,
                        paragraph: "I was tasked with both the build of the HTML emails (5 in total) and the production of the promotional video using the footage they had supplied. The HTML email builds were no problem, they we completed fairly quickly. Although, as a relative video editing novice I found the production of said video far more challenging."
                    },
                    {
                        id: 3,
                        paragraph: "However, the video was eventually produced on time and to the satisfaction of the client, as well as this the campaign was a success and I learned a fair bit about various editing techniques after being taken well out of my comfort zone with the video production."
                    }
                ]
            },
            {
                id: 9,
                title: "Tradefair",
                url: "/tradefair",
                text: [
                    {
                        id: 1,
                        paragraph: "During my time at London Capital Group, I was assigned the task of re-working Tradefair's (a client of London Capital Groups) online application form for their live and demo trading accounts. This task was Front End focused, it involved me taking a pre-existing design produced by a Graphic designer and turning that into complicit clean and tidy code. The application form interacted with the live and demo accounts databases so I had to be very aware of this while making any changes to the mark up and styling."
                    },
                    {
                        id: 2,
                        paragraph: "The project turned out to be a big success, was delivered to the clients satisfaction and within the delivery deadline. Although the branding and styling has changed since I completed this project in 2010, you can see here that the application form I worked on is still used today."
                    }
                ]
            },
            {
                id: 10,
                title: "BetVictor",
                url: "/betvictor",
                text: [
                    {
                        id: 1,
                        paragraph: "Whislt at London Capital Group, I was assigned the task of re-working BetVictor's (a client of London Capital Groups) look and feel to thier trading website. This task was obviously front end focused, it involved me taking a pre-existing design produced by a Graphic designer and turning that into complicit clean and tidy code."
                    },
                    {
                        id: 2,
                        paragraph: "BetVictor's website was CMS driven (Drupal) and I was given a large say in the look and feel of the website we produced, particularaly during the re-design process, which I was heavily involved in, with the implimentation of the new front end and UX of the website."
                    },
                    {
                        id: 3,
                        paragraph: "The project turned out to be a big success as well as being delivered on time, the client was very happy with the end product."
                    }
                ]
            },
            {
                id: 11,
                title: "LCG",
                url: "/lcg",
                text: [
                    {
                        id: 1,
                        paragraph: "My main responsibility at London Capital Group was the conversion of static HTML websites into CMS (Drupal) driven websites, completing full build from start to finish. I was responsible for the build of various microsites and email campaigns for external and internal marketing teams. Again I was responsible for working on the development of the numerous internal tools used for communication between the IT support team and Development team, for example the bug logging and ticketing system we used, as well as writing applications to automate different tasks performed by the support team to streamline the process as much as possible, for example the implementation of the live chat functionality for communication with clients across the business. London Capital Group operates within an agile environment; working at the company for four years, this methodology is something I am well versed in having been exposed to."
                    }
                ]
            },
            {
                id: 12,
                title: "The Smalls",
                url: "/the-smalls",
                text: [
                    {
                        id: 1,
                        paragraph: "My core responsibility was to look after the day to day running of The Smalls Website. In this varied role I was exposed to all types of development work as I was the sole internal developer at the company."
                    },
                    {
                        id: 2,
                        paragraph: "I primary worked on the front end of the website but also experienced working on server side technologies, from database administration using MySQL to full on server migration whilst working at The Smalls."
                    },
                    {
                        id: 3,
                        paragraph: "The Smalls website was CMS driven (Drupal) and I was given a large say in the look and feel of the website we produced, particularaly when The Smalls went through a re-design process, which I was heavily involved in, with the implimentation of the new front end and UX of the website."
                    },
                    {
                        id: 4,
                        paragraph: "I was als responsible for writing documentation and bug fixing. This role was predominantly web based but I developed applications and tools for internal use as well."
                    }
                ]
            }]
        }
    ]
}
