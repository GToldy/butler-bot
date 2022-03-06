module.exports = async message => {
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    const msg = message.content.split(' ')
    
    if (msg[1] == 'team') {
        if (msg[2] == 2) {
            const groups = createGroups(msg[2])
            console.log(groups)
            message.channel.send(`
                Group one:\n\t${groups[0].join('\n\t')}\n\nGroup two:\n\t${groups[1].join('\n\t')}\n\nGroup three:\n\t${groups[2].join('\n\t')}
            `)
        } else if (msg[2] == 3) {
            const groups = createGroups(msg[2])
            console.log(groups)
            message.channel.send(`
                Group one:\n\t${groups[0].join('\n\t')}\n\nGroup two:\n\t${groups[1].join('\n\t')}
            `)
        }
    }

    console.log("It went well");
};

function createGroups(number) {
    const codecoolers = [
        "Toldy Georgina",
        "Kemecsei Klaudia",
        "Polacsek Andrea",
        "Szilágyi Gábor",
        "Sólyom Sándor",
        "Vidács Ákos",
        "Kurai Zoltán"
    ];

    if (number == 2) {
        return threeGroups(codecoolers);
    } else if (number == 3) {
        return twoGroups(codecoolers);
    } else {
        return console.log('Add groups size.');
    }
}

function twoGroups(list) {
    let groupA = [];
    let groupB = [];
    
    for (let i = 0; i < 7; i++) {
        let r = Math.floor(Math.random() * list.length);
        if (i % 2 == 0) {
            groupA.push(list[r]);
            list.splice(r, 1);
        } else {
            groupB.push(list[r]);
            list.splice(r, 1);
        }
    }

    return [ groupA, groupB ]
}

function threeGroups(list) {
    let groupA = [];
    let groupB = [];
    let groupC = [];
    
    for (let i = 0; i < 7; i++) {
        let r = Math.floor(Math.random() * list.length);
        if (i < 3) {
            groupA.push(list[r]);
            list.splice(r, 1);
        } else if (i < 5) {
            groupB.push(list[r]);
            list.splice(r, 1);
        } else {
            groupC.push(list[r]);
            list.splice(r, 1);
        }
    }

    return [ groupA, groupB, groupC ]
}
