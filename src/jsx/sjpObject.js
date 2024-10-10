const udemyJava = [
    {
        section: "Control Flow",
        methods: [
            {
                "title": "Sum Even Digits",
                "endpoint": "even-digit-sum",
                "inputs": [
                    {label: "", placeholder:"number", param: "number", defaultValue: undefined},
                ]
            },
            {
                "title": "Diagonal Star",
                "endpoint": "diag-star",
                "inputs": [
                    {label: "", placeholder:"number", param: "number", defaultValue: undefined},
                ]
            },
            {
                "title": "Factor Printer",
                "endpoint": "factor-printer",
                "inputs": [
                    {label: "", placeholder:"number", param: "number", defaultValue: undefined},
                ]
            },
            {
                "title": "Largest Prime",
                "endpoint": "largest-prime",
                "inputs": [
                    {label: "", placeholder:"number", param: "number", defaultValue: undefined},
                ]
            },
            {
                "title": "Number In Word",
                "endpoint": "number-in-word",
                "inputs": [
                    {label: "", placeholder:"number", param: "number", defaultValue: undefined},
                ]
            },
            {
                "title": "Is Palindrome?",
                "endpoint": "palindrome",
                "inputs": [
                    {label: "", placeholder:"number", param: "number", defaultValue: undefined},
                ]
            },
            {
                "title": "Is It Perfect?",
                "endpoint": "perfect-number",
                "inputs": [
                    {label: "", placeholder:"number", param: "number", defaultValue: undefined},
                ]
            },
            {
                "title": "Sum the first and the last digit",
                "endpoint": "first-last-digit-sum",
                "inputs": [
                    {label: "", placeholder:"number", param: "number", defaultValue: undefined},
                ]
            },
            {
                "title": "Can you spell the number, please?",
                "endpoint": "number-to-words",
                "inputs": [
                    {label: "", placeholder:"number", param: "number", defaultValue: undefined},
                ]
            },
            {
                "title": "Greatest Common Divisor",
                "endpoint": "greatest-common-divisor",
                "inputs": [
                    {label: "", placeholder:"number1", param: "number1", defaultValue: undefined},
                    {label: "", placeholder:"number2", param: "number2", defaultValue: undefined},
                ]
            },
            {
                "title": "Flour Packer - Will It Fit?",
                "endpoint": "flour-packer",
                "inputs": [
                    {label: "", placeholder:"fiveKilo", param: "fiveKilo", defaultValue: undefined},
                    {label: "", placeholder:"oneKilo", param: "oneKilo", defaultValue: undefined}, 
                    {label: "", placeholder:"goal", param: "goal", defaultValue: undefined},
                ]
            },
            {
                "title": "Days In A Month",
                "endpoint": "days-in-month",
                "inputs": [
                    { label: "", placeholder: "month",param: "month", defaultValue: undefined},
                    { label: "", placeholder: "year", param: "year", defaultValue: undefined},
                ]
            },
            {
                "title": "Sum Odd Numbers in A Range",
                "endpoint": "sum-odd-range",
                "inputs": [
                    { label: "", placeholder: "start", param: "start", defaultValue: undefined},
                    { label: "", placeholder: "end", param: "end", defaultValue: undefined},
                ]
            },
            {
                "title": "Do They Have A Digit In Common?",
                "endpoint": "shared-digit",
                "inputs": [
                    {label: "", placeholder:"number1", param: "number1", defaultValue: undefined},
                    {label: "", placeholder:"number2", param: "number2", defaultValue: undefined},
                ]
            },
            {
                "title": "How many paint buckets to buy?",
                "endpoint": "paint-job",
                "inputs": [
                    {label: "", placeholder: "area", param: "area", defaultValue: undefined},
                    {label: "", placeholder:"width", param: "width", defaultValue: undefined},
                    {label: "", placeholder:"height", param: "height", defaultValue: undefined},
                    {label: "", placeholder:"areaPerBucket", param: "areaPerBucket", defaultValue: undefined},
                    {label: "", placeholder: "extraBuckets", param: "extraBuckets", defaultValue: undefined},
                ]
            }
        ],
    },
    {
        section: "Expressions, Satetments & More",
        methods: [
            {
                "title": "Circle/Rectangle Area Calculator",
                "endpoint": "area-calc",
                "inputs": [
                    { label: "height / radius:", placeholder:"number1", param: "number1", defaultValue: undefined},
                    {label: "width (for circle, enter -1):", placeholder:"number2", param: "number2", defaultValue: -1},
                ]
            },
            {
                "title": "Should I wake up?",
                "endpoint": "awake",
                "inputs": [
                    {label: "Is any dog barking?", placeholder:"isDogBarking", param: "isBarking", defaultValue: undefined},
                    {label: "What time is it?", placeholder:"eg. 22", param: "time", defaultValue: undefined},
                ]
            },
            {
                "title": "Are the numbers equal?",
                "endpoint": "deci-comp",
                "inputs": [
                    {label:"", placeholder: "number1", param: "number1"},
                    {label:"", placeholder: "number2", param: "number2"},
                ]
            },
            {
                "title": "Does x + y Equals z ?",
                "endpoint": "equality-checker",
                "inputs": [
                    {label:"", placeholder: "number1", param: "number1"},
                    {label:"", placeholder: "number2", param: "number2"},
                    {label:"", placeholder: "number3", param: "number3"},
                ]
            },
            {
                "title": "Is It A Leap Year?",
                "endpoint": "leap-year",
                "inputs": [
                    {label:"year", placeholder: "YYYY", param: "number"},
                ]
            },
            {
                "title": "KiloBytes To MegaBytes Converter",
                "endpoint": "mb-converter",
                "inputs": [
                    {label:"KiloBytes", placeholder: "kB", param: "number"},
                ]
            },
            {
                "title": "Minutes To Years and Days Converter",
                "endpoint": "time-converter",
                "inputs": [
                    {label:"minutes", placeholder: "mins", param: "number"},
                ]
            },
            {
                "title": "Is Cat Playing Outside?",
                "endpoint": "cat-playing",
                "inputs": [
                    {label:"Is it Summer?", placeholder: "", param: "summer"},
                    {label:"Temaperature [°C]", placeholder: "degrees", param: "temperature"},
                ]
            },
            {
                "title": "Check your number's aura. Is it negative, positive or neutral?",
                "endpoint": "check-number",
                "inputs": [
                    {label:"", placeholder: "number", param: "number"},
                ]
            },
            {
                "title": "kph To mph Converter",
                "endpoint": "speed-converter",
                "inputs": [
                    {label:"speed", placeholder: "km per hour", param: "number"},
                ]
            },
            {
                "title": "Is any teen?",
                "endpoint": "has-teen",
                "inputs": [
                    {label:"Person 1", placeholder: "age", param: "age1"},
                    {label:"Person 2", placeholder: "age", param: "age2"},
                    {label:"Person 3", placeholder: "age", param: "age3"},
                ]
            },
        ],
    },
    {
        section: "OOP Part 1 - Inheritance",
        methods: [
            {
                "title": "A Simple Calculator",
                "endpoint": "simple-calculator",
                "inputs": [
                    {label:"", placeholder: "number1", param: "number1"},
                    {label:"", placeholder: "number2", param: "number2"},
                    {label:"", placeholder: "choose1", param: "method", defaultValue: "", options: [
                        {option: "addition", value: "add"},
                        {option: "subtraction", value: "sub"},
                        {option: "division", value: "div"},
                        {option: "multiplication", value: "multi"},
                    ]},
                ]
            },
        ],
    },
    {
        section: "OOP Part 2 - Polymorphism",
        methods: [

        ]
    },
    {
        section: "Arrays",
        methods: [

        ],
    },
    {
        section: "List, ArrayList, Iterator, Autoboxing",
        methods: [

        ],
    },
    {
        section: "Abstraction in Java",
        methods: [

        ],
    },
    {
        section: "Generics",
        methods: [

        ],
    },
    {
        section: "Nested Classes and Types",
        methods: [

        ],
    },
    {
        section: "Lambda Expressions, Functional Interfaces, and Methods References",
        methods: [

        ],
    },
    {
        section: "Java Collections",
        methods: [

        ],
    },
    {
        section: "Using Final, Immutable classes, Constructors, Initializers, Sealed classes",
        methods: [

        ],
    },
    {
        section: "Steams",
        methods: [

        ],
    },
    {
        section: "Back to a Few Nuts and Bolts",
        methods: [

        ],
    },
    {
        section: "Input & Output (I/O), Working with Files with Java",
        methods: [

        ],
    },
    {
        section: "Concurrency",
        methods: [

        ],
    },
    {
        section: "Working with Databases",
        methods: [

        ],
    },
    {
        section: "Java Networking with Channels, Reactive Programming, and Virtual Threads",
        methods: [

        ],
    },
    {
        section: "Debugging and Unit Testing",
        methods: [

        ],
    },
    {
        section: "JavaFX",
        methods: [

        ],
    },
    {
        section: "Java 9 Module System",
        methods: [

        ],
    },
    {
        section: "Migrating Java Projects to Java 9",
        methods: [

        ],
    },

]
export default udemyJava