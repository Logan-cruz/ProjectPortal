//Luke Thompson
//Implement a plugin that will take a scanned character from rpg maker, and replace the character you have with the one you scanned



var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'scan') {
        var newChar = prompt("Which character do you want to play as now?")
        console.log(newChar);
        if (newChar != null) {
            while (newChar != "doenmvpwsfyrnmvklwj" && newChar != "hwqpdjolncikebgufwkndk" && newChar != "wesrdtfgkorhjnlihguiwgqdqwhbk" && newChar != "fisherman") {
                newChar = prompt("Please input a valid character.")
                if (newChar == null) {
                    break
                }
            }
            $gameParty.removeActor(charNum)
            switch (newChar) {
                case "doenmvpwsfyrnmvklwj":
                    var charNum = 2
                    break;
                case "hwqpdjolncikebgufwkndk":
                    var charNum = 3
                    break;
                case "wesrdtfgkorhjnlihguiwgqdqwhbk":
                    var charNum = 4
                    break;
                case "fisherman":
                    var charNum = 5
                    break;
                default:
                    break;
            }
            $gameVariables.setValue(1, charNum);
            console.log($gameVariables.value(1));
        }


    }
    if (command === "fishing") {

        var chances = []
        var fishermanChances = Math.floor($gameParty.highestLevel() / 5) + 2
        console.log(fishermanChances);
        console.log($gameParty.highestLevel() + " is the fisherman's level");
        for (let i = 0; i < fishermanChances; i++) {
            chances.push(Math.round(Math.random() * 100))
        }

        // if (player == "fishguy") {
        //     for (const chance of chances) {
        //         chance += 5;
        //     }
        // }
        chances = chances.sort(function (a, b) { return a - b });

        console.log(chances[chances.length - 1]);
        console.log(chances);

    }
}