const boardComplexity = {
    easy: 3,
    medium: 4,
    hard: 5
}

const shapeData = [
    {
        name: "bottomShape",
        coordinateBalance: [1, 0],
        color: "#ff6384"
    },
    {
        name: "curveBottomRShape",
        coordinateBalance: [1, 1],
        color: "#36a2eb"
    },
    {
        name: "crescentRShape",
        coordinateBalance: [1, 0],
        color: "#ffce56"
    },
    {
        name: "bottom2Shape",
        coordinateBalance: [2, 0],
        color: "#9966ff"
    },
    {
        name: "aslantRShape",
        coordinateBalance: [1, 1],
        color: "#4bc0c0"
    },
    {
        name: "aslant2RShape",
        coordinateBalance: [2, 1],
        color: "#FF7633"
    },
]


const templateData = [
    {
        mode: "dễ",
        templates: [
            {
                level: 1,
                url: "easy/e1.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinate: [2, 0]
                    },
                    {
                        name: "curveBottomRShape",
                        coordinate: [0, 1]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [1, 0]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [0, 0]
                    },
                    {
                        name: "aslantRShape",
                        coordinate: [1, 1]
                    }
                ],
                specialties: [
                    // [0] is standing under [1], [1] is in front of [0]
                    ["curveBottomRShape", "bottom2Shape"],
                    ["aslantRShape", "crescentRShape"],
                ],

            },
            {
                level: 2,
                url: "easy/e2.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinate: [1, 1]
                    },
                    {
                        name: "curveBottomRShape",
                        coordinate: [0, 0]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [1, 0]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [0, 0]
                    },
                    {
                        name: "aslantRShape",
                        coordinate: [1, 1]
                    }
                ],
                specialties: [
                    ["curveBottomRShape", "bottom2Shape"],
                    ["curveBottomRShape", "bottomShape"],
                    ["crescentRShape", "aslantRShape"],
                    ["bottomShape", "aslantRShape"],
                ],
            },
            {
                level: 3,
                url: "easy/e3.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinate: [1, 0]
                    },
                    {
                        name: "curveBottomRShape",
                        coordinate: [0, 0]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [1, 1]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [0, 0]
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
                    ["bottomShape", "crescentRShape"],
                    ["curveBottomRShape", "bottomShape"],
                    ["curveBottomRShape", "bottom2Shape"],
                    ["bottomShape", "crescentRShape"],
                    ["aslantRShape", "bottomShape"],
                    ["aslant2RShape", "aslantRShape"],
                ],
            },
            {
                level: 4,
                url: "easy/e4.png",
                shapes: [
                    {
                        name: "curveBottomRShape",
                        coordinate: [0, 0]
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
                        coordinate: [0, 0]
                    },
                    {
                        name: "aslant2RShape",
                        coordinate: [1, 0]
                    }
                ],
                specialties: [
                    ["curveBottomRShape", "bottom2Shape"],
                    ["crescentRShape", "bottom2Shape"],
                    ["aslantRShape", "bottom2Shape"],
                    ["aslant2RShape", "crescentRShape"],
                ],
            },
            {
                level: 5,
                url: "easy/e5.png",
                shapes: [
                    {
                        name: "bottomShape",
                        coordinate: [0, 0]
                    },
                    {
                        name: "curveBottomRShape",
                        coordinate: [0, 1]
                    },
                    {
                        name: "crescentRShape",
                        coordinate: [0, 0]
                    },
                    {
                        name: "bottom2Shape",
                        coordinate: [0, 0]
                    },
                    {
                        name: "aslantRShape",
                        coordinate: [0, 1]
                    },
                    {
                        name: "aslant2RShape",
                        coordinate: [0, 0]
                    }
                ],
                specialties: [
                    ["curveBottomRShape", "bottomShape"],
                    ["crescentRShape", "aslantRShape"],
                    ["bottom2Shape", "curveBottomRShape"],
                    ["aslantRShape", "bottomShape"],
                    ["aslant2RShape", "crescentRShape"],
                ],
            },
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


const shapeRect = [
    {
      name: "bottomShape",
      rect: {
        top: getRectTop("bottomShape"),
        left: getRectLeft("bottomShape"),
      }
    },
    {
      name: "curveBottomRShape",
      rect: {
        top: getRectTop("curveBottomRShape"),
        left: getRectLeft("curveBottomRShape"),
      }
    },
    {
      name: "crescentRShape",
      rect: {
        top: getRectTop("crescentRShape"),
        left: getRectLeft("crescentRShape"),
      }
    },
    {
      name: "bottom2Shape",
      rect: {
        top: getRectTop("bottom2Shape"),
        left: getRectLeft("bottom2Shape"),
      }
    },
    {
      name: "aslantRShape",
      rect: {
        top: getRectTop("aslantRShape"),
        left: getRectLeft("aslantRShape"),
      }
    },
    {
      name: "aslant2RShape",
      rect: {
        top: getRectTop("aslant2RShape"),
        left: getRectLeft("aslant2RShape"),
      }
    }
  ]

function getRectTop(shape) {
    return document.getElementById(shape).getBoundingClientRect().top;
}
function getRectLeft(shape) {
    return document.getElementById(shape).getBoundingClientRect().left;
}

const boardCells = [];
