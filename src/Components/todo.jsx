import uuid from "react-uuid"

export const todo =[
    {
        id:uuid(),
        content: "This bug issue", 
        status: "registered",
        type: 'highly-urgent',
        assigned: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Mahira_Khan_at_Masala_Awards_%28cropped%29.jpg"
    },
    {
        id:uuid(),
        content: "This new project", 
        status: "registered",
        type : "urgent",
        assigned: "https://media-exp1.licdn.com/dms/image/C5603AQF__binUJ7bPg/profile-displayphoto-shrink_800_800/0/1633014577634?e=2147483647&v=beta&t=Da11yBULbUr4r9DovkIEdv8JQJuufW73QzSR2kZOjq8"
    },
    {
        id:uuid(),
        content: "Changes required",
        status: "registered",
        type: "moderate",
        assigned: "https://miro.medium.com/max/1400/0*Ws0J2iSrjro3_YxQ"
    },
    {
        id:uuid(),
        content: "Requested testing",
        status: "registered",
        type: "moderate",
        assigned: "https://miro.medium.com/max/1400/0*Ws0J2iSrjro3_YxQ"
    }
]