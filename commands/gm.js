const Discord = require('discord.js');

module.exports = {
    name: 'gm',
    async execute(message, args) {
        console.log("Executing gm command")
        const randomText = ["RISE AND SHINE!", "JEEE EEEM!!", "GM FAMS!"];
        const randomIndex = Math.floor(Math.random() * randomText.length);
        const randomGreeting = randomText[randomIndex];

        const randomImage = ["https://ibb.co/VjqmYV7","https://ibb.co/0ZZsqsn","https://ibb.co/LxQ3X3y"]
        const randomIndexImg = Math.floor(Math.random() * randomText.length);
        const randomImaging = randomImage[randomIndexImg];

        const file = new Discord.MessageAttachment(randomImage);

        const exampleEmbed = {
            title: randomGreeting,
            image: {
                url: randomImage,
            },
        };
        
        message.send({ files: [file], embed: exampleEmbed });
    },
};
