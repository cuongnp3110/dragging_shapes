const boardComplexity = {
    easy: 3,
    medium: 4,
    hard: 5
}

const shapeData = [
    {
        name: "bottomShape",
        width: 100,
        height: 200,
        coordinateBalance: [1, 0],
        color: "#ff6384"
    },
    {
        name: "rightShape",
        width: 200,
        height: 100,
        coordinateBalance: [0, 1],
        color: "#FF7633"
    },


    {
        name: "curveBottomRShape",
        width: 200,
        height: 200,
        coordinateBalance: [1, 1],
        color: "#36a2eb"
    },
    {
        name: "curveBottomLShape",
        width: 200,
        height: 200,
        coordinateBalance: [1, 1],
        color: "#36a2eb"
    },
    {
        name: "curveTopRShape",
        width: 200,
        height: 200,
        coordinateBalance: [1, 1],
        color: "#36a2eb"
    },
    {
        name: "curveTopLShape",
        width: 200,
        height: 200,
        coordinateBalance: [1, 1],
        color: "#36a2eb"
    },


    {
        name: "crescentRShape",
        width: 150,
        height: 200,
        coordinateBalance: [1, 0],
        color: "#ffce56"
    },
    {
        name: "crescentLShape",
        width: 150,
        height: 200,
        coordinateBalance: [1, 0],
        color: "#ffce56"
    },
    {
        name: "crescentBShape",
        width: 200,
        height: 150,
        coordinateBalance: [0, 1],
        color: "#ffce56"
    },
    {
        name: "crescentTShape",
        width: 200,
        height: 150,
        coordinateBalance: [0, 1],
        color: "#ffce56"
    },


    {
        name: "bottom2Shape",
        width: 100,
        height: 300,
        coordinateBalance: [2, 0],
        color: "#9966ff"
    },
    {
        name: "right2Shape",
        width: 300,
        height: 100,
        coordinateBalance: [0, 2],
        color: "#9966ff"
    },


    {
        name: "aslantRShape",
        width: 200,
        height: 200,
        coordinateBalance: [1, 1],
        color: "#4bc0c0"
    },
    {
        name: "aslantLShape",
        width: 200,
        height: 200,
        coordinateBalance: [1, 1],
        color: "#4bc0c0"
    },


    {
        name: "aslant2RShape",
        width: 200,
        height: 300,
        coordinateBalance: [2, 1],
        color: "#FF7633"
    },
    {
        name: "aslant2LShape",
        width: 200,
        height: 300,
        coordinateBalance: [2, 1],
        color: "#FF7633"
    },
    {
        name: "aslant2BShape",
        width: 300,
        height: 200,
        coordinateBalance: [1, 2],
        color: "#FF7633"
    },
    {
        name: "aslant2TShape",
        width: 300,
        height: 200,
        coordinateBalance: [1, 2],
        color: "#FF7633"
    },
]


const templateData = [
    {
        mode: "dễ",
        templates: [
            // {
            //     level: 1,
            //     url: "easy/e1.png",
            //     shapes: [
            //         {
            //             name: "bottomShape",
            //             coordinate: [2, 0]
            //         },
            //         {
            //             name: "curveBottomRShape",
            //             coordinate: [0, 1]
            //         },
            //         {
            //             name: "crescentRShape",
            //             coordinate: [1, 0]
            //         },
            //         {
            //             name: "bottom2Shape",
            //             coordinate: [0, 0]
            //         },
            //         {
            //             name: "aslantRShape",
            //             coordinate: [1, 1]
            //         }
            //     ],
            //     specialties: [
            //         // [0] is standing under [1], [1] is in front of [0]
            //         ["curveBottomRShape", "bottom2Shape"],
            //         ["aslantRShape", "crescentRShape"],
            //     ],

            // },
            // {
            //     level: 2,
            //     url: "easy/e2.png",
            //     shapes: [
            //         {
            //             name: "bottomShape",
            //             coordinate: [1, 1]
            //         },
            //         {
            //             name: "curveBottomRShape",
            //             coordinate: [0, 0]
            //         },
            //         {
            //             name: "crescentRShape",
            //             coordinate: [1, 0]
            //         },
            //         {
            //             name: "bottom2Shape",
            //             coordinate: [0, 0]
            //         },
            //         {
            //             name: "aslantRShape",
            //             coordinate: [1, 1]
            //         }
            //     ],
            //     specialties: [
            //         ["curveBottomRShape", "bottom2Shape"],
            //         ["curveBottomRShape", "bottomShape"],
            //         ["crescentRShape", "aslantRShape"],
            //         ["bottomShape", "aslantRShape"],
            //     ],
            // },
            // {
            //     level: 3,
            //     url: "easy/e3.png",
            //     shapes: [
            //         {
            //             name: "bottomShape",
            //             coordinate: [1, 0]
            //         },
            //         {
            //             name: "curveBottomRShape",
            //             coordinate: [0, 0]
            //         },
            //         {
            //             name: "crescentRShape",
            //             coordinate: [1, 1]
            //         },
            //         {
            //             name: "bottom2Shape",
            //             coordinate: [0, 0]
            //         },
            //         {
            //             name: "aslantRShape",
            //             coordinate: [1, 1]
            //         },
            //         {
            //             name: "aslant2RShape",
            //             coordinate: [1, 0]
            //         }
            //     ],
            //     specialties: [
            //         ["bottomShape", "crescentRShape"],
            //         ["curveBottomRShape", "bottomShape"],
            //         ["curveBottomRShape", "bottom2Shape"],
            //         ["bottomShape", "crescentRShape"],
            //         ["aslantRShape", "bottomShape"],
            //         ["aslant2RShape", "aslantRShape"],
            //     ],
            // },
            // {
            //     level: 4,
            //     url: "easy/e4.png",
            //     shapes: [
            //         {
            //             name: "curveBottomRShape",
            //             coordinate: [0, 0]
            //         },
            //         {
            //             name: "crescentRShape",
            //             coordinate: [1, 1]
            //         },
            //         {
            //             name: "bottom2Shape",
            //             coordinate: [1, 0]
            //         },
            //         {
            //             name: "aslantRShape",
            //             coordinate: [0, 0]
            //         },
            //         {
            //             name: "aslant2RShape",
            //             coordinate: [1, 0]
            //         }
            //     ],
            //     specialties: [
            //         ["curveBottomRShape", "bottom2Shape"],
            //         ["crescentRShape", "bottom2Shape"],
            //         ["aslantRShape", "bottom2Shape"],
            //         ["aslant2RShape", "crescentRShape"],
            //     ],
            // },
            // {
            //     level: 5,
            //     url: "easy/e5.png",
            //     shapes: [
            //         {
            //             name: "bottomShape",
            //             coordinate: [0, 0]
            //         },
            //         {
            //             name: "curveBottomRShape",
            //             coordinate: [0, 1]
            //         },
            //         {
            //             name: "crescentRShape",
            //             coordinate: [0, 0]
            //         },
            //         {
            //             name: "bottom2Shape",
            //             coordinate: [0, 0]
            //         },
            //         {
            //             name: "aslantRShape",
            //             coordinate: [0, 1]
            //         },
            //         {
            //             name: "aslant2RShape",
            //             coordinate: [0, 0]
            //         }
            //     ],
            //     specialties: [
            //         ["curveBottomRShape", "bottomShape"],
            //         ["crescentRShape", "aslantRShape"],
            //         ["bottom2Shape", "curveBottomRShape"],
            //         ["aslantRShape", "bottomShape"],
            //         ["aslant2RShape", "crescentRShape"],
            //     ],
            // },



            {
                level: 6,
                url: "easy/e6.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinateBalance: [1, 0],
                    },
                    {
                        name: "bottomShape",
                        coordinateBalance: [1, 0],
                    },
                    {
                        name: "rightShape",
                        coordinateBalance: [0, 1],
                    },
                    // {
                    //     name: "rightShape",
                    //     coordinateBalance: [0, 1],
                    // },
                
                
                    // {
                    //     name: "crescentRShape",
                    //     width: 150,
                    //     height: 200,
                    //     coordinateBalance: [1, 0],
                    //     color: "#ffce56"
                    // },
                    // {
                    //     name: "crescentLShape",
                    //     width: 150,
                    //     height: 200,
                    //     coordinateBalance: [1, 0],
                    //     color: "#ffce56"
                    // },
                    // {
                    //     name: "crescentBShape",
                    //     width: 200,
                    //     height: 150,
                    //     coordinateBalance: [0, 1],
                    //     color: "#ffce56"
                    // },
                    // {
                    //     name: "crescentTShape",
                    //     width: 200,
                    //     height: 150,
                    //     coordinateBalance: [0, 1],
                    //     color: "#ffce56"
                    // },
                
                
                    // {
                    //     name: "bottom2Shape",
                    //     width: 100,
                    //     height: 300,
                    //     coordinateBalance: [2, 0],
                    //     color: "#9966ff"
                    // },
                    // {
                    //     name: "right2Shape",
                    //     width: 300,
                    //     height: 100,
                    //     coordinateBalance: [0, 2],
                    //     color: "#9966ff"
                    // },
                
                
                    // {
                    //     name: "aslantRShape",
                    //     width: 200,
                    //     height: 200,
                    //     coordinateBalance: [1, 1],
                    //     color: "#4bc0c0"
                    // },
                    // {
                    //     name: "aslantLShape",
                    //     width: 200,
                    //     height: 200,
                    //     coordinateBalance: [1, 1],
                    //     color: "#4bc0c0"
                    // },
                
                
                    // {
                    //     name: "aslant2RShape",
                    //     width: 200,
                    //     height: 300,
                    //     coordinateBalance: [2, 1],
                    //     color: "#FF7633"
                    // },
                    // {
                    //     name: "aslant2LShape",
                    //     width: 200,
                    //     height: 300,
                    //     coordinateBalance: [2, 1],
                    //     color: "#FF7633"
                    // },
                    // {
                    //     name: "aslant2BShape",
                    //     width: 300,
                    //     height: 200,
                    //     coordinateBalance: [1, 2],
                    //     color: "#FF7633"
                    // },
                    // {
                    //     name: "aslant2TShape",
                    //     width: 300,
                    //     height: 200,
                    //     coordinateBalance: [1, 2],
                    //     color: "#FF7633"
                    // },
                ],
                specialties: [
                    ["aslant2LShape", "aslant2RShape"],
                    ["aslant2LShape", "right2Shape"],
                ],
            },



            // {
            //     level: 6,
            //     url: "easy/e6.png",
            //     shapes: [
            //         {
            //             name: "aslant2RShape",
            //             coordinate: [1, 0]
            //         },
            //         {
            //             name: "aslant2LShape",
            //             coordinate: [0, 0]
            //         },
            //         {
            //             name: "right2Shape",
            //             coordinate: [0, 1]
            //         },
            //         {
            //             name: "right2Shape",
            //             coordinate: [0, 2]
            //         },
            //     ],
            //     specialties: [
            //         ["aslant2LShape", "aslant2RShape"],
            //         ["aslant2LShape", "right2Shape"],
            //     ],
            // },
            {
                level: 7,
                url: "easy/e7.png",
                shapes: [
                    {
                        name: "curveBottomRShape",
                        coordinate: [0, 1]
                    },
                    {
                        name: "curveBottomLShape",
                        coordinate: [1, 1]
                    },
                    {
                        name: "curveTopRShape",
                        coordinate: [0, 0]
                    },
                    {
                        name: "curveTopLShape",
                        coordinate: [1, 0]
                    },
                ],
                specialties: [
                    ["curveTopLShape", "curveBottomLShape"],
                    ["curveBottomLShape", "curveBottomRShape"],
                    ["curveTopRShape", "curveBottomRShape"],
                    ["curveTopRShape", "curveTopLShape"],
                ],
            },
            {
                level: 8,
                url: "easy/e8.png",
                shapes: [
                    {
                        name: "aslantRShape",
                        coordinate: [0, 0]
                    },
                    {
                        name: "aslantLShape",
                        coordinate: [1, 0]
                    },
                    {
                        name: "bottomShape",
                        coordinate: [1, 1]
                    },
                ],
                specialties: [
                    ["aslantRShape", "aslantLShape"],
                    ["aslantLShape", "bottomShape"],
                ],
            },
            {
                level: 9,
                url: "easy/e9.png",
                shapes: [
                    {
                        name: "aslantLShape",
                        coordinate: [0, 0]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [1, 0]
                    },
                ],
                specialties: [
                    ["aslantLShape", "bottom2Shape"],
                ],
            },
            {
                level: 10,
                url: "easy/e10.png",
                shapes: [
                    {
                        name: "rightShape",
                        coordinate: [0, 0]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [1, 0]
                    },
                    {
                        name: "aslantLShape",
                        coordinate: [0, 1]
                    },
                    {
                        name: "right2Shape",
                        coordinate: [0, 2]
                    },
                ],
                specialties: [
                    ["crescentRShape", "aslantLShape"],
                    ["crescentRShape", "rightShape"],
                    ["aslantLShape", "right2Shape"],
                ],
            }
        ]
    },
    {
        mode: "trung bình",
        templates: [
            {
                level: 1,
                url: "medium/m1.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinate: [2, 2]
                    },
                    {
                        name: "curveBottomRShape",
                        coordinate: [0, 1]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [2, 1]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [1, 0]
                    },
                    {
                        name: "aslantRShape",
                        coordinate: [1, 2]
                    }
                ],
                specialties: [
                    ["bottomShape", "crescentRShape"],
                    ["curveBottomRShape", "bottom2Shape"],
                    ["bottom2Shape", "aslantRShape"],
                    ["aslantRShape", "bottomShape"],
                ],
            },
            {
                level: 2,
                url: "medium/m2.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinate: [2, 1]
                    },
                    {
                        name: "curveBottomRShape",
                        coordinate: [1, 2]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [2, 2]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [1, 0]
                    },
                    {
                        name: "aslantRShape",
                        coordinate: [1, 0]
                    }
                ],
                specialties: [
                    ["curveBottomRShape", "bottom2Shape"],
                    ["crescentRShape", "bottomShape"],
                    ["crescentRShape", "curveBottomRShape"],
                    ["bottom2Shape", "aslantRShape"],
                    ["aslantRShape", "bottomShape"],
                ],
            },
            {
                level: 3,
                url: "medium/m3.png",
                shapes: [
                    {
                        name: "curveBottomRShape",
                        coordinate: [0, 1]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [1, 1]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [1, 0]
                    },
                    {
                        name: "aslantRShape",
                        coordinate: [1, 0]
                    },
                    {
                        name: "aslant2RShape",
                        coordinate: [2, 1]
                    }
                ],
                specialties: [
                    ["curveBottomRShape", "bottom2Shape"],
                    ["crescentRShape", "bottom2Shape"],
                    ["aslantRShape", "bottom2Shape"],
                    ["aslantRShape", "aslant2RShape"],
                ],
            },
            {
                level: 4,
                url: "medium/m4.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinate: [2, 1]
                    },
                    {
                        name: "curveBottomRShape",
                        coordinate: [1, 2]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [2, 2]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [1, 0]
                    },
                    {
                        name: "aslantRShape",
                        coordinate: [1, 0]
                    },
                    {
                        name: "aslant2RShape",
                        coordinate: [1, 0]
                    }
                ],
                specialties: [
                    ["curveBottomRShape", "bottom2Shape"],
                    ["curveBottomRShape", "crescentRShape"],
                    ["crescentRShape", "bottomShape"],
                    ["bottom2Shape", "aslant2RShape"],
                    ["aslantRShape", "bottomShape"],
                    ["aslant2RShape", "aslantRShape"],
                ],
            },
            {
                level: 5,
                url: "medium/m5.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinate: [1, 1]
                    },
                    {
                        name: "curveBottomRShape",
                        coordinate: [1, 1]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [1, 1]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [2, 1]
                    },
                    {
                        name: "aslantRShape",
                        coordinate: [1, 2]
                    },
                    {
                        name: "aslant2RShape",
                        coordinate: [1, 1]
                    }
                ],
                specialties: [
                    ["bottomShape", "aslantRShape"],
                    ["curveBottomRShape", "aslant2RShape"],
                    ["crescentRShape", "curveBottomRShape"],
                    ["aslantRShape", "bottom2Shape"],
                    ["aslant2RShape", "bottomShape"],
                ],
            },
        ]
    },
    {
        mode: "khó",
        templates: [
            {
                level: 1,
                url: "hard/h1.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinate: [1, 1]
                    },
                    {
                        name: "curveBottomRShape",
                        coordinate: [1, 3]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [2, 3]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [2, 1]
                    },
                    {
                        name: "aslantRShape",
                        coordinate: [1, 2]
                    }
                ],
                specialties: [
                    ["crescentRShape", "bottom2Shape"],
                    ["crescentRShape", "curveBottomRShape"],
                    ["aslantRShape", "bottom2Shape"],
                    ["aslantRShape", "bottomShape"],
                ],
            },
            {
                level: 2,
                url: "hard/h2.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinate: [3, 1]
                    },
                    {
                        name: "curveBottomRShape",
                        coordinate: [2, 2]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [3, 2]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [1, 1]
                    },
                    {
                        name: "aslantRShape",
                        coordinate: [1, 1]
                    }
                ],
                specialties: [
                    ["curveBottomRShape", "aslantRShape"],
                    ["crescentRShape", "bottomShape"],
                    ["crescentRShape", "curveBottomRShape"],
                    ["aslantRShape", "bottom2Shape"],
                ],
            },
            {
                level: 3,
                url: "hard/h3.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinate: [3, 2]
                    },
                    {
                        name: "curveBottomRShape",
                        coordinate: [2, 2]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [2, 1]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [2, 1]
                    },
                    {
                        name: "aslantRShape",
                        coordinate: [2, 2]
                    },
                    {
                        name: "aslant2RShape",
                        coordinate: [2, 1]
                    }
                ],
                specialties: [
                    ["aslant2RShape", "aslantRShape"],
                    ["aslantRShape", "curveBottomRShape"],
                    ["curveBottomRShape", "crescentRShape"],
                    ["curveBottomRShape", "bottomShape"],
                    ["crescentRShape", "bottom2Shape"],
                ],
            },
            {
                level: 4,
                url: "hard/h4.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinate: [2, 1]
                    },
                    {
                        name: "curveBottomRShape",
                        coordinate: [1, 1]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [1, 0]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [1, 1]
                    },
                    {
                        name: "aslantRShape",
                        coordinate: [1, 1]
                    },
                    {
                        name: "aslant2RShape",
                        coordinate: [1, 0]
                    }
                ],
                specialties: [
                    ["aslant2RShape", "bottom2Shape"],
                    ["curveBottomRShape", "aslant2RShape"],
                    ["aslantRShape", "curveBottomRShape"],
                    ["crescentRShape", "aslantRShape"],
                    ["bottomShape", "aslant2RShape"],
                ],
            },
        ]
    },
];

let draggedElement = null;
let elemTop, elemLeft;
let pickedShape;
let zIndex = 100;
let level = 1;
let complexity = boardComplexity.easy;
let mode = complexity == 3 ? "dễ" : complexity == 4 ? "trung bình" : "khó";
let expander = mode == "dễ" ? 1.5 : mode == "trung bình" ? 1.2 : 1;

let shape = [];
let
    bottomShape,
    rightShape,
    curveBottomRShape,
    curveBottomLShape,
    curveTopRShape,
    curveTopLShape,
    crescentRShape,
    crescentLShape,
    crescentBShape,
    crescentTShape,
    bottom2Shape,
    right2Shape,
    aslantRShape,
    aslantLShape,
    aslant2RShape,
    aslant2LShape,
    aslant2BShape,
    aslant2TShape;

var shapeRect = [];
const board = findId('board');


//shorten the code findId by findId
function findId(id) {
    return document.getElementById(id);
}

const boardCells = [];

