export const conversations: {
    author: string;
    text?: string;
    link?: string;
    imageUri?: string;
}[][] = [
    [
        {
            author: 'SYSTEM',
            text: 'HI. Tom, an automated chat-bot, will be with you shortly to assist you.',
        },
        {
            author: 'Tom',
            text:
                'Hi! I’m Tom, an automated chat-bot. I’m happy to help you with your purchase. We have all different types of cameras, from inexpensive digital compacts to high-end DSLRs.\n' +
                'In order to ensure that I make the most suitable recommendations for you, I’d like to ask you some questions.',
        },
        {
            author: 'Tom',
            text: 'Is this purchase for you or is this a gift?',
        },
    ],
    [
        {
            author: 'Tom',
            text:
                'Okay, so, you’d like to buy a camera *meorgift*. I’d be glad to help you find a camera.',
        },
        {
            author: 'Tom',
            text:
                'What type of camera are you looking for? Are you looking for a point-and-shoot camera or DSLR?',
        },
        // {
        //     author: 'Tom',
        //     imageUri: '/image/notebooks1.png',
        // },
    ],
    [
        {
            author: 'Tom',
            text:
                'Okay, so you are looking for a *camera/type* camera *meorgift*. Okay, let me ask another question.',
        },
        {
            author: 'Tom',
            text: 'Which brand do you prefer? We have "Nikon", "Sony", "Canon".',
        },
    ],
    [
        {
            author: 'Tom',
            text: 'Okay, Great choice!',
        },
        {
            author: 'Tom',
            text: 'What is your price range? Over $1700? Or Below $1700?',
        },
    ],
    [
        {
            author: 'Tom',
            text: 'Okay, you’d like to buy a *camera/brand* camera *camera/price* $1700.',
        },
        {
            author: 'Tom',
            text: 'Please give me a moment, and I’ll look for the best digital camera for you.',
        },
        {
            author: 'Tom',
            text:
                'Based on your preferences, I’ve located the best digital camera. Please see the following details about the digital camera.',
        },
        {
            author: 'Tom',
            text:
                'We at Digital World hope you’ll like this recommendation and that our advice will help you make an informed decision about which camera best fits your needs.',
        },
        {
            author: 'Tom',
            text: '*camera-choice-space*',
        },
        {
            author: 'Tom',
            text: 'Thank you!',
        },
    ],
];
