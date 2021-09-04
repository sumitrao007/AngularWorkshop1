// json => java script object notation
// its is key & value format
var jsonObj = {
    id: 5,
    "name": "Sumit",
    status: true
};
// 1 use dot operator
// 2 square operator
// console.log(`
// -----------Details is ------------
// Id :: ${jsonObj.id}
// Name is  :: ${jsonObj.name}
// Status  :: ${jsonObj.status}
// `);
//2 Square Operator
// console.log(`
// -------------------------
// Id:: ${jsonObj["id"]}
// Name :: ${jsonObj['name']}
// Status :: ${jsonObj["status"]}
// `)
// Array of Object
var arrobj = [
    {
        id: 9,
        name: 'Sumit',
        role: 'Developer',
        country: {
            cid: 1,
            cname: "India"
        },
        month: ["Jan", "Feb", "March"],
        marks: [
            {
                sub: "Java",
                marks: 40
            },
            {
                sub: "Python",
                marks: 55
            },
            {
                sub: "C++",
                marks: 80
            }
        ]
    },
    {
        id: 6,
        name: 'Kiran',
        role: 'Marketing',
        country: {
            cid: 2,
            cname: "US"
        },
        month: ["Jan", "Feb", "March"],
        marks: [
            {
                sub: "Java",
                marks: 36
            },
            {
                sub: "Python",
                marks: 50
            },
            {
                sub: "C++",
                marks: 85
            }
        ]
    },
    {
        id: 3,
        name: 'Spruha',
        role: 'Admin',
        country: {
            cid: 3,
            cname: "Africa"
        },
        month: ["Jan", "Feb", "March"],
        marks: [
            {
                sub: "Java",
                marks: 42
            },
            {
                sub: "Python",
                marks: 59
            },
            {
                sub: "C++",
                marks: 89
            }
        ]
    }
];
// console.log(`
//     Id :: ${arrobj[0].id}
//     Name :: ${arrobj[0].name}
//     Role :: ${arrobj[0].role}
// `);
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n    -------------------\n    Id :: " + arrobj[i].id + "\n    Name :: " + arrobj[i].name + "\n    Role :: " + arrobj[i].role + "\n    Country:: " + arrobj[i].country.cname + "\n    Month :: " + arrobj[i].month.join("  ") + "\n ");
    for (var j = 0; j < arrobj[i].marks.length; j++) {
        console.log("-------Marks-------------\n        Subject :: " + arrobj[i].marks[j].sub + "\n        Marks :: " + arrobj[i].marks[j].marks + "\n    ");
    }
}
