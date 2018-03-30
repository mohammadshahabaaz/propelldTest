const quizQuestions = [

    // {
    //     question:"Name:",
    //     type:"text",
    // },
    // {
    //     question:"Email Id",
    //     type:"text",
    // },
    // {
    //     question:"Phone Number",
    //     type:"number",
    // },
    {
        question: "10th Percentage(%)",
        answers: [
            {
                type: "CanImprove",
                content: "60-75%"
            },
            {
                type: "NotFit",
                content: "below 60%"
            },
            {
                type: "GoodFit",
                content:"Above 75%"
            },
          
        ]
    },
    {
        question: "12th percentage(%)?",
        answers: [
            {
                type: "CanImprove",
                content: "60-75%"
            },
            {
                type: "NotFit",
                content: "Below 60%"
            },
            {
                type: "GoodFit",
                content:"Above 75%"
            },
          
        ]
    },
    {
        question: "Graduation Field?",
        answers: [
            {
                type: "CanImprove",
                content: "B.tech/Commerce"
            },
            {
                type: "NotFit",
                content: "BBA/Arts/Others"
            },
            {
                type: "GoodFit",
                content:"Statistics/Mathematics/Economics"
            },
          
        ]
    },
    {
        question: "Graduate Percentage?",
        answers: [
            {
                type: "CanImprove",
                content: "55-70%"
            },
            {
                type: "NotFit",
                content: "Below 55%"
            },
            {
                type: "GoodFit",
                content:" Above70%"
            },
          
        ]
    },
    {
        question: "Post-Graduate Percentage(%)?",
        answers: [
            {
                type: "CanImprove",
                content: "55-70%"
            },
            {
                type: "NotFit",
                content: "Not Done"
            },
            {
                type: "GoodFit",
                content:"Above 70%"
            },
          
        ]
    },
  {
      question: "What is usage of Surf Exel in India in a day?",
      answers: [
          {
              type: "CanImprove",
              content: "100 million gms"
          },
          {
              type: "NotFit",
              content: "50 million gms"
          },
          {
              type: "GoodFit",
              content:"440 million gms"
          },
        
      ]
  },
  {
      question: "If I roll two dice, what is the probability the sum of the amounts is nine?",
      answers: [
          {
              type: "GoodFit",
              content: "1/9"
          },
          {
              type: "CanImprove",
              content: "2/9"
          },
          {
              type: "NotFit",
              content: "2/3"
          }
      ]
  },
  {
      question: ["Ravi is too intelligent to fail in the examination.",
      "Assumption I: Very intelligent boys do not fail in the examinations.",
      "Assumption II: Those who are not intelligent at all may fail in the examinations.",].join('\n'),
      answers: [
          {
              type: "NotFit",
              content: "Assumption I is implicit"
          },
          {
              type: "GoodFit",
              content: "Assumption II is implicit"
          },
          {
              type: "CanImprove",
              content: "Both assumption I and II are implicit"
          }
      ]
  },
  {
      question: "There are 10 stacks of 10 coins each. Each coin weighs 10 gms. However, one stack of coins is defective and each coin in that stack weighs only 9 gms. What is the minimum number of weights you need to take to find which stack is defective?",
      answers: [
          {
              type: "NotFit",
              content: "990gms"
          },
          {
              type: "GoodFit",
              content: "550gms"
          },
          {
              type: "CanImprove",
              content: "495gms"
          }
      ]
  },
  {
      question: ["Statement: All books are papers. Some papers are journals. Some journals are calendars.",
      "Conclusion:",
     " I. Some journals are books.",
      "II. Some calendars are papers.",
      "III. Some books are journals.",
      "IV. Some books are calendars.",].join("\n"),
      answers: [
          {
              type: "NotFit",
              content: "II & IV"
          },
          {
              type: "CanImprove",
              content: "I & III"
          },
          {
              type: "GoodFit",
              content: "None of the four"
          }
      ]
  },
  {
    question: "A car has 4 tyres and 1 spare tyre. Each tyre can travel a maximum distance of 20000 kms before wearing off. What is the maximum distance that the car can travel? You are allowed to change tyres(using spare tyre). (Assume that all tyres are used to their full strength).",
    answers: [
        {
            type: "GoodFit",
            content: "25000kms"
        },
        {
            type: "CanImprove",
            content: "24000kms"
        },
        {
            type: "NotFit",
            content: "20000kms"
        }
    ]
},
{
    question: "What is the area of India?",
    answers: [
        {
            type: "GoodFit",
            content: "3.75 million sq km"
        },
        {
            type: "CanImprove",
            content: "6.88 million sq km"
        },
        {
            type: "NotFit",
            content: "1.25 million sq km"
        }
    ]
},
{
    question: "You have 25 horses and you can race only 5 of them simultaneously. Assuming you do not have access to stop-watch, how many times would you need to race the horses to find the 3 fastest horses?",
    answers: [
        {
            type: "GoodFit",
            content: "7"
        },
        {
            type: "CanImprove",
            content: "5"
        },
        {
            type: "NotFit",
            content: "15"
        }
    ]
},
];

export default quizQuestions;
